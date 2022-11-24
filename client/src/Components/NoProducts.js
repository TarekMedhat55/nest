import React from "react";
import { Link } from "react-router-dom";
import cartEmpty from "../images/empty-cart-2130356-1800917.png";
const NoProducts = ({ name }) => {
  return (
    <div className="no-products">
      <div className="cart-empty-img">
        <img src={cartEmpty} alt="cart empty" />
      </div>
      <h2>Your {name} looks empty</h2>
      <Link to="/shop">get some product</Link>
    </div>
  );
};

export default NoProducts;
