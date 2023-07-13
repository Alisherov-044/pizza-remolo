import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../actions';
import { updateLocalStorage } from '../../utils';

const localStorageKey = 'products'
const localState = localStorage.getItem(localStorageKey)

const initialState = {
    items: localState ? JSON.parse(localState) : [],
    isLoading: false,
    isError: false
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            const { status, data } = payload
            if (status === 200) {
                state.items = data
                state.isError = false
            } else {
                state.isError = false
            }
            state.isLoading = false
            updateLocalStorage(localStorageKey, state.items)
        }),
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(getProducts.rejected, (state) => {
            state.isError = true
        })
    }
})

export default productsSlice.reducer;