import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import productSlice from "./productSlice";
import categorySlice from "./Categories";
import brandSlice from "./brand";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import orderSlice from "./order";
import compareSlice from "./compareSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    products: productSlice,
    categories: categorySlice,
    brands: brandSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    compare: compareSlice,
    orders: orderSlice,
  },
});
