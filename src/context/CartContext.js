"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { showSuccess, showError } from "../utils/toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { data: session, status } = useSession();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const openCheckout = () => setIsCheckoutOpen(true);
    const closeCheckout = () => setIsCheckoutOpen(false);

    // Load cart on component mount or session change
    useEffect(() => {
        const loadCart = async () => {
            setLoading(true);
            if (status === "authenticated") {
                // Fetch from MongoDB
                try {
                    const res = await fetch("/api/cart");
                    const data = await res.json();
                    if (data.items) {
                        setCartItems(data.items);
                    }
                } catch (error) {
                    console.error("Failed to load cart", error);
                }
            } else {
                // Load from LocalStorage
                const localCart = JSON.parse(localStorage.getItem("gadgetStationCart") || "[]");
                setCartItems(localCart);
            }
            setLoading(false);
        };

        loadCart();
    }, [status]);

    // Sync with LocalStorage
    useEffect(() => {
        localStorage.setItem("gadgetStationCart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Merge Guest Cart on Login
    useEffect(() => {
        const mergeCart = async () => {
            const localCart = JSON.parse(localStorage.getItem("gadgetStationCart") || "[]");
            if (status === "authenticated" && localCart.length > 0) {
                try {
                    // Send local cart to API to merge
                    await fetch("/api/cart/merge", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ items: localCart }),
                    });
                    // Clear local storage and reload/refetch
                    localStorage.removeItem("gadgetStationCart");
                    const res = await fetch("/api/cart");
                    const data = await res.json();
                    if (data.items) setCartItems(data.items);
                } catch (error) {
                    console.error("Cart merge failed", error);
                }
            }
        };

        if (status === "authenticated") {
            mergeCart();
        }
    }, [status]);


    const addToCart = async (product) => {
        // Validate stock
        if (product.stock <= 0) {
            showError("Out of stock!");
            return;
        }

        const newItem = {
            productId: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            stock: product.stock,
            quantity: 1,
        };

        // 1. Optimistic Update (State + LocalStorage)
        setCartItems((prev) => {
            let updatedCart;
            const existing = prev.find((item) => item.productId === product._id);
            if (existing) {
                if (existing.quantity + 1 > product.stock) {
                    showError("Cannot add more than available stock");
                    return prev;
                }
                updatedCart = prev.map((item) =>
                    item.productId === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedCart = [...prev, newItem];
            }

            // Save to LocalStorage immediately for persistence
            localStorage.setItem("gadgetStationCart", JSON.stringify(updatedCart));
            return updatedCart;
        });

        // 2. Show Success Feedback
        showSuccess("Added to cart");

        // 3. Database Sync (if authenticated)
        if (status === "authenticated") {
            try {
                await fetch("/api/cart", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newItem),
                });
                // We intentionally don't await the response to keep UI snappy, 
                // or we could refetch to ensure sync:
                // const res = await fetch("/api/cart");
                // const data = await res.json();
                // setCartItems(data.items);
            } catch (error) {
                console.error("Failed to sync with database", error);
                // Optional: showError("Synced failed");
            }
        }
    };

    const removeFromCart = async (productId) => {
        if (status === "authenticated") {
            try {
                const res = await fetch(`/api/cart?productId=${productId}`, {
                    method: "DELETE"
                });
                const data = await res.json();
                if (res.ok) setCartItems(data.items);
            } catch (error) {
                showError("Failed to remove item");
            }
        } else {
            setCartItems((prev) => prev.filter((item) => item.productId !== productId));
        }
    };

    const updateQuantity = async (productId, newQuantity, stock) => {
        if (newQuantity > stock) {
            showError("Insufficient stock");
            return;
        }
        if (newQuantity < 1) return;

        if (status === "authenticated") {
            // API Call would go here (for brevity, assuming simple optimistic update or full fetch)
            // For this task, I'll stick to a simple re-fetch or state update
            // Implementing a PATCH endpoint for generic updates is best
            try {
                const res = await fetch("/api/cart", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ productId, quantity: newQuantity })
                });
                const data = await res.json();
                if (res.ok) setCartItems(data.items);
            } catch (e) { showError("Update failed"); }

        } else {
            setCartItems(prev => prev.map(item => item.productId === productId ? { ...item, quantity: newQuantity } : item));
        }
    }

    const clearCart = async () => {
        if (status === "authenticated") {
            // Call API to clear
        }
        setCartItems([]);
        localStorage.removeItem("gadgetStationCart");
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, loading, isCheckoutOpen, openCheckout, closeCheckout }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
