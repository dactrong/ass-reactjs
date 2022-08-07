import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../Cart/cartSlice';
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})
export default store;