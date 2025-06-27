import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        items: [],
        loading: false,
        error: null,
        categoryFilter: "all", 
    },
    reducers: {

        fetchMenuRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchMenuSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchMenuFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        setCategoryFilter(state, action) {
            state.categoryFilter = action.payload; 
        },
    },
})

export const {
    fetchMenuRequest,
    fetchMenuSuccess,
    fetchMenuFailure,
    setCategoryFilter,
} = menuSlice.actions;

export const selectMenuItems = (state) => {
    const { items, categoryFilter } = state.menu;
    if (categoryFilter) {
        return items.filter(item => item.category === categoryFilter);
    }
    return items;
}

export const selectMenuLoading = (state) => state.menu.loading;
export const selectMenuError = (state) => state.menu.error;
export const selectCategoryFilter = (state) => state.menu.categoryFilter;
export default menuSlice.reducer;
