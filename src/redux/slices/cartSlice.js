import { createSlice } from "@reduxjs/toolkit";
import { updateLocalStorage } from '../../utils'

const localStorageKey = 'cart';
const localState = localStorage.getItem(localStorageKey)

const initialState = {
    items: localState ? JSON.parse(localState) : []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }) => {
            let isProductExist = state.items.some(product => product.id === payload.id)

            state.items = isProductExist ? (
                state.items.map(product => product.id === payload.id ? {...product, quantity: product.quantity + 1} : product)
            ) : (
                [
                    ...state.items,
                    {
                        ...payload,
                        quantity: 1
                    }
                ]
            )

            updateLocalStorage(localStorageKey, state.items)
        },
        removeCart: (state, { payload }) => {
            state.items = state.items.filter(product => product.id !== payload)
            updateLocalStorage(localStorageKey, state.items)
        },
        increaseCart: (state, { payload }) => {
            state.items = state.items.map(product => product.id === payload ? {...product, quantity: product.quantity + 1} : product)
            updateLocalStorage(localStorageKey, state.items)
        },
        decreaseCart: (state, { payload }) => {
            state.items = state.items.map(product => product.id === payload ? {...product, quantity: product.quantity - 1} : product)
            updateLocalStorage(localStorageKey, state.items)
        },
        clearCart: (state) => {
            state.items = []
            updateLocalStorage(localStorageKey, state.items)
        }
    }
})

export const { setCart, removeCart, increaseCart, decreaseCart, clearCart } = cartSlice.actions

export default cartSlice.reducer