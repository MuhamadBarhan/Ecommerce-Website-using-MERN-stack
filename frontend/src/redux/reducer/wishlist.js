import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
    name:'wishlist',
    initialState:{
        list:[],
    },
    reducers:{
        addItemWishList:(state,{payload})=>{
            state.list=[...state.list,payload]
        }
    }
});


export const {addItemWishList}=wishSlice.actions;

export default wishSlice.reducer;