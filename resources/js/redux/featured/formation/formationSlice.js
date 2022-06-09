import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const initialState={
    cartItems:localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmont: 0,

}

const formationSlice = createSlice({
    name:"formation",
    initialState,
    reducers:{
        //Ajouter au panier
        addCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;

                toast.success("Vous avez augmenter le nombre de participants avec succès",{position:"top-right",})
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.info("Formation ajouter au panier avec succès",{position:"top-right",})
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
                toast.warning("Vous avez diminuer le nombre de participants",{position:"top-right",})
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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

    },
    extraReducers:{}
});
export const getCart = (state) => state.cart.cartItems;
export const getCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const {
    addCart,removeFromCart,clearCart,

    decreaseCartQty,

    getTotals,
}=formationSlice.actions;
export default formationSlice.reducer
