import React from "react";
import {
  BestSell,
  CategoriesShop,
  FeatureCategories,
  HomeHeader,
  NewProducts,
  PopularProducts,
} from "../Components/HomeComponents";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <FeatureCategories />
      <CategoriesShop />
      <NewProducts />
      <BestSell />
      <PopularProducts />
    </div>
  );
};

export default HomePage;
