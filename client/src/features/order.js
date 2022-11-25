import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  orders: [],
  numOrders: 0,
  loading: true,
  numOfPages: 0,
  nextPage: 0,
};

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://nest-market.onrender.com/api/order/?page=${page}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.loading = true;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.numOfPages = data.numOfPages;
      state.nextPage = data.nextPage;
      state.orders = data.order;
      state.numOrders = data.length;
      state.loading = false;
    },
    [getOrders.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.loading = false;
    },
  },
});
export default orderSlice.reducer;
