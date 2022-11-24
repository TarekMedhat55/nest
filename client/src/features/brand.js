import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  allBrands: [],
  msg: "",
  success: false,
};
export const getAllBrands = createAsyncThunk(
  "brand/getAllBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/brand/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const brandSlice = createSlice({
  name: "brand",
  initialState,
  extraReducers: {
    [getAllBrands.pending]: (state) => {
      state.success = false;
    },
    [getAllBrands.fulfilled]: (state, { payload }) => {
      const { brands } = payload;
      state.allBrands = brands;
      state.success = true;
    },
    [getAllBrands.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = false;
      toast.error(msg);
    },
  },
});
export default brandSlice.reducer;
