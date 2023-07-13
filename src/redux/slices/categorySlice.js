import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../actions';
import { updateLocalStorage } from '../../utils';

const localStorageKey = 'categories'
const localState = localStorage.getItem(localStorageKey)

const initialState = localState ? JSON.parse(localState) : {
    items: [],
    activeCategory: 1,
    isLoading: false,
    isError: false
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            const { status, data } = payload
            if (status === 200) {
                state.items = data
                state.isError = false
            } else {
                state.isError = true
            }
            state.isLoading = false
            updateLocalStorage(localStorageKey, state)
        }),
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(getCategories.rejected, (state) => {
            state.isError = true
        })
    }
})

export default categoriesSlice.reducer;