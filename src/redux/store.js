import { configureStore } from '@reduxjs/toolkit';
import layoutSlice from './slices/layoutSlice';
import pagesSlice from './slices/pagesSlice';
import productsSlice from './slices/productsSlice';
import categoriesSlice from './slices/categorySlice';
import authSlice from './slices/authSlice';

const store = configureStore({
    reducer: {
        layout: layoutSlice,
        pages: pagesSlice,
        products: productsSlice,
        categories: categoriesSlice,
        auth: authSlice
    }
})

export default store;