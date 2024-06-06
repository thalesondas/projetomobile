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
    initialState: { id: null, nome: null, data: null, urlFoto: null, voto: { pessimo: 0, ruim: 0, neutro: 0, bom: 0, excelente: 0 } },
    reducers: {
        setPesquisa: (state, action) => {
            state.id = action.payload.id
            state.nome = action.payload.nome
            state.data = action.payload.data
            state.urlFoto = action.payload.urlFoto
        },
        setPessimo: (state, action) => { state.voto.pessimo = action.payload },
        setRuim: (state, action) => { state.voto.ruim = action.payload },
        setNeutro: (state, action) => { state.voto.neutro = action.payload },
        setBom: (state, action) => { state.voto.bom = action.payload },
        setExcelente: (state, action) => { state.voto.excelente = action.payload }
    }
})

const rootReducer = combineReducers ({
    listaPesquisas: listaPesquisasSlice.reducer,
    pesquisa: pesquisaSlice.reducer
})

export const { setListaPesquisas } = listaPesquisasSlice.actions;
export const { setPesquisa, setPessimo, setRuim, setNeutro, setBom, setExcelente } = pesquisaSlice.actions;

export default rootReducer;