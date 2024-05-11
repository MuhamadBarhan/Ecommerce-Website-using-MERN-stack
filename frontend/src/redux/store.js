import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducer/cart'
import wishReducer from './reducer/wishlist'
import productReducer from './reducer/products'
import { saveCartToBackendThunk } from "./reducer/cart";
import { saveWishlistToBackendThunk } from "./reducer/wishlist";

const store=  configureStore({
    reducer:{
        cart:cartReducer,
        wish:wishReducer,
        product:productReducer
    }
})

// Whenever the store updates, dispatch the thunk action to save cart to the backend
store.subscribe(() => {
    store.dispatch(saveCartToBackendThunk());
    store.dispatch(saveWishlistToBackendThunk()); 
});

export default store;