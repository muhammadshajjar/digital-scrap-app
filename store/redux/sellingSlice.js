import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: 1,
  selectedCategory: [],
  formData: {},
};

export const sellingSlice = createSlice({
  name: "selling",
  initialState,
  reducers: {
    addSelectedCategory: (state, action) => {
      const transformedCategoriesData = action.payload.map((category) => {
        return { id: category };
      });
      state.selectedCategory = transformedCategoriesData;
    },
    changeProgress: (state, action) => {
      state.progress = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeProgress, addSelectedCategory, setFormData } =
  sellingSlice.actions;

export default sellingSlice.reducer;
