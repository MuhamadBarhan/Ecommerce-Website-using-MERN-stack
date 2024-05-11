import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {baseUrl} from '../../url'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: [],
    },
    reducers: {
        setCartItems: (state, { payload }) => {
            state.list = payload;
        },
        addItem: (state, { payload }) => {
            state.list = [...state.list, { ...payload, count: 1 }]
        },
        removeItem: (state, { payload }) => {
            const index = state.list.findIndex(product => product.id === payload.id);
            state.list = [
                ...state.list.slice(0, index),
                ...state.list.slice(index + 1),
            ];
        },
        modifyItem: (state, { payload }) => {
            const index = state.list.findIndex(product => product.id === payload.id);
            state.list = [...state.list.slice(0, index),
            { ...state.list[index], count: payload.count },
            ...state.list.slice(index + 1),]
        }
    }
});


export const { setCartItems, addItem, removeItem, modifyItem } = cartSlice.actions;

// Thunk action to save cart state to the backend
export const saveCartToBackendThunk = () => async (dispatch, getState) => {
    const { cart } = getState();
        try {
            if (localStorage.getItem('auth-token')) {
            const response = await axios.post(`${baseUrl}/savecart`, cart.list, {
                headers: {
                    Accept: '*/*',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                }
            });
            console.log('Cart saved to backend:', response.data);
        }
        } catch (error) {
            console.error('Error saving cart to backend:', error);
        }

};

export default cartSlice.reducer;