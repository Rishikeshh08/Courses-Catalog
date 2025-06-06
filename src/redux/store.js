import { configureStore } from "@reduxjs/toolkit";
import { likeSlice } from "./slices/likeSlice";


export const store = configureStore({
    reducer: {
        like: likeSlice.reducer
    }
})