import { configureStore } from "@reduxjs/toolkit";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { articleApi } from "./articles";
import AtRule from "postcss/lib/at-rule";
export const store=configureStore({
    reducer:{
        [articleApi.reducerPath]:articleApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(articleApi.middleware)
});