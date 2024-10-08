import { configureStore } from "@reduxjs/toolkit";

import sellingSlice from "./sellingSlice";
import userSlice from "./userSlice";
import marketPlaceSlice from "./marketPlaceSlice";

export const store = configureStore({
  reducer: {
    selling: sellingSlice,
    user: userSlice,
    marketplace: marketPlaceSlice,
  },
});
