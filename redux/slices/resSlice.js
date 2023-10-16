import { createSlice } from "@reduxjs/toolkit";

export const resSlice = createSlice({
  name: "res",
  initialState: {
    ordersRes: {},
    productsRes: [],
  },
  reducers: {
    updateOrderRes: (state, action) => {
      state.ordersRes = action.payload;
    },
    updateProductRes: (state, action) => {
      state.productsRes = action.payload;
    },
  },
});

export const { updateOrderRes, updateProductRes } = resSlice.actions;

export const selectOrdersRes = (state) => state?.res?.ordersRes;
export const selectProductRes = (state) => state?.res?.productsRes;
export const selectTotalPrice = (state) =>
  state?.res?.ordersRes?.orders?.reduce(
    (total, item) => total + item.grand_total,
    0
  );

export default resSlice.reducer;
