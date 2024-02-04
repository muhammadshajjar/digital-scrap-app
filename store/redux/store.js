import { configureStore } from "@reduxjs/toolkit";

import sellingSlice from "./sellingSlice";
export const store = configureStore({
  reducer: {
    selling: sellingSlice,
  },
});
