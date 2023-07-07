import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import {useReducer} from "react";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // user:useReducer;
    },
})

