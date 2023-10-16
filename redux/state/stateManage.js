import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buttonNav: false,
  buttonNav1: false,
  cartQuantity: 1,
  hasCoper: false,
  checkoutUrl: null,
  taxIncluded: false,
  nextUrl: null,
};

export const stateManage = createSlice({
  name: "manage",
  initialState,
  reducers: {
    updateButtonNav: (state, action) => {
      state.buttonNav = action.payload;
    },
    updateButtonNav1: (state, action) => {
      state.buttonNav1 = action.payload;
    },
    updateCartQuantity: (state, action) => {
      state.cartQuantity = action.payload;
    },
    updateHasCoper: (state, action) => {
      state.hasCoper = action.payload;
    },
    updateCheckoutUrl: (state, action) => {
      state.checkoutUrl = action.payload;
    },
    updateTaxInclude: (state, action) => {
      state.taxIncluded = action.payload;
    },
    updateNextUrl: (state, action) => {
      state.nextUrl = action.payload;
    },
  },
});

export const {
  updateButtonNav,
  updateButtonNav1,
  updateCartQuantity,
  updateHasCoper,
  updateTaxInclude,
  updateNextUrl,
} = stateManage.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectButtonNav = (state) => state.manage.buttonNav;
export const selectButtonNav1 = (state) => state.manage.buttonNav1;
export const selectCartQuantity = (state) => state.manage.cartQuantity;
export const selectHasCoper = (state) => state.manage.hasCoper;
export const selectCheckoutUrl = (state) => state.manage.checkoutUrl;
export const selectTaxInclude = (state) => state.manage.taxIncluded;
export const selectNextUrl = (state) => state.manage.nextUrl;

export default stateManage.reducer;
