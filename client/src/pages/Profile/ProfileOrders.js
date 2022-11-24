import React from "react";
import { useSelector } from "react-redux";
import OrderAddress from "../../Components/Orders/OrderAddress";
import OrderProduct from "../../Components/Orders/OrderProduct";
import Paginate from "../../Components/Paginate";
import { getOrders } from "../../features/order";

const ProfileOrders = () => {
  const { orders, numOrders, numOfPages } = useSelector(
    (store) => store.orders
  );
  const dispatchOrders = getOrders;
  return (
    <div className="profile-order">
      <div className="profile-head">
        <h2>your orders</h2>
        <p>There Are {numOrders} orders In This List</p>
      </div>
      <div className="profile-body">
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
        {numOfPages > 1 ? (
          <Paginate pageCount={numOfPages} getOrders={dispatchOrders} />
        ) : null}
      </div>
    </div>
  );
};

export default ProfileOrders;
