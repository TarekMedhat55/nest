import React from "react";
import Time from "react-time-format";

import Stars from "../Stars";

import ProductSize from "./ProductSize";
const ProductInfo = ({
  singleProduct,
  quantityNum,
  setQuantity,
  productId,
}) => {
  let quantity = Number(quantityNum);
  return (
    <div className="product-details">
      {singleProduct.priceAfterDiscount && (
        <span className="saleOff">sale off</span>
      )}
      <h2>{singleProduct.name}</h2>
      <Stars
        stars={singleProduct.ratingsAverage}
        review={singleProduct.ratingsQuantity}
      />
      <p className="desc">{singleProduct.description}</p>
      <div className="single-product-price d-flex align-items-center">
        {singleProduct.priceAfterDiscount && (
          <h5>${singleProduct.priceAfterDiscount}</h5>
        )}
        {singleProduct.priceAfterDiscount && <p>${singleProduct.price}</p>}
      </div>
      {singleProduct && singleProduct.size && (
        <ProductSize
          sizes={singleProduct.size}
          quantity={quantity}
          setQuantity={setQuantity}
          productId={productId}
        />
      )}
      <div className="product-more-details d-flex ">
        <div className="product-left">
          <p>
            <span>type:</span>
            {singleProduct.type}
          </p>
          <p>
            <span>MFG:</span>
            <Time
              value={singleProduct.mfg}
              format="YYYY/MM/DD"
              className="time"
            />
          </p>
          <p>
            <span>life:</span>
            {singleProduct.life}
          </p>
        </div>
        <div className="product-right">
          <p>
            <span>sku:</span>
            {singleProduct.sku}
          </p>
          <p>
            <span>stock:</span>
            {singleProduct.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
