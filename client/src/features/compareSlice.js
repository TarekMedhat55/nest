import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  compareProducts: [],
  compareLength: 0,
  loading: true,
};
export const getCompare = createAsyncThunk(
  "compare/getCompare",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://nest-market.onrender.com/api/compare/"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const addProductToCompare = createAsyncThunk(
  "wishlist/addProductToCompare",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://nest-market.onrender.com/api/compare/compare-add",
        productId
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteProductToCompare = createAsyncThunk(
  "wishlist/deleteProductToCompare",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://nest-market.onrender.com/api/compare/${productId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const compareSLice = createSlice({
  name: "compare",
  initialState,
  extraReducers: {
    [getCompare.pending]: (state) => {
      state.loading = true;
    },
    [getCompare.fulfilled]: (state, { payload }) => {
      const { data, results } = payload;
      state.compareLength = results;
      state.compareProducts = data;
      state.loading = false;
    },
    [getCompare.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.loading = false;
    },
    [addProductToCompare.pending]: (state) => {
      state.loading = true;
    },
    [addProductToCompare.fulfilled]: (state, { payload }) => {
      const { msg, results } = payload;
      state.loading = false;
      toast.success(msg);
      state.compareLength = results;
    },
    [addProductToCompare.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.loading = false;
    },
    [deleteProductToCompare.pending]: (state) => {
      state.loading = true;
    },
    [deleteProductToCompare.fulfilled]: (state, { payload }) => {
      const { msg, results } = payload;
      state.loading = false;
      toast.success(msg);
      state.compareLength = results;
    },
    [deleteProductToCompare.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.loading = false;
    },
  },
});

export default compareSLice.reducer;
