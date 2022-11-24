import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { addProductToCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishlist,
  deleteProductToWishlist,
} from "../../features/wishlistSlice";
import {
  addProductToCompare,
  deleteProductToCompare,
} from "../../features/compareSlice";

const ProductSize = ({ sizes, quantity, setQuantity, productId }) => {
  const { compareProducts } = useSelector((store) => store.compare);
  const ifProductInCompare = compareProducts.find(
    (product) => product._id === productId
  );
  const { wishlistProducts } = useSelector((store) => store.wishlist);
  const ifProductInWishlist = wishlistProducts.find(
    (product) => product._id === productId
  );
  const dispatch = useDispatch();
  const [size, setSize] = useState(sizes[0]);
  return (
    <>
      <div className="size">
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
      <div className="product-button d-flex">
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          type="button"
          className="add d-flex align-items-center"
          onClick={() =>
            dispatch(addProductToCart({ productId, size, quantity }))
          }
        >
          <AiOutlineShoppingCart />
          <span>add to cart</span>
        </button>
        {ifProductInWishlist ? (
          <button
            onClick={() => dispatch(deleteProductToWishlist(productId))}
            className="add"
          >
            <FaRegHeart />
          </button>
        ) : (
          <button onClick={() => dispatch(addProductToWishlist({ productId }))}>
            <FaRegHeart />
          </button>
        )}
        {ifProductInCompare ? (
          <button
            onClick={() => dispatch(deleteProductToCompare(productId))}
            className="add"
          >
            <MdOutlineCompareArrows />
          </button>
        ) : (
          <button onClick={() => dispatch(addProductToCompare({ productId }))}>
            <MdOutlineCompareArrows />
          </button>
        )}
      </div>
    </>
  );
};

export default ProductSize;
