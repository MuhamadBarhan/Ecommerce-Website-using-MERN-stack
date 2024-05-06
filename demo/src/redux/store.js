import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducer/cart'
import wishReducer from './reducer/wishlist'
import productReducer from './reducer/products'

export default configureStore({
    reducer:{
        cart:cartReducer,
        wish:wishReducer,
        product:productReducer
    }
})