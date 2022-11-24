import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import axios from "axios";
const initialState = {
  leftNav: false,
  user: null,
  msg: "",
  isLoading: false,
  logoutSuccess: false,
  forgetPasswordSuccess: false,
  passwordChangedSuccessfully: false,
  address: [],
  addressLength: 0,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const showMe = createAsyncThunk("user/showMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/auth/show-me");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete("/auth/logout");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const forgetUser = createAsyncThunk(
  "user/forgetUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/auth/forget-password", user);
      localStorage.setItem("user-email", JSON.stringify(user));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const resetCodeUser = createAsyncThunk(
  "user/resetCode",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/auth/verify-password", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (user, thunkAPI) => {
    const getEmail = localStorage.getItem("user-email");
    const email = JSON.parse(getEmail);
    const value = { ...user, ...email };
    console.log(value);

    try {
      const response = await axios.patch("/auth/change-password", value);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getAllAddress = createAsyncThunk(
  "user/getAllAddress",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/address/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const addNewAddress = createAsyncThunk(
  "user/addNewAddress",
  async (address, thunkAPI) => {
    try {
      const response = await axios.patch("/address/address-add", address);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updateInfo = createAsyncThunk(
  "user/updateInfo",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch("/auth/update-name", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updateEmail = createAsyncThunk(
  "user/updateInfo",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch("/auth/update-email", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "user/updateInfo",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch("/auth/update-password", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const removeAddress = createAsyncThunk(
  "user/removeAddress",
  async (address, thunkAPI) => {
    try {
      const response = await axios.delete(`/address/${address}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showLeftNav: (state) => {
      state.leftNav = !state.leftNav;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { userInfo } = payload;
      state.user = userInfo;
      state.isLoading = false;
      toast.success(`welcome ${userInfo.firstName}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.isLoading = false;
      toast.error(msg);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { userInfo } = payload;
      state.user = userInfo;
      state.isLoading = false;
      toast.success(`welcome ${userInfo.firstName}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.isLoading = false;
      toast.error(msg);
    },
    [showMe.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.user = user;
    },
    [showMe.rejected]: (state, { payload }) => {
      state.user = null;
    },
    [logoutUser.pending]: (state) => {
      state.logoutSuccess = false;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      state.user = null;
      state.logoutSuccess = true;
    },
    [logoutUser.rejected]: (state) => {
      state.logoutSuccess = false;
    },
    [forgetUser.pending]: (state) => {
      state.isLoading = true;
    },
    [forgetUser.fulfilled]: (state, { payload }) => {
      const { msg } = payload;
      toast.success(msg);
      state.isLoading = false;
      state.forgetPasswordSuccess = true;
    },
    [forgetUser.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
      state.forgetPasswordSuccess = false;
    },
    [resetCodeUser.pending]: (state) => {
      state.isLoading = true;
    },
    [resetCodeUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.resetCodeSuccess = true;
    },
    [resetCodeUser.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.isLoading = false;
      state.resetCodeSuccess = false;
      toast.error(msg);
    },
    [changePassword.fulfilled]: (state, { payload }) => {
      const { userInfo } = payload;
      state.user = userInfo;
      toast.success("password changed successfully");
      state.passwordChangedSuccessfully = true;
    },
    [changePassword.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.user = null;
      toast.error(msg);
      state.passwordChangedSuccessfully = false;
    },
    [getAllAddress.pending]: (state) => {
      state.success = false;
    },
    [getAllAddress.fulfilled]: (state, { payload }) => {
      const { data, results } = payload;
      state.address = data;
      state.addressLength = results;
    },
    [getAllAddress.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
    },

    [addNewAddress.pending]: (state) => {
      state.success = false;
    },
    [addNewAddress.fulfilled]: (state, { payload }) => {
      const { data, results, msg } = payload;
      state.address = data;
      state.addressLength = results;
      toast.success(msg);
    },
    [addNewAddress.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
    },
    [updateInfo.pending]: (state) => {
      state.success = false;
    },
    [updateInfo.fulfilled]: (state, { payload }) => {
      const { user, msg } = payload;
      state.user = user;
      toast.success(msg);
    },
    [updateInfo.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
    },
    [updateEmail.pending]: (state) => {
      state.success = false;
    },
    [updateEmail.fulfilled]: (state, { payload }) => {
      const { user, msg } = payload;
      state.user = user;
      toast.success(msg);
    },
    [updateEmail.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
    },
    [updatePassword.pending]: (state) => {
      state.success = false;
    },
    [updatePassword.fulfilled]: (state, { payload }) => {
      const { user, msg } = payload;
      state.user = user;
      toast.success(msg);
    },
    [updatePassword.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
    },
    [removeAddress.pending]: (state) => {
      state.success = false;
    },
    [removeAddress.fulfilled]: (state, { payload }) => {
      const { data, msg } = payload;
      state.address = data;
      toast.success(msg);
    },
    [removeAddress.rejected]: (state, { payload }) => {
      const { msg } = payload;
      toast.error(msg);
    },
  },
});
export const { showLeftNav } = userSlice.actions;
export default userSlice.reducer;
