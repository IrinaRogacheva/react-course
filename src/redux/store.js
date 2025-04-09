import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurant/slice';
import { userSlice } from "./Entities/user/slice";
import { reviewSlice } from "./Entities/review/slice";
import { dishSlice } from "./Entities/dish/slice";
import {cartSlice} from "./entities/cart/slice";

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [cartSlice.name]: cartSlice.reducer
    },
})