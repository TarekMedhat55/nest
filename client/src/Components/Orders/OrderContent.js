import React from "react";
import OrderTable from "./OrderTable";
import OrderTitle from "./OrderTitle";

const OrderContent = ({ orders, numOrders }) => {
  return (
    <div className="order-products">
      <div className="container">
        <OrderTitle numOrders={numOrders} />
        <OrderTable orders={orders} />
      </div>
    </div>
  );
};

export default OrderContent;
