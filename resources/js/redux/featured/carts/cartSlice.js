import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmont: 0,
  shippingAddress: localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {},
  payementMethod: localStorage.getItem("payementMethod")
  ? localStorage.getItem("payementMethod")
  : null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (CartItem) => CartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCartQty(state, action) {
      const indexItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[indexItem].cartQuantity > 1) {
        state.cartItems[indexItem].cartQuantity -= 1;
      } else if (state.cartItems[indexItem].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (CartItem) => CartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmont = total;
    },

    addShippingAdress(state,action){
      const address = action.payload;
      state.shippingAddress = {...address}

      localStorage.setItem("shippingAddress", JSON.stringify(state.shippingAddress));
    },
    addPayementDetail(state,action){
      const payement = action.payload;
      state.payementMethod = {...payement}

      localStorage.setItem("payementMethod", state.payementMethod);
    }
  },
});
export const getCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const getCart = (state) => state.cart.cartItems;
export const getShipping = (state) => state.cart.shippingAddress;
export const {
  addCart,
  removeFromCart,
  decreaseCartQty,
  clearCart,
  getTotals,
  addShippingAdress,
  addPayementDetail
} = cartSlice.actions;
export default cartSlice.reducer;
