import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../Components/Product";
import { getProductsCategory } from "../features/productSlice";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const { categoryData, productsCategoryLength, productsCategory } =
    useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsCategory(categoryId));
  }, [categoryId, dispatch]);
  if (productsCategoryLength === 0) {
    return (
      <h2 className="category-page-noFound">
        we don't have any products for this category
      </h2>
    );
  }
  return (
    <div className="category-products-page">
      <div className="container-fluid">
        <div className="header">
          <h2>Category: {categoryData.name}</h2>
        </div>
        <div className="products">
          {productsCategory.map((product) => {
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

export default CategoryProducts;
