import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Stars from "./Stars";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../features/cartSlice";
import {
  addProductToWishlist,
  deleteProductToWishlist,
} from "../features/wishlistSlice";
import { addProductToCompare } from "../features/compareSlice";
import { BsHeartFill } from "react-icons/bs";
import ProductModel from "./ProductModel";
const Product = ({
  img,
  name,
  category,
  ratingsAverage,
  ratingsQuantity,
  price,
  priceAfterDiscount,
  productId,
  productSize,
}) => {
  const [showProduct, setShowProduct] = useState(false);
  const dispatch = useDispatch();
  const [size, setSize] = useState(productSize);
  let quantity = Number(1);
  const { wishlistProducts } = useSelector((store) => store.wishlist);
  const ifProductInWishlist = wishlistProducts.find(
    (product) => product._id === productId
  );

  return (
    <div className="product" key={productId}>
      <div className="product-img">
        <img src={img} alt={name} />
        <div className="product-info">
          {ifProductInWishlist ? (
            <span onClick={() => dispatch(deleteProductToWishlist(productId))}>
              {<BsHeartFill />}
            </span>
          ) : (
            <span onClick={() => dispatch(addProductToWishlist({ productId }))}>
              {<FaRegHeart />}
            </span>
          )}
          <span onClick={() => dispatch(addProductToCompare({ productId }))}>
            <MdOutlineCompareArrows />
          </span>
          <span onClick={() => setShowProduct(!showProduct)}>
            <BsEye />
          </span>
        </div>
      </div>
      <div className="product-details">
        <span className="category">{category}</span>
        <Link to={`/shop/${productId}`}>
          <h5>{name.length > 40 ? `${name.slice(0, 40)}...` : name}</h5>
        </Link>
        <Stars stars={ratingsAverage} review={ratingsQuantity} />
        <div className="product-price-details d-flex align-items-center justify-content-between">
          <div className="product-price-content d-flex align-items-center">
            {priceAfterDiscount ? (
              <p className="product-price">${priceAfterDiscount}</p>
            ) : (
              <p className="product-price">${price}</p>
            )}
            {priceAfterDiscount ? (
              <p className="ms-2 old-price">${price}</p>
            ) : null}
          </div>
          <div className="product-cart d-flex align-items-center">
            <span>
              <AiOutlineShoppingCart />
            </span>
            <span
              className="cart-title"
              onClick={() =>
                dispatch(addProductToCart({ productId, size, quantity }))
              }
            >
              add
            </span>
          </div>
        </div>
      </div>
      {showProduct && (
        <ProductModel
          productId={productId}
          showProduct={showProduct}
          setShowProduct={setShowProduct}
        />
      )}
    </div>
  );
};

export default Product;
