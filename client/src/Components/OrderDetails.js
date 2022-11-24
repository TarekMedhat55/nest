import React from "react";

import { useSelector } from "react-redux";
import productImage from "../images/image-not-available.png";
const OrderDetails = () => {
  const { cartProducts } = useSelector((store) => store.cart);
  const { totalProductPrice } = useSelector((store) => store.cart);
  return (
    <div>
      {cartProducts.map((product) => {
        const { name, images, price, _id } = product.product;
        const { size } = product;
        return (
          <div
            className="product d-flex align-items-center justify-content-between"
            key={_id}
          >
            <div className="product-content d-flex align-items-center ">
              <div className="product-img">
                {images ? (
                  <img src={images[0]} alt={name} />
                ) : (
                  <img src={productImage} alt="productImage" />
                )}
                <p>{product.quantity}</p>
              </div>
              <div className="product-title">
                <h2>{name?.length > 40 ? `${name.slice(0, 40)}...` : name}</h2>
                <p>{size}G</p>
              </div>
            </div>
            <div className="product-price">
              <p>${price}</p>
            </div>
          </div>
        );
      })}
      <div className="order-price">
        <div className="order-subtotal d-flex align-items-center justify-content-between mb-3">
          <span className="subtotal">subtotal</span>
          <span className="subtotal-price">${totalProductPrice}</span>
        </div>
        <div className="order-delivery d-flex align-items-center justify-content-between mb-3">
          <span className="delivery">delivery</span>
          <span className="delivery-price">$15</span>
        </div>
        <div className="order-total d-flex align-items-center justify-content-between mb-3">
          <span className="total">total</span>
          <span className="total-price">${totalProductPrice + 15}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
