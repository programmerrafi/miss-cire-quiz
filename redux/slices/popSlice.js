import { createSlice } from "@reduxjs/toolkit";

export const popSlice = createSlice({
  name: "pop",
  initialState: {
    organization: null,
    category: null,
    menu: null,
    order: null,
    user: null,
  },
  reducers: {
    setOrganization: (state, action) => {
      for (const property in state) {
        state[property] = false;
      }
      state.organization = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    unsetCategory: (state) => {
      state.category = null;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    unsetMenu: (state) => {
      state.menu = null;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    unsetOrder: (state) => {
      state.order = null;
    },
    unsetOrganization: (state) => {
      state.organization = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    unsetUser: (state, action) => {
      state.user = null;
    },
    closeAll: (state) => {
      for (const property in state) {
        state[property] = false;
      }
    },
  },
});

export const {
  setOrganization,
  setCategory,
  unsetCategory,
  unsetOrganization,
  closeAll,
  setMenu,
  unsetMenu,
  setOrder,
  unsetOrder,
  setUser,
  unsetUser,
} = popSlice.actions;

export const selectOrganization = (state) => state.pop.organization;
export const selectCategory = (state) => state.pop.category;
export const selectMenu = (state) => state.pop.menu;
export const selectOrder = (state) => state.pop.order;
export const selectEditUser = (state) => state.pop.user;
export default popSlice.reducer;
