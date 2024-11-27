import { configureStore } from "@reduxjs/toolkit";
import conatctSlice from './contactSlice'
export default configureStore({
    reducer:{
        contact:conatctSlice
    }
})