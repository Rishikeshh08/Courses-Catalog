import { createSlice } from "@reduxjs/toolkit";


export const likeSlice = createSlice({
    name: "like",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    }
})
export const {add, remove} = likeSlice.actions;
export default likeSlice.reducer;