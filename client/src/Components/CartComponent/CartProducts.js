import React from "react";
import CartOrder from "./CartDetails";
import CartTable from "./CartTable";
const CartProducts = () => {
  return (
    <div className="cart-products">
      <div className="container-fluid">
        <div className="row ">
          <CartTable />
          <CartOrder />
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
