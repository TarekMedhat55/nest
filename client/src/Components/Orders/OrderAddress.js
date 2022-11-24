import React from "react";

const OrderAddress = ({ address, payment, totalPrice, shippingPrice }) => {
  return (
    <div className="address-section d-flex align-items-center justify-content-between">
      <div className="address">
        <h4>address</h4>
        <p>
          <span>alias:</span> {address.alias}
        </p>
        <p>
          <span>name:</span> {address.firstName} {address.lastName}
        </p>
        <p>
          <span>phone:</span> {address.phone}
        </p>
        <p>
          <span>city:</span> {address.city}
        </p>
        <p>
          <span>street:</span> {address.street}
        </p>
      </div>
      <div className="payment">
        <h4>payment</h4>
        <p>
          <span>payment:</span> {payment}
        </p>
        <p>
          <span>shipping price:</span> ${shippingPrice}
        </p>
        <p className="total-price">
          <span>total price:</span> ${totalPrice}
        </p>
      </div>
    </div>
  );
};

export default OrderAddress;
