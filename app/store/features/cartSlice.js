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

      const price = Number(item.price);

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].cartQuantity += item.cartQuantity;
      } else {
        state.items.push({
          ...item,
          cartQuantity: item.cartQuantity || 1,
        });
      }

      state.totalAmount += price * item.cartQuantity;
    },

    decrementItemQuantity(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex((i) => i.id === itemId);

      if (existingItemIndex >= 0) {
        const item = state.items[existingItemIndex];
        const price = Number(item.price);

        if (item.cartQuantity > 1) {
          item.cartQuantity -= 1;
          state.totalAmount -= price;
        } else {
          state.items.splice(existingItemIndex, 1);
          state.totalAmount -= price;
        }
      }
    },

    increaseItemQuantity(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex((i) => i.id === itemId);

      if (existingItemIndex >= 0) {
        const item = state.items[existingItemIndex];
        const price = Number(item.price);

        item.cartQuantity += 1;
        state.totalAmount += price;
      }
    },

    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex((i) => i.id === itemId);

      if (existingItemIndex >= 0) {
        const item = state.items[existingItemIndex];
        const price = Number(item.price);

        state.totalAmount -= price * item.cartQuantity;
        state.items.splice(existingItemIndex, 1);
      }
    },

    changeQuantityInCart(state, action) {
      const { itemId, newQuantity } = action.payload;
      const existingItemIndex = state.items.findIndex((i) => i.id === itemId);

      if (existingItemIndex >= 0) {
        const item = state.items[existingItemIndex];
        const price = Number(item.price);

        const oldQuantity = item.cartQuantity;
        item.cartQuantity = newQuantity;
        state.totalAmount += (newQuantity - oldQuantity) * price;
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
});

export const {
  addItemToCart,
  decrementItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
  changeQuantityInCart,
  clearCart,
  setLoading,
  setError,
} = cartSlice.actions;

// ✅ Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectCartItemCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.cartQuantity, 0);

export const selectCartTotalItems = (state) => state.cart.items.length;

export const selectCartTotalAmount = (state) =>
  parseFloat(state.cart.totalAmount.toFixed(2));

export const selectCartSubtotal = (state) => {
  return parseFloat(
    state.cart.items.reduce(
      (total, item) => total + Number(item.price) * item.cartQuantity,
      0
    ).toFixed(2)
  );
};

export const selectItemQuantity = (state, itemId) => {
  const existingItem = state.cart.items.find((item) => item.id === itemId);
  return existingItem ? existingItem.cartQuantity : 0;
};

export const selectCartLoading = (state) => state.cart.loading;

export const selectCartError = (state) => state.cart.error;

export const selectAvailableQuantity = (state, itemId) => {
  const existingItem = state.cart.items.find((item) => item.id === itemId);
  return existingItem ? item.quantity : 0;
};

export default cartSlice.reducer;
