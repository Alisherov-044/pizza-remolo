import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    asideIsOpen: false,
    isCheckout: false,
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        toggleAside: (state) => {
            state.asideIsOpen = !state.asideIsOpen;
        },
        setCheckout: (state, { payload }) => {
            state.isCheckout = payload
        }
    }
})

export const {
    toggleAside,
    setCheckout
} = layoutSlice.actions;

export default layoutSlice.reducer;