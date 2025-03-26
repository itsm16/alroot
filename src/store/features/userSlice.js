import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: null,
            email: null
        }
    },
    reducers: {
        login: (state, action) => {
            const payload = action.payload;

            state.user.name = payload.name;
            state.user.email = payload.email;
            const data = { name: payload.name, email: payload.email }
            const currentUser = localStorage.setItem("current", JSON.stringify(data))
            console.log("red", data)
        },
        persistLogin: (state, action) => {
            const payload = action.payload;

            state.user.name = payload.name;
            state.user.email = payload.email;
        },
        logout: (state) => {
            state.user.name = null;
            state.user.email = null;

            localStorage.removeItem("current");
        },
        rmAccount: (state)=>{ 
            state.user.name = null;
            state.user.email = null;
            localStorage.clear()
        }
    }


})

export const { login, persistLogin, logout, rmAccount } = userSlice.actions;

export default userSlice.reducer;