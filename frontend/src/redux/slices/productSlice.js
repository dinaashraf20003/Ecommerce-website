// src/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        },
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter(product => product.id !== action.payload.id);
        },
    },
});

export const { setProducts, addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
