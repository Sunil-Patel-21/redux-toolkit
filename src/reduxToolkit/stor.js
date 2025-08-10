import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";

export const Store = configureStore({
    reducer:todoReducer
});