import { createSlice } from '@reduxjs/toolkit';
import { getPages } from '../actions';
import { updateLocalStorage } from '../../utils';

const localStorageKey = 'pages'
const localState = localStorage.getItem(localStorageKey)

const initialState = {
    items: localState ? JSON.parse(localState) : [],
    isLoading: false,
    isError: false
}

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPages.fulfilled, (state, { payload }) => {
            const { status, data } = payload
            if (status === 200) {
                state.items = data
                state.isError = false
            } else {
                state.isError = true
            }
            state.isLoading = false
            updateLocalStorage(localStorageKey, state.items)
        }),
        builder.addCase(getPages.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(getPages.rejected, (state) => {
            state.isError = true
        })
    }
})

export default pagesSlice.reducer;