import React from "react";
import { useSelector } from "react-redux";

const CartTitle = () => {
  const { numOfCartItems } = useSelector((store) => store.cart);

  return (
    <div className="cart-page-title">
      <div className="container-fluid">
        <div className="cart-title-content">
          <h2>your cart</h2>
          <h4>
            there are <span>{numOfCartItems} </span> products in your cart
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartTitle;
