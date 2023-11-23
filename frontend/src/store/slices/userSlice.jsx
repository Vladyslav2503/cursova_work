import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    isAuth: localStorage.getItem('isAuth') || false,
    search: localStorage.getItem('search') || "",
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
    },
});

export const {updateIsAuth, updateEmail, updateSearch} = userSlice.actions;

export default userSlice.reducer;
