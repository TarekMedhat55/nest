import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  AllCategories: [],
  msg: "",
  success: true,
};
export const GetAllCategories = createAsyncThunk(
  "categories/GetAllCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://nest-shop.onrender.com/api/categories/"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [GetAllCategories.pending]: (state) => {
      state.success = false;
    },
    [GetAllCategories.fulfilled]: (state, { payload }) => {
      const { categories } = payload;
      state.AllCategories = categories;
      state.success = true;
    },
    [GetAllCategories.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.success = false;
    },
  },
});

export default categorySlice.reducer;
