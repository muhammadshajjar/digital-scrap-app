import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "scrap",
  searchQuery: "",
  items: [
    { id: "1", type: "scrap" },
    { id: "2", type: "antique" },
    { id: "3", type: "antique" },
    { id: "4", type: "antique" },
  ],
};

export const marketPlaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.active = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveTab, setSearchQuery } = marketPlaceSlice.actions;

export default marketPlaceSlice.reducer;
