    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
        name: "cart",
        initialState: {
            items: [],
            totalAmount: 0,
            loading: false,
            error: null,
        },
        reducers: {
            addItemToCart(state, action) {
                const item = action.payload;
                const existingItemIndex = state.items.findIndex((i) => i.id === item.id);

                if (existingItemIndex >= 0) {
                    state.items[existingItemIndex].quantity += item.quantity;
                } else {
                    state.items.push({
                        ...item,
                        quantity: item.quantity || 1, // Ensure quantity is set
                    });
                }
                state.totalAmount += item.price * item.quantity;
            },
            decrementItemQuantity(state, action) {
                const itemId = action.payload;
                const existingItemIndex = state.items.findIndex((i) => i.id === itemId);
                if (existingItemIndex >= 0) {
                    const item = state.items[existingItemIndex];
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                        state.totalAmount -= item.price;
                    } else {
                        // If quantity is 1, remove the item from the cart
                        state.items.splice(existingItemIndex, 1);
                        state.totalAmount -= item.price;
                    }
                }
            },
            removeItemFromCart(state, action) {
                const itemId = action.payload;
                const existingItemIndex = state.items.findIndex((i) => i.id === itemId);

                if (existingItemIndex >= 0) {
                    const item = state.items[existingItemIndex];
                    state.totalAmount -= item.price * item.quantity;
                    state.items.splice(existingItemIndex, 1);
                }
            },
            clearCart(state) {
                state.items = [];
                state.totalAmount = 0;
            },
            setLoading(state, action) {
                state.loading = action.payload;
            },
            setError(state, action) {
                state.error = action.payload;
            },
        },
    })

    export const {
        addItemToCart,
        decrementItemQuantity,
        removeItemFromCart,
        clearCart,
        setLoading,
        setError,
    } = cartSlice.actions;

    export const selectCartItems = (state) => state.cart.items;
    export const selectCartItemCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
    export const selectCartTotalItems = (state) => state.cart.items.length;
    export const selectCartTotalAmount = (state) => state.cart.totalAmount;
    export const selectCartLoading = (state) => state.cart.loading;
    export const selectCartError = (state) => state.cart.error;

    export default cartSlice.reducer;