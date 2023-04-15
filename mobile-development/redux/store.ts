import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteReducer";

export const Store = configureStore({
    reducer: noteReducer,
})