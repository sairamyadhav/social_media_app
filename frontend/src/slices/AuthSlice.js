import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const break_token = (access_token) => {};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: localStorage.getItem("access_token")
      ? jwtDecode(localStorage.getItem("access_token")).username
      : null,
    user_id: localStorage.getItem("access_token")
      ? jwtDecode(localStorage.getItem("access_token")).user_id
      : null,
    access_token: localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : null,
    refresh_token: localStorage.getItem("refresh_token")
      ? localStorage.getItem("refresh_token")
      : null,
    isAuthenticated: localStorage.getItem("access_token") ? true : false,
  },
  reducers: {
    login: (state, action) => {
      const newstate = {
        username: jwtDecode(action.payload.access_token).username,
        user_id: jwtDecode(action.payload.access_token).user_id,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        isAuthenticated: true,
      };
      return newstate;
    },
    logout: (state) => {
      return {
        username: null,
        user_id: null,
        access_token: null,
        refresh_token: null,
        isAuthenticated: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;