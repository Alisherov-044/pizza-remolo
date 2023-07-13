import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from '../lib';
import {
    CATEGORIES_GET_URL,
    LOGIN_URL,
    PAGES_GET_URL,
    PRODUCTS_GET_URL,
    PRODUCT_ADD_URL,
    PRODUCT_DELETE_URL,
    PRODUCT_EDIT_URL,
} from '../utils'
import { CATEGORY_ADD_URL, CATEGORY_DELETE_URL, CATEGORY_EDIT_URL } from '../utils/urls';

export const getPages = createAsyncThunk('pages/getAllPages', async (_, thunkApi) => {
    const response = await Axios('get', PAGES_GET_URL);
    const info = {
        status: response.status,
        data: response.data
    }
    return info
})

export const getProducts = createAsyncThunk('products/getAllProducts', async (_, thunkApi) => {
    const response = await Axios('get', PRODUCTS_GET_URL);
    const info = {
        status: response.status,
        data: response.data
    }
    return info
})

export const getCategories = createAsyncThunk('categories/getAllCategories', async (_, thunkApi) => {
    const response = await Axios('get', CATEGORIES_GET_URL)
    const info = {
        status: response.status,
        data: response.data
    }
    return info
})

export const addProduct = async (data) => {
    const response = await Axios('put', PRODUCT_ADD_URL, data)
    const info = {
        status: response.status,
        data: response.data
    }
    return info
}

export const editProduct = async (data, id) => {
    const response = await Axios('patch', PRODUCT_EDIT_URL(id), data)
    const info = {
        status: response.status,
        data: response.data
    }
    return info
}

export const deleteProduct = async (id) => {
    const response = await Axios('delete', PRODUCT_DELETE_URL(id))
    const info = {
        status: response.status,
    }
    return info
}

export const addCategory = async (data) => {
    const response = await Axios('put', CATEGORY_ADD_URL, data)
    const info = {
        status: response.status,
        data: response.data
    }
    return info
}

export const editCategory = async (data, id) => {
    const response = await Axios('patch', CATEGORY_EDIT_URL(id), data)
    const info = {
        status: response.status,
        data: response.data
    }
    return info
}

export const deleteCategory = async (id) => {
    const response = await Axios('delete', CATEGORY_DELETE_URL(id))
    const info = {
        status: response.status,
    }
    return info
}

export const login = createAsyncThunk('login/getTokens', async (data, thunkApi) => {
    const response = await Axios('post', LOGIN_URL, data)
    const info = {
        status: response.status,
        data: response.data
    }
    return info
})