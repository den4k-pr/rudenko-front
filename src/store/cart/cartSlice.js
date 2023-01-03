import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
};

const CartSlice = createSlice({
    name: 'caart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0);
        },
        // addItem(state, action) {
        //     const findItem = state.items.find(obj => obj.id === action.payload.id);

        //     if (findItem) {
        //         findItem.count++;
        //     } else {
        //         state.items.push({
        //             ...action.payload,
        //             count: 1,
        //         })
        //     }

        //     state.totalPrice = state.items.reduce((sum, obj) => {
        //         return (obj.price + obj.count) + sum;
        //     }, 0);
        // },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = 0;
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        }
    }
})

export const { addItem, removeItem, clearItems } = CartSlice.actions;

export default CartSlice.reducer;