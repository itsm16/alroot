import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice'
import uiSlice from './features/uiSlice'

export const store = configureStore({
    reducer:{
        user: userReducer,
        ui: uiSlice
    }
})