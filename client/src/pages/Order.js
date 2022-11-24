import React from "react";
import { useSelector } from "react-redux";
import NoProducts from "../Components/NoProducts";
import OrderContent from "../Components/Orders/OrderContent";

const Order = () => {
  const { orders, numOrders } = useSelector((store) => store.orders);
  const { user } = useSelector((store) => store.user);

  return (
    <div>
      {!user || numOrders === 0 ? (
        <NoProducts name={"order"} />
      ) : (
        <OrderContent orders={orders} numOrders={numOrders} />
      )}
    </div>
  );
};

export default Order;
