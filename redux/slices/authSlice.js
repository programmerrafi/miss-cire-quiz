import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    store: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    updateStore: (state, action) => {
      state.store = action.payload;
    },
  },
});

export const { updateUser, removeUser, updateStore } = authSlice.actions;

export const selectUser = (state) => state?.auth?.user;
export const selectStore = (state) => state?.auth?.store;

export default authSlice.reducer;
