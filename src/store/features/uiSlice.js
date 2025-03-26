import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        sidebar: false
    },
    reducers: {
        setSidebar: (state) => {
            state.sidebar = !state.sidebar;
        }
    }

})

export const { setSidebar } = uiSlice.actions;

export default uiSlice.reducer;
