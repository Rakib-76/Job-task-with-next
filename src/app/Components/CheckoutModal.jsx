"use client";

import { useCart } from "@/context/CartContext";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { showSuccess, showError } from "@/utils/toast";
import Image from "next/image";

const CheckoutModal = () => {
    const { cartItems, removeFromCart, isCheckoutOpen, closeCheckout, clearCart } = useCart();
    const [loading, setLoading] = useState(false);

    if (!isCheckoutOpen) return null;

    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleCheckout = async () => {
        if (cartItems.length === 0) return;
        setLoading(true);
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: cartItems, isBuyNow: false })
            });
            const data = await res.json();

            if (res.ok) {
                showSuccess("Order placed successfully!");
                clearCart();
                closeCheckout();
            } else {
                showError(data.error || "Checkout failed");
            }
        } catch (error) {
            showError("Something went wrong");
        }
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-xl overflow-hidden relative animate-fadeIn">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                    <button
                        onClick={closeCheckout}
                        className="text-gray-500 hover:text-red-500 transition"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500 py-10">
                            Your cart is empty.
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.productId} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 relative overflow-hidden rounded-md border">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-500">
                                            {item.quantity} x ৳{item.price}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <p className="font-bold text-gray-800">৳{item.price * item.quantity}</p>
                                    <button
                                        onClick={() => removeFromCart(item.productId)}
                                        className="text-red-400 hover:text-red-600 transition p-1"
                                        title="Remove Item"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t bg-gray-50">
                        <div className="flex justify-between items-center mb-4 text-lg font-bold">
                            <span>Total:</span>
                            <span>৳ {total}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            disabled={loading}
                            className="w-full bg-[#07b4b0] text-white py-3 rounded-lg font-semibold hover:bg-[#059692] transition disabled:opacity-50"
                        >
                            {loading ? "Processing..." : "Confirm Purchase"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;
