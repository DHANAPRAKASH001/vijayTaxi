import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
    isLoading: false,
    lastLoggedIn: ""
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startLogin: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state) => {
            state.isLogin = true;
            state.isLoading = false;
        },
        updateLastLoggedIn: (state, action) => {
            state.lastLoggedIn = new Date();
        },
        logout: (state, action) => {
            state.isLogin = false;
        }
    },
});

export const { startLogin, loginSuccess, logout, updateLastLoggedIn } = authSlice.actions;

export default authSlice.reducer;
