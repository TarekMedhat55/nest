import React from "react";
import OrderAddress from "./OrderAddress";
import OrderProduct from "./OrderProduct";

const OrderTable = ({ orders }) => {
  return (
    <div className="order-items">
      {orders.map((item, index) => {
        return (
          <div className="order-info" key={index}>
            <OrderProduct products={item.cartItems} />
            <OrderAddress
              address={item.shippingAddress}
              payment={item.paymentMethodType}
              totalPrice={item.totalOrderPrice}
              shippingPrice={15}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OrderTable;
