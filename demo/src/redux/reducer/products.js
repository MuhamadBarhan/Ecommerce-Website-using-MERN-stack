import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:'allproducts',
    initialState:{
        list:[],
    },
    reducers:{
        addProduct:(state,{payload})=>{
            state.list = payload
        },
    }
});

export const {addProduct} = productSlice.actions;

export default productSlice.reducer;