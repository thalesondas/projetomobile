import { createSlice } from "@reduxjs/toolkit";

const pesquisasSlice = createSlice({
    name: "pesquisas",
    initialState: { pesquisas: [] },
    reducers: {
        setPesquisas: (state, action) => { state.pesquisas = action.payload }
    }
})

export const { setPesquisas } = pesquisasSlice.actions;

export default pesquisasSlice.reducer;