import React, { useEffect, useState } from "react";
import {
  ProductGrid,
  ProductList,
  ShopHeader,
  ShopSlider,
} from "../Components/ShopComponents";
import Paginate from "../Components/Paginate";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../features/productSlice";
import { GetAllCategories } from "../features/Categories";
import { getAllBrands } from "../features/brand";
import LoadingSpinner from "../Components/LoadingSpinner";
const ShopPage = () => {
  const dispatchProducts = getAllProducts;
  const [starCheck, setStarCheck] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [shopCategory, setShopCategory] = useState("");
  const [checked, setChecked] = useState([]);
  //init value for sorting
  let sortPage = "+createdAt";
  const [value, setValue] = useState(sortPage);
  localStorage.setItem("sort", JSON.stringify(value));
  const { productGrid, allProducts, numOfPages, allProductLength } =
    useSelector((store) => store.products);
  const { AllCategories } = useSelector((store) => store.categories);
  const { allBrands } = useSelector((store) => store.brands);
  const dispatch = useDispatch();
  useEffect(() => {
    const getShopDate = async () => {
      dispatch(GetAllCategories());
      dispatch(getAllProducts());
      dispatch(getAllBrands());
    };
    getShopDate();
  }, [
    dispatch,
    value,
    shopCategory,
    checked,
    firstValue,
    secondValue,
    starCheck,
  ]);
  if (allProducts === 0 || AllCategories === 0 || allBrands === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="shop-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-2">
            <ShopSlider
              categories={AllCategories}
              shopCategory={shopCategory}
              setShopCategory={setShopCategory}
              allBrands={allBrands}
              checked={checked}
              setChecked={setChecked}
              firstValue={firstValue}
              setFirstValue={setFirstValue}
              secondValue={secondValue}
              setSecondValue={setSecondValue}
              starCheck={starCheck}
              setStarCheck={setStarCheck}
            />
          </div>

          <div className="col-12 col-lg-10">
            <ShopHeader
              productLength={allProductLength}
              value={value}
              setValue={setValue}
            />
            {allProductLength === 0 ? (
              <h2>sorry,we don't have any products</h2>
            ) : (
              <div>
                {productGrid ? (
                  <ProductGrid allProducts={allProducts} />
                ) : (
                  <ProductList allProducts={allProducts} />
                )}
                {allProductLength >= 12 ? (
                  <Paginate
                    pageCount={numOfPages}
                    getAllProducts={dispatchProducts}
                  />
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
