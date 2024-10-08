import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        filterTodo:(state, action) => {
            return action.payload;
        }
    }
}

)
export const {filterTodo} = filterSlice.actions
export default filterSlice.reducer