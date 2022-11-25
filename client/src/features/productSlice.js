import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  productGrid: true,
  allProducts: [],
  success: false,
  singleProduct: [],
  allProductLength: null,
  numOfPages: 0,
  nextPage: null,
  page: null,
  newProducts: [],
  popularProducts: [],
  bestSellProducts: [],
  reviewAdded: false,
  productsDeals: [],
  productsCategory: [],
  productsCategoryLength: 0,
  categoryData: {},
  productSearch: [],
  productSearchLength: 0,
};
export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (page, thunkAPI) => {
    try {
      let categoryLink = "";
      let brandsLink = "";
      let priceFirstLink = "";
      let priceSecondLink = "";
      let ratingLink = "";
      const sortData = JSON.parse(localStorage.getItem("sort"));
      const categoryDate = JSON.parse(localStorage.getItem("category"));
      const brands = JSON.parse(localStorage.getItem("brands"));
      const firstValue = JSON.parse(localStorage.getItem("first-price"));
      const secondValue = JSON.parse(localStorage.getItem("second-price"));
      const ratingValue = JSON.parse(localStorage.getItem("rating"));

      if (categoryDate) {
        categoryLink = `&category=${categoryDate}`;
      }
      if (brands) {
        brandsLink = brands.map((brand) => `brand=${brand}`).join("&");
      }
      if (firstValue) {
        priceFirstLink = `&price[gte]=${firstValue}`;
      }

      if (secondValue) {
        priceSecondLink = `&price[lte]=${secondValue}`;
      }
      if (ratingValue) {
        ratingLink = `&ratingsAverage[gte]=${ratingValue}`;
      }
      const response = await axios.get(
        `https://nest-shop.onrender.com/api/products/?page=${page}&sort=${sortData}${categoryLink}&${brandsLink}${priceFirstLink}${priceSecondLink}${ratingLink}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
//search
export const getProductSearch = createAsyncThunk(
  "product/getProductSearch",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products/?keyword=${data}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data.response);
    }
  }
);
export const getNewProducts = createAsyncThunk(
  "product/getNewProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://nest-shop.onrender.com/api/products/new-products"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getBestSellProduct = createAsyncThunk(
  "product/getBestSellProduct",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://nest-shop.onrender.com/api/products/best-sell"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getPopularProducts = createAsyncThunk(
  "product/getPopularProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://nest-shop.onrender.com/api/products/popular-products"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getDealsProducts = createAsyncThunk(
  "product/getDealsProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://nest-shop.onrender.com/api/products/deals-products"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://nest-shop.onrender.com/api/products/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const addReview = createAsyncThunk(
  "product/addReview",
  async (review, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://nest-shop.onrender.com/api/reviews/create-review",
        review
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getProductsCategory = createAsyncThunk(
  "product/getProductsCategory",
  async (categoryId, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://nest-shop.onrender.com/api/products/${categoryId}/products`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showProductGrid: (state) => {
      state.productGrid = !state.productGrid;
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.success = false;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.success = true;
      state.allProducts = data.products;
      state.allProductLength = data.totalProducts;
      state.numOfPages = data.numOfPages;
      state.nextPage = data.nextPage;
      state.page = data.page;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = false;
      toast.error(msg);
    },
    [getSingleProduct.pending]: (state) => {
      state.success = false;
    },
    [getSingleProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      state.success = true;
      state.singleProduct = product;
    },
    [getSingleProduct.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = false;
      toast.error(msg);
    },
    [getNewProducts.pending]: (state) => {
      state.success = false;
    },
    [getNewProducts.fulfilled]: (state, { payload }) => {
      const { products } = payload;
      state.success = true;
      state.newProducts = products;
    },
    [getNewProducts.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = false;
      toast.error(msg);
    },
    [getPopularProducts.pending]: (state) => {
      state.success = false;
    },
    [getPopularProducts.fulfilled]: (state, { payload }) => {
      const { products } = payload;
      state.success = true;
      state.popularProducts = products;
    },
    [getPopularProducts.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = false;
      toast.error(msg);
    },
    /*** */

    [getDealsProducts.pending]: (state) => {
      state.success = false;
    },
    [getDealsProducts.fulfilled]: (state, { payload }) => {
      const { products } = payload;
      state.success = true;
      state.productsDeals = products;
    },
    [getDealsProducts.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = false;
      toast.error(msg);
    },
    /*** */
    [getBestSellProduct.pending]: (state) => {
      state.success = false;
    },
    [getBestSellProduct.fulfilled]: (state, { payload }) => {
      const { products } = payload;
      state.success = true;
      state.bestSellProducts = products;
    },
    [getBestSellProduct.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.success = false;
      toast.error(msg);
    },
    [addReview.pending]: (state) => {
      state.reviewAdded = false;
    },
    [addReview.fulfilled]: (state, { payload }) => {
      const { msg } = payload;
      state.reviewAdded = true;
      toast.success(msg);
    },
    [addReview.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.reviewAdded = false;
      toast.error(msg);
    },
    [getProductsCategory.pending]: (state) => {
      state.success = false;
    },
    [getProductsCategory.fulfilled]: (state, { payload }) => {
      const { products, length, category } = payload;
      state.productsCategory = products;
      state.productsCategoryLength = length;
      state.categoryData = category;
    },
    [getProductsCategory.rejected]: (state) => {
      state.success = false;
    },
    /***product search */
    [getProductSearch.pending]: (state) => {
      state.success = false;
    },
    [getProductSearch.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.productSearch = data.products;
    },
    [getProductSearch.rejected]: (state) => {
      state.success = false;
    },
  },
});
export const { showProductGrid } = productSlice.actions;
export default productSlice.reducer;
