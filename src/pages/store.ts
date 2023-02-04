import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { } }
const tableSlice = createSlice({
    name: "table",
    initialState: initialState,
    reducers: {
        loadTable: (state, action) => {
            state.value = action.payload;
        },
        clearTable: (state) => {
            state.value = initialState.value;
        }
    }
})

export const { loadTable, clearTable } = tableSlice.actions;

export const store = configureStore({
    reducer: {
        table: tableSlice.reducer,
    }
});