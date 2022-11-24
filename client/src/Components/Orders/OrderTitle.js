import React from "react";

const OrderTitle = ({ numOrders }) => {
  return (
    <div className="order-page-title">
      <div className="container-fluid">
        <div className="order-title-content">
          <h2>Your Orders</h2>
          <h4>
            there are <span>{numOrders} </span> orders in this list
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OrderTitle;
