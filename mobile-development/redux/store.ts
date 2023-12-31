import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteReducer";

export const Store = configureStore({
    reducer: combineReducers({note:noteReducer}),
});

export interface ReduxStoreType{
    note:number;
}