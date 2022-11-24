import React from "react";
import Brand from "./Brand";
import Categories from "./Categories";
import Price from "./Price";
import Reviews from "./Reviews";

const ShopSlider = ({
  categories,
  shopCategory,
  setShopCategory,
  allBrands,
  checked,
  setChecked,
  setSecondValue,
  secondValue,
  setFirstValue,
  firstValue,
  setStarCheck,
  starCheck,
}) => {
  return (
    <div className="shop-slider">
      <Categories
        categories={categories}
        shopCategory={shopCategory}
        setShopCategory={setShopCategory}
      />
      <Brand allBrands={allBrands} checked={checked} setChecked={setChecked} />
      <Price
        firstValue={firstValue}
        setFirstValue={setFirstValue}
        secondValue={secondValue}
        setSecondValue={setSecondValue}
      />
      <Reviews starCheck={starCheck} setStarCheck={setStarCheck} />
    </div>
  );
};

export default ShopSlider;
