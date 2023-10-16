import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    updateBasket: (state, action) => {
      state.items = action.payload;
      if (typeof window !== "undefined") {
        window.localStorage?.setItem("basket", JSON.stringify(state.items));
      }
    },
    addItem: (state, action) => {

      // remove if item have product_bundle_id
      state.items = state.items.filter((x) => !(!!x?.product_bundle_id));

      const index = state.items.findIndex(
        (basketItem) => basketItem.id == action.payload.id
      );
      if (action.payload.quantity > 0) {
        if (index >= 0) {
          state.items[index].quantity += action.payload.quantity;
        } else {
          state.items = [action.payload, ...state.items];
        }
      }
      // state.items = [...state.items, action.payload];
      if (typeof window !== "undefined") {
        window.localStorage?.setItem("basket", JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((x) => x.id !== action.payload);
      if (typeof window !== "undefined") {
        window.localStorage?.setItem("basket", JSON.stringify(state.items));
      }
    },
    increaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
      if (typeof window !== "undefined") {
        window.localStorage?.setItem("basket", JSON.stringify(state.items));
      }
    },
    decreaseItemQuantity: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id !== action.payload) return item;
          if (item.quantity === 1) return false;
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        })
        .filter((x) => x !== false);
      if (typeof window !== "undefined") {
        window.localStorage?.setItem("basket", JSON.stringify(state.items));
      }
    },
  },
});

export const {
  updateBasket,
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotalPrice = (state) =>
  state.basket.items
    ?.map((x) => x.price * x.quantity)
    .reduce((a, b) => a + b, 0);
export const selectDiscountPrice = (state) =>
  state.basket.items
    ?.map((x) => (x.price * x.quantity) / 4)
    .reduce((a, b) => a + b, 0);
export const selectTotalOldPrice = (state) =>
  state.basket.items
    ?.map((x) => x.oldPrice * x.quantity)
    .reduce((a, b) => a + b, 0);
export const selectTotalCartItems = (state) =>
  state.basket.items?.map((x) => x.quantity).reduce((a, b) => a + b, 0);

export default basketSlice.reducer;
