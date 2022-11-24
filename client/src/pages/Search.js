import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductSearch } from "../features/productSlice";
import Product from "../Components/Product";
const Search = () => {
  const { productSearch } = useSelector((store) => store.products);
  const location = useLocation();
  let searchProduct = location.state.searchProduct;

  const dispatch = useDispatch();
  useEffect(() => {
    if (searchProduct) {
      dispatch(getProductSearch(searchProduct));
    }
  }, [dispatch, searchProduct]);
  if (productSearch.length === 0) {
    return <h2>sorry,this product is not exist</h2>;
  }
  return (
    <div className="search-page">
      <div className="container-fluid">
        <div className="products">
          {productSearch.map((product) => {
            return (
              <Product
                ratingsAverage={product.ratingsAverage}
                ratingsQuantity={product.ratingsQuantity}
                name={product.name}
                category={product.category.name}
                price={product.price}
                priceAfterDiscount={product.priceAfterDiscount}
                img={product.images[0]}
                productId={product._id}
                productSize={product.size[0]}
                key={product._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
