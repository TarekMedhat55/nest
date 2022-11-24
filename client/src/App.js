import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutPage,
  Cart,
  CategoryProducts,
  ChangePassword,
  Compare,
  ContactUs,
  ErrorPage,
  ForgetPassword,
  HomePage,
  Login,
  NewProducts,
  Order,
  Product,
  Register,
  ResetCode,
  ShareLayout,
  ShopPage,
  Checkout,
  Wishlist,
  Search,
} from "./pages";
import { ToastContainer } from "react-toastify";
import ScrollToTopPage from "./Components/ScrollToTopPage";
import { useDispatch, useSelector } from "react-redux";
import { showMe } from "./features/UserSlice";
import { getWishlist } from "./features/wishlistSlice";
import { getCart } from "./features/cartSlice";
import Loading from "./Components/Loading";
import { getOrders } from "./features/order";
import { getCompare } from "./features/compareSlice";
import {
  ProfileAddress,
  ProfileDetails,
  ProfileOrders,
  ProfileShareLayout,
  ProfileWishlist,
} from "./pages/Profile";
import ProductRoute from "./Components/ProductRoute";
const App = () => {
  const { numOfCartItems } = useSelector((store) => store.cart);
  const { wishlistLength } = useSelector((store) => store.wishlist);
  const [loading, setLoading] = useState(true);
  const { compareLength } = useSelector((store) => store.compare);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getCart());
      dispatch(getWishlist());
      dispatch(getOrders());
      dispatch(getCompare());
      return;
    }
    dispatch(showMe());
  }, [dispatch, numOfCartItems, wishlistLength, compareLength, user]);
  const handleLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, []);
  return (
    <BrowserRouter>
      <Fragment>
        <ScrollToTopPage />
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route index element={loading ? <Loading /> : <HomePage />} />
            <Route
              path="wishlist"
              element={loading ? <Loading /> : <Wishlist />}
            />
            <Route
              path="search/"
              element={loading ? <Loading /> : <Search />}
            />
            <Route
              path="about"
              element={loading ? <Loading /> : <AboutPage />}
            />

            <Route path="order" element={loading ? <Loading /> : <Order />} />
            <Route
              path="contact-us"
              element={loading ? <Loading /> : <ContactUs />}
            />
            <Route path="shop" element={loading ? <Loading /> : <ShopPage />} />
            <Route
              path="shop/:id"
              element={loading ? <Loading /> : <Product />}
            />
            <Route path="cart" element={loading ? <Loading /> : <Cart />} />
            <Route
              path="compare"
              element={loading ? <Loading /> : <Compare />}
            />

            <Route
              path="categories/:categoryId/products"
              element={loading ? <Loading /> : <CategoryProducts />}
            />
          </Route>
          <Route path="login" element={loading ? <Loading /> : <Login />} />
          <Route
            path="register"
            element={loading ? <Loading /> : <Register />}
          />
          <Route
            path="forget-password"
            element={loading ? <Loading /> : <ForgetPassword />}
          />
          <Route
            path="reset-code"
            element={loading ? <Loading /> : <ResetCode />}
          />
          <Route
            path="change-password"
            element={loading ? <Loading /> : <ChangePassword />}
          />
          <Route
            path="cart/checkout"
            element={loading ? <Loading /> : <Checkout />}
          />
          <Route
            path="/profile"
            element={
              loading ? (
                <Loading />
              ) : (
                <ProductRoute>
                  <ProfileShareLayout />
                </ProductRoute>
              )
            }
          >
            <Route index element={loading ? <Loading /> : <ProfileDetails />} />
            <Route
              path="/profile/address"
              element={loading ? <Loading /> : <ProfileAddress />}
            />
            <Route
              path="/profile/orders"
              element={loading ? <Loading /> : <ProfileOrders />}
            />
            <Route
              path="/profile/wishlist"
              element={loading ? <Loading /> : <ProfileWishlist />}
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ToastContainer />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
