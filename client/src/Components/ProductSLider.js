import React, { useState } from "react";
import Stars from "./Stars";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../features/cartSlice";

const ProductSLider = ({
  img,
  name,

  category,
  ratingsAverage,
  ratingsQuantity,
  price,
  priceAfterDiscount,
  productId,
  productSize,
  productQuantity,
  sold,
}) => {
  const [size, setSize] = useState(productSize);
  let quantity = Number(1);
  const dispatch = useDispatch();

  return (
    <div className="product" key={productId}>
      <div className="product-img">
        <img src={img} alt={name} />
      </div>
      <div className="product-details">
        <span className="category">{category.name}</span>
        <Link to={`shop/${productId}`}>
          <h5>{name.length > 40 ? `${name.slice(0, 40)}...` : name}</h5>
        </Link>
        <Stars stars={ratingsAverage} review={ratingsQuantity} />
        <div className="price d-flex align-items-center">
          {priceAfterDiscount ? (
            <p className="new-price">${priceAfterDiscount}</p>
          ) : (
            <p className="new-price">${price}</p>
          )}
          {priceAfterDiscount && <p className="ms-2 old-price">${price}</p>}
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${(sold / productQuantity) * 100}%`,
            }}
            aria-valuenow={(sold / productQuantity) * 100}
            aria-valuemin="0"
            aria-valuemax={productQuantity}
          ></div>
        </div>
        <p className="product-sold-count">
          sold: {sold} / {productQuantity}
        </p>
        <button type="button" className="d-flex align-items-center add-cart">
          <span>
            <AiOutlineShoppingCart />
          </span>
          <span
            className="cart-title"
            onClick={() =>
              dispatch(
                addProductToCart({
                  productId,
                  size,
                  quantity,
                })
              )
            }
          >
            add to cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductSLider;
