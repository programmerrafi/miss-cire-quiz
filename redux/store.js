import { configureStore } from "@reduxjs/toolkit";
import stateManage from "./state/stateManage";
import basketReducer from "./state/basketSlice";
import authReducer from "./slices/authSlice";
import resReducer from "./slices/resSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    res: resReducer,
    manage: stateManage,
    basket: basketReducer,
  },
});
