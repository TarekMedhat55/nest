import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  wishlistProducts: [],
  wishlistLength: 0,
};
export const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/wishlist/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const addProductToWishlist = createAsyncThunk(
  "wishlist/addProductToWishlist",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.post("/wishlist/wishlist-add", productId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteProductToWishlist = createAsyncThunk(
  "wishlist/deleteProductToWishlist",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/wishlist/${productId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: {
    [getWishlist.pending]: (state) => {
      state.isLoading = false;
    },
    [getWishlist.fulfilled]: (state, { payload }) => {
      const { data, results } = payload;
      state.isLoading = true;
      state.wishlistProducts = data;
      state.wishlistLength = results;
    },
    [getWishlist.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.isLoading = false;
      toast.error(msg);
    },
    [addProductToWishlist.pending]: (state) => {
      state.isLoading = false;
    },
    [addProductToWishlist.fulfilled]: (state, { payload }) => {
      const { msg, results } = payload;
      state.isLoading = true;
      toast.success(msg);
      state.wishlistLength = results;
    },
    [addProductToWishlist.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.isLoading = false;
    },
    [deleteProductToWishlist.pending]: (state) => {
      state.isLoading = false;
    },
    [deleteProductToWishlist.fulfilled]: (state, { payload }) => {
      const { msg, results } = payload;
      state.isLoading = true;
      toast.success(msg);
      state.wishlistLength = results;
    },
    [deleteProductToWishlist.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.isLoading = false;
    },
  },
});

export default wishlistSlice.reducer;
