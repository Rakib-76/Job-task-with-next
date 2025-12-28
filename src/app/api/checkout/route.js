import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ObjectId } from "mongodb";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Items to checkout (could be full cart or 'buy now' item)
    const { items, isBuyNow } = await req.json();

    if (!items || items.length === 0) {
        return NextResponse.json({ error: "No items to checkout" }, { status: 400 });
    }

    try {
        const productCollection = await dbConnect(collectionNameObj.productCollection);
        const cartCollection = await dbConnect(collectionNameObj.cartCollection);
        const orderCollection = await dbConnect(collectionNameObj.orderCollection);

        // 1. Validate Stock
        for (const item of items) {
            const product = await productCollection.findOne({ _id: new ObjectId(item.productId) });
            if (!product) {
                return NextResponse.json({ error: `Product not found: ${item.name}` }, { status: 400 });
            }
            if (product.stock < item.quantity) {
                return NextResponse.json({ error: `Insufficient stock for: ${item.name}` }, { status: 400 });
            }
        }

        // 2. Deduct Stock
        for (const item of items) {
            await productCollection.updateOne(
                { _id: new ObjectId(item.productId) },
                { $inc: { stock: -item.quantity } }
            );
        }

        // 3. Create Order Record
        const order = {
            userId: session.user.email, // or unique ID
            items: items,
            totalAmount: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            status: "completed",
            createdAt: new Date()
        };
        await orderCollection.insertOne(order);

        // 4. Clear Cart (if it wasn't a Buy Now action)
        if (!isBuyNow) {
            await cartCollection.updateOne(
                { email: session.user.email },
                { $set: { items: [] } }
            );
        }

        return NextResponse.json({ success: true, orderId: order._id });
    } catch (error) {
        console.error("Checkout error:", error);
        return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
    }
}
