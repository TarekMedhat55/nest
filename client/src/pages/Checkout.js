import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { AddNewAddress, OrderDetails } from "../Components";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddress } from "../features/UserSlice";
import { AiOutlineCheck } from "react-icons/ai";
import { createOrder, getCart } from "../features/cartSlice";

const Checkout = () => {
  const { address, success, addressLength } = useSelector(
    (store) => store.user
  );
  const navigate = useNavigate();
  const { cartId } = useSelector((store) => store.cart);
  const [showAddress, setShowAddress] = useState(true);
  const [addAddress, setAddAddress] = useState(false);
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState({});
  const dispatch = useDispatch();
  let { orderSuccess } = useSelector((store) => store.cart);
  if (success) {
    setAddAddress(!addAddress);
  }
  useEffect(() => {
    dispatch(getAllAddress());
    if (orderSuccess) {
      navigate("/order");
      dispatch(getCart());
    }
  }, [dispatch, addressLength, orderSuccess, navigate]);
  useEffect(() => {
    setValue({ ...address[0] });
  }, [address]);
  return (
    <div className="checkout-page">
      <div className="checkout-content">
        <div className="row">
          <div className="col-md-6">
            <div className="address-form">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="nest" />
                </Link>
              </div>
              <div className="address-links">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>
                  <IoIosArrowForward />
                </span>
                <span>
                  <Link to="/cart">Shopping Cart</Link>
                </span>
                <span>
                  <IoIosArrowForward />
                </span>
                <span className="active">Checkout</span>
              </div>
              <div className="form-inputs">
                <h3>BILLING DETAILS</h3>
                <div className="shipping-address">
                  <h6
                    className={showAddress ? "address active" : "address"}
                    onClick={() => setShowAddress(!showAddress)}
                  >
                    your address
                  </h6>
                  {showAddress && (
                    <div className="content">
                      <div
                        className={
                          addressLength > 0 ? "tables active" : "tables"
                        }
                      >
                        {address &&
                          address.map((item, index) => {
                            return (
                              <div
                                className={
                                  selected === index
                                    ? "address-table active"
                                    : "address-table "
                                }
                                key={item._id}
                                onClick={() =>
                                  setValue({
                                    firstName: item.firstName,
                                    lastName: item.lastName,
                                    street: item.street,
                                    postcode: item.postcode,
                                    phone: item.phone,
                                    city: item.city,
                                    email: item.email,
                                    alias: item.alias,
                                  })
                                }
                                onClickCapture={() => setSelected(index)}
                              >
                                {selected === index && (
                                  <span className="selected">
                                    <AiOutlineCheck />
                                  </span>
                                )}
                                <div className="address-name d-flex align-items-center ">
                                  <p className="alias">{item.alias}</p>
                                  <div className="address-info">
                                    <p>
                                      Name:
                                      <span>
                                        {item.firstName} {item.lastName}
                                      </span>
                                    </p>
                                    <p>
                                      Phone: <span>{item.phone}</span>
                                    </p>
                                    <p>
                                      address:
                                      <span>
                                        {item.city},{item.street}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                      <p
                        className="add-new-address"
                        onClick={() => setAddAddress(!addAddress)}
                      >
                        {!addAddress ? (
                          <>
                            <GrFormAdd />
                            <span>add new</span>
                          </>
                        ) : (
                          <>
                            <AiOutlineMinus />
                            <span>cancel</span>
                          </>
                        )}
                      </p>
                      {addAddress && <AddNewAddress />}
                    </div>
                  )}
                </div>
              </div>
              <div className="payment">
                <h3 className="payment-method">payment method</h3>
                <div className="on-deliver">
                  <p>Cash on Delivery </p>
                </div>
                {/* <div className="credit">
                  <CardForm />
                </div> */}
              </div>
              <div className="form-buttons ">
                <Link to="/cart" className="back">
                  <HiArrowNarrowLeft />
                  <span>Return to cart</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="order-products">
              <OrderDetails />
              <div className="pay">
                <button
                  className="pay-now"
                  type="button"
                  onClick={() =>
                    dispatch(createOrder({ cartId, shippingAddress: value }))
                  }
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
