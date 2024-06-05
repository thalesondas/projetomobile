import { createSlice, combineReducers } from "@reduxjs/toolkit";

const listaPesquisasSlice = createSlice({
    name: "listaPesquisas",
    initialState: { listaPesquisas: [] },
    reducers: {
        setListaPesquisas: (state, action) => { state.listaPesquisas = action.payload }
    }
})

const pesquisaSlice = createSlice({
    name: "pesquisa",
    initialState: { id: null, nome: null, data: null, urlFoto: null },
    reducers: {
        setPesquisa: (state, action) => {
            state.id = action.payload.id
            state.nome = action.payload.nome
            state.data = action.payload.data
            state.urlFoto = action.payload.urlFoto
        }
    }
})

const rootReducer = combineReducers ({
    listaPesquisas: listaPesquisasSlice.reducer,
    pesquisa: pesquisaSlice.reducer
})

export const { setListaPesquisas } = listaPesquisasSlice.actions;
export const { setPesquisa } = pesquisaSlice.actions;

export default rootReducer;