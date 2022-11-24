import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
  success: false,
  msg: "",
  cartProducts: [],
  numOfCartItems: 0,
  totalProductPrice: 0,
  cartId: null,
  couponName: "",
  orderDate: [],
  orderSuccess: false,
  orderMsg: null,
};
export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (product, thunkAPI) => {
    try {
      const response = await axios.post("/cart/cart-add", product);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/cart/");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const deleteProduct = createAsyncThunk(
  "cart/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/cart/${productId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const applyCoupon = createAsyncThunk(
  "cart/applyCoupon",
  async (coupon, thunkAPI) => {
    try {
      const response = await axios.post("/cart/apply-coupon", coupon);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getCoupon = createAsyncThunk(
  "cart/getCoupon",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/coupon/coupon");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const createOrder = createAsyncThunk(
  "user/createOrder",
  async ({ cartId, shippingAddress }, thunkAPI) => {
    try {
      const response = await axios.post(`/order/${cartId}`, {
        shippingAddress: { ...shippingAddress },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [addProductToCart.pending]: (state) => {
      state.success = true;
    },
    [addProductToCart.fulfilled]: (state, { payload }) => {
      const { numOfCartItems, msg } = payload;
      state.success = false;
      toast.success(msg);
      state.numOfCartItems = numOfCartItems;
    },
    [addProductToCart.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = true;
      toast.error(msg);
    },
    [getCart.pending]: (state) => {
      state.isLoading = true;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      const { data, numOfCartItems } = payload;
      state.isLoading = false;
      state.cartProducts = data.cartItems;
      state.numOfCartItems = numOfCartItems;
      state.totalProductPrice = data.totalCartPrice;
      state.cartId = data._id;
      state.orderSuccess = false;
    },
    [getCart.rejected]: (state, { payload }) => {
      state.isLoading = true;
    },
    /***** */
    [applyCoupon.pending]: (state) => {
      state.isLoading = true;
    },
    [applyCoupon.fulfilled]: (state, { payload }) => {
      const { data, numOfCartItems } = payload;
      state.isLoading = false;
      state.cartProducts = data.cartItems;
      state.numOfCartItems = numOfCartItems;
      state.totalProductPrice = data.totalPriceAfterDiscount;
      state.cartId = data._id;
    },
    [applyCoupon.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
    },

    /*** */
    /***coupon name** */
    [getCoupon.pending]: (state) => {
      state.isLoading = true;
    },
    [getCoupon.fulfilled]: (state, { payload }) => {
      const { coupon } = payload;
      state.couponName = coupon;
    },

    /***coupon name** */

    [deleteProduct.pending]: (state) => {
      state.success = false;
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      const { msg, numOfCartItems, data } = payload;
      state.cartProducts = data.cartItems;
      state.numOfCartItems = numOfCartItems;
      toast.success(msg);
      state.success = true;
    },
    [addProductToCart.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = false;
      toast.error(msg);
    },
    /***order */
    [createOrder.pending]: (state) => {
      state.orderSuccess = false;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      const { data, msg } = payload;
      state.orderDate = data;
      toast.success(msg);
      state.cartProducts = [];
      state.numOfCartItems = 0;
      state.totalProductPrice = 0;
      state.cartId = null;
      state.orderSuccess = true;
    },
    [createOrder.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.orderSuccess = false;
    },
  },
});
export default cartSlice.reducer;
