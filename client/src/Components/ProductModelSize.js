import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../features/cartSlice";
import Loading from "./Loading";

const ProductModelSize = ({
  productId,
  sizes,
  quantity,
  setQuantity,
  productSize,
}) => {
  const [size, setSize] = useState(productSize);
  const dispatch = useDispatch();
  if (sizes === undefined) {
    return <Loading />;
  }
  console.log("====================================");
  console.log(quantity, productId, size);
  console.log("====================================");
  return (
    <>
      <div className="sizes">
        <p>
          size/wight:
          {sizes.map((item, index) => (
            <span
              onClick={() => setSize(item)}
              className={size === item ? "size-content active" : "size-content"}
              key={index}
            >
              {item}g
            </span>
          ))}
        </p>
      </div>
      <div className="model-action d-flex align-items-center">
        <div className="input-add">
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="add "
          onClick={() =>
            dispatch(addProductToCart({ productId, size, quantity }))
          }
        >
          <AiOutlineShoppingCart />
          <span>add to cart</span>
        </button>
      </div>
    </>
  );
};

export default ProductModelSize;
