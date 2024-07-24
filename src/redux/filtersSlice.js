import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        name: ''
    },
    reducers: 
        {addFilter(state, action){
    state.name = action.payload
    }}
})

export const { addFilter} = filterSlice.actions;
export const selectFilter = state => state.filters.name;
export const filtersReducer =  filterSlice.reducer;