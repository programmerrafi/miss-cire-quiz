import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        users: [],
        organizations: [],
        categorys: [],
        orders: [],
        menus: [],
    },
    reducers: {
        updateUsers: (state, action) => {
            state.users = action.payload
        },
        updateOrganizations: (state, action) => {
            state.organizations = action.payload
        },
        updateCategorys: (state, action) => {
            state.categorys = action.payload
        },
        updateOrders: (state, action) => {
            state.orders = action.payload
        },
        updateMenus: (state, action) => {
            state.menus = action.payload
        },
    },
});

export const { updateUsers, updateOrganizations, updateCategorys, updateOrders, updateMenus } = dataSlice.actions;

export const selectUsers = state => state.data.users
export const selectOrganizations = state => state.data.organizations
export const selectCategorys = state => state.data.categorys
export const selectOrders = state => state.data.orders
export const selectMenus = state => state.data.menus

export default dataSlice.reducer;
