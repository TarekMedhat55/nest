import React from "react";
import { useSelector } from "react-redux";
import CartProducts from "../Components/CartComponent/CartProducts";
import CartTitle from "../Components/CartComponent/CartTitle";
import NoProducts from "../Components/NoProducts";

const Cart = () => {
  const { numOfCartItems } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);
  return (
    <div>
      {!user || numOfCartItems === 0 ? (
        <NoProducts name={"shopping cart"} />
      ) : (
        <>
          <CartTitle />
          <CartProducts />
        </>
      )}
    </div>
  );
};

export default Cart;
