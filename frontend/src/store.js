import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthSlice";

const rootReducer = combineReducers({
    auth: AuthReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;