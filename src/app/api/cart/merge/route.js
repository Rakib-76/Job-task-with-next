import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { items: guestItems } = await req.json(); // Items from localStorage

    if (!guestItems || guestItems.length === 0) {
        return NextResponse.json({ message: "No items to merge" });
    }

    try {
        const cartCollection = await dbConnect(collectionNameObj.cartCollection);
        let userCart = await cartCollection.findOne({ email: session.user.email });

        if (!userCart) {
            // User has no cart, just save the guest items
            await cartCollection.insertOne({
                email: session.user.email,
                items: guestItems,
            });
        } else {
            // Merge logic
            const newItems = [...userCart.items];

            guestItems.forEach((guestItem) => {
                const existingIndex = newItems.findIndex(
                    (item) => item.productId === guestItem.productId
                );

                if (existingIndex > -1) {
                    // Careful with stock limits here, but for now we sum
                    newItems[existingIndex].quantity += guestItem.quantity;
                    // Optionally cap at stock if available in item data
                    if (newItems[existingIndex].stock && newItems[existingIndex].quantity > newItems[existingIndex].stock) {
                        newItems[existingIndex].quantity = newItems[existingIndex].stock;
                    }
                } else {
                    newItems.push(guestItem);
                }
            });

            await cartCollection.updateOne(
                { email: session.user.email },
                { $set: { items: newItems } }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Merge failed" }, { status: 500 });
    }
}
