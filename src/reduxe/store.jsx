import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import {useReducer} from "react";

 const Store = configureStore({
    reducer: {
        counter: counterReducer,
        // user:useReducer;
    },
})

export default Store

