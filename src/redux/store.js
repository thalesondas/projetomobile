import { configureStore } from "@reduxjs/toolkit";
import pesquisasSlice from './slicers'

const store = configureStore({
    reducer: {
        pesquisas: pesquisasSlice
    }
})

export default store;