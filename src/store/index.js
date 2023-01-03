import { configureStore } from '@reduxjs/toolkit';
import planesSlice from './planes/planesSlice';
import planeSlice from './plane/planeSlice';
import userReducer from './slices/userSlice';
import paintersSlice from './painters/paintersSlice';
import painterSlice from './painter/painterSlice';
import categorySlice from './category/categorySlice';
import categoriesSlice from './categories/categoriesSlice';
import CartSlice from './cart/cartSlice'

export const store = configureStore(({
    reducer: {
        planes: planesSlice,
        plane: planeSlice,
        user: userReducer,
        painters: paintersSlice,
        painter: painterSlice,
        cart: CartSlice,
        categories: categoriesSlice,
        category: categorySlice
    }
}))