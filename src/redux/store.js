import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slicers";

const store = configureStore({
    reducer: rootReducer
})

export default store;