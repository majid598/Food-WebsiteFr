import { configureStore } from "@reduxjs/toolkit";
import { newAPI } from "./api/api";
import authSlice from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    [newAPI.reducerPath]: newAPI.reducer,
    [authSlice.name]: authSlice.reducer,
    [cartReducer.name]: cartReducer.reducer,
  },
  middleware: (mid) => [...mid(), newAPI.middleware],
});

export default store;

