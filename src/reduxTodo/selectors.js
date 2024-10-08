import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = (state) => state.todos.items;
export const selectFilter = (state) => state.filter;
export const selectIsEdit = (state) => state.todos.currentTodo;

export const selectFilteredTodos = createSelector([selectTodos, selectFilter], (todos, filter) => {
    return todos.filter(({text}) => text.toLowerCase().includes(filter.toLowerCase()))
})