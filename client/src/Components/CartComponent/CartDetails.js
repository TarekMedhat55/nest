import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { applyCoupon, getCoupon } from "../../features/cartSlice";

const CartOrder = () => {
  const [coupon, setCoupon] = useState("");
  const { totalProductPrice, couponName } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(couponName);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!coupon) {
      return toast.error("coupon is required");
    }
    dispatch(applyCoupon({ coupon }));
  };
  useEffect(() => {
    dispatch(getCoupon());
  }, [dispatch]);
  return (
    <div className="col-md-3 ">
      <div className="cart-order-content">
        <h5>Order Summary</h5>
        <div className="cart-order-details">
          <div className="cart-order-subtotal">
            <span className="subtotal">subtotal</span>
            <span className="subtotal-price">${totalProductPrice}</span>
          </div>
          <div className="cart-order-delivery">
            <span className="delivery">delivery</span>
            <span className="delivery-price">$15</span>
          </div>
          <div className="cart-order-total">
            <span className="total">order total</span>
            <span className="total-price">${totalProductPrice + 15}</span>
          </div>
        </div>
        <div className="cart-order-coupons">
          <h6 className="coupons">coupons</h6>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              type="text"
              name="coupon"
              id="coupons"
              placeholder="enter coupons"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button className="coupon-button" type="submit">
              apply
            </button>
          </form>
          {couponName && (
            <p className="coupon-name">coupon name : {couponName?.name}</p>
          )}
        </div>
        <div className="checkout">
          <Link to="checkout">checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CartOrder;
