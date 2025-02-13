import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // state.cartItems.push(action.payload)
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        let temproductitem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temproductitem);
      }
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});
export default cartSlice.reducer;

export const { addToCart, decreaseCart } = cartSlice.actions;
