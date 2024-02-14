import { configureStore } from "@reduxjs/toolkit";

import sellingSlice from "./sellingSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    selling: sellingSlice,
    user: userSlice,
  },
});
