import { createSlice, combineReducers } from "@reduxjs/toolkit";

const pesquisasSlice = createSlice({
    name: "pesquisas",
    initialState: { pesquisas: [] },
    reducers: {
        setPesquisas: (state, action) => { state.pesquisas = action.payload }
    }
})

const idSlice = createSlice({
    name: "id",
    initialState: { id: null },
    reducers: {
        setId: (state, action) => { state.id = action.payload }
    }
})

const rootReducer = combineReducers ({
    pesquisas: pesquisasSlice.reducer,
    id: idSlice.reducer
})

export const { setPesquisas } = pesquisasSlice.actions;
export const { setId } = idSlice.actions;

export default rootReducer;