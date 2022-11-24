import React from "react";
import Product from "../Product";

const ProductList = ({ allProducts }) => {
  return (
    <div className="products">
      {allProducts.map((product) => {
        return (
          <Product
            key={product._id}
            ratingsAverage={product.ratingsAverage}
            ratingsQuantity={product.ratingsQuantity}
            name={product.name}
            id={product._id}
            category={product.category.name}
            price={product.price}
            priceAfterDiscount={product.priceAfterDiscount}
            img={product.images[0]}
            productId={product._id}
            productSize={product.size[0]}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
