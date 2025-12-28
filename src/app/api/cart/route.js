import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const cartCollection = await dbConnect(collectionNameObj.cartCollection);
        const cart = await cartCollection.findOne({ email: session.user.email });
        return NextResponse.json({ items: cart ? cart.items : [] });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 });
    }
}

export async function POST(req) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { productId, name, price, image, stock, quantity } = await req.json();

    try {
        const cartCollection = await dbConnect(collectionNameObj.cartCollection);
        const cart = await cartCollection.findOne({ email: session.user.email });

        if (cart) {
            // Check if product exists in cart
            const existingItemIndex = cart.items.findIndex(
                (item) => item.productId.toString() === productId.toString()
            );

            if (existingItemIndex > -1) {
                // Update quantity
                const currentQty = cart.items[existingItemIndex].quantity;
                if (currentQty + quantity > stock) {
                    return NextResponse.json({ error: "Stock limit exceeded" }, { status: 400 });
                }

                cart.items[existingItemIndex].quantity += quantity;
                await cartCollection.updateOne(
                    { email: session.user.email },
                    { $set: { items: cart.items } }
                );
            } else {
                // Add new item
                await cartCollection.updateOne(
                    { email: session.user.email },
                    {
                        $push: {
                            items: { productId, name, price, image, stock, quantity },
                        },
                    }
                );
            }
        } else {
            // Create new cart
            await cartCollection.insertOne({
                email: session.user.email,
                items: [{ productId, name, price, image, stock, quantity }],
            });
        }

        const updatedCart = await cartCollection.findOne({ email: session.user.email });
        return NextResponse.json({ items: updatedCart.items });
    } catch (error) {
        return NextResponse.json({ error: "Failed to add to cart" }, { status: 500 });
    }
}

export async function DELETE(req) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const productId = searchParams.get('productId');

    if (!productId) return NextResponse.json({ error: "Product ID required" }, { status: 400 });

    try {
        const cartCollection = await dbConnect(collectionNameObj.cartCollection);
        await cartCollection.updateOne(
            { email: session.user.email },
            { $pull: { items: { productId: productId } } }
        );
        const updatedCart = await cartCollection.findOne({ email: session.user.email });
        return NextResponse.json({ items: updatedCart ? updatedCart.items : [] });
    } catch (error) {
        return NextResponse.json({ error: "Failed to remove item" }, { status: 500 });
    }
}

export async function PATCH(req) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { productId, quantity } = await req.json();

    try {
        const cartCollection = await dbConnect(collectionNameObj.cartCollection);
        // We use arrayFilters to update a specific item in the items array
        await cartCollection.updateOne(
            { email: session.user.email, "items.productId": productId },
            { $set: { "items.$.quantity": quantity } }
        );
        const updatedCart = await cartCollection.findOne({ email: session.user.email });
        return NextResponse.json({ items: updatedCart ? updatedCart.items : [] });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update quantity" }, { status: 500 });
    }
}
