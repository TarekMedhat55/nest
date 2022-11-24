import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Stars from "../Stars";
const ProductList = ({ allProducts }) => {
  return (
    <div className="product-list">
      {allProducts.map((product) => (
        <div
          className="product-content d-flex align-items-center justify-content-between"
          key={product._id}
        >
          <div className="product-img">
            <img src={product.images[0]} alt={product.name} />
          </div>
          <div className="product-details">
            <span className="category">{product.category.name}</span>
            <Link to={`/shop/${product._id}`}>
              <h2>{product.name}</h2>
            </Link>
            <Stars
              stars={product.ratingsAverage}
              review={product.ratingsQuantity}
            />
            <p className="desc">{product.description.slice(0, 200)}</p>
            <div className="product-price d-flex align-items-center">
              {product.priceAfterDiscount ? (
                <h5>${product.priceAfterDiscount}</h5>
              ) : (
                <h5>${product.price}</h5>
              )}
              {product.priceAfterDiscount && <p>${product.price}</p>}
            </div>
            <div className="product-button d-flex">
              <button type="button" className="add d-flex align-items-center">
                <AiOutlineShoppingCart />
                <span>add to cart</span>
              </button>
              <button>
                <span>
                  <FaRegHeart />
                </span>
                <span>add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
