import { createSlice } from "@reduxjs/toolkit";

let savedData = JSON.parse(localStorage.getItem("cart")) || [];

savedData = savedData.map(item => ({
  ...item,
  quantity: item.quantity || 1
}));

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: savedData,
    error: null,
    loading: false
  },

  reducers: {

    addToCart: (state, action) => {
      const exists = state.data.find(item => item.id === action.payload.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.data));
    },

    RemoveFromCart: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.data));
    },

    clearCart: (state) => {
      state.data = [];
      localStorage.setItem('cart', JSON.stringify(state.data));
    },

    increaseQuantity: (state, action) => {
      const item = state.data.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.data));
    },

    decreaseQuantity: (state, action) => {
      const item = state.data.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.data));
    }

  }
});

export const { addToCart, RemoveFromCart, clearCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;

export const CartFuncations = CartSlice.reducer;
export default CartFuncations;
