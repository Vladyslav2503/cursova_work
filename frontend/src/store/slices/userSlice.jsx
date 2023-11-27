import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    isAuth: localStorage.getItem('isAuth') || false,
    search: localStorage.getItem('search') || "",
    userRole: localStorage.getItem('role') || "USER",
    adminResponse: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updateSearch: (state, action) => {
            state.search = action.payload;
        },
        updateUserRole: (state, action) => {
            state.userRole = action.payload;
        },
        updateAdminResponse: (state, action) => {
            state.adminResponse = action.payload;
        },
    },
});

export const {updateIsAuth, updateEmail, updateSearch, updateUserRole, updateAdminResponse} = userSlice.actions;

export default userSlice.reducer;
