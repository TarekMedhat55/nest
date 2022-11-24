import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productImage from "../images/image-not-available.png";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../features/productSlice";
import Loading from "./Loading";
import Stars from "./Stars";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import ProductModelSize from "./ProductModelSize";
const ProductModel = ({ productId, showProduct, setShowProduct }) => {
  const { singleProduct, success } = useSelector((store) => store.products);
  const [quantityNum, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const {
    images,
    name,
    ratingsAverage,
    ratingsQuantity,
    description,
    priceAfterDiscount,
    price,
    size,
  } = singleProduct;
  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);
  if (!singleProduct || size === undefined) {
    return <Loading />;
  }

  let quantity = Number(quantityNum);

  return (
    <div className="product-model">
      <div className="product-popup">
        <div
          className="close-model"
          onClick={() => setShowProduct(!showProduct)}
        >
          <AiOutlineClose />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="product-images">
              {images ? (
                <img src={images[0]} alt={name} />
              ) : (
                <img src={productImage} alt="product name" />
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-info">
              <Link to={`/shop/${productId}`}>
                <h2>{name.length > 40 ? `${name.slice(0, 40)}...` : name}</h2>
              </Link>
              <Stars stars={ratingsAverage} review={ratingsQuantity} />
              <p className="desc">
                {description.length > 250
                  ? `${description.slice(0, 250)}...`
                  : description}
              </p>
              <div className="product-price-content d-flex align-items-center">
                {priceAfterDiscount ? (
                  <p className="product-price">${priceAfterDiscount}</p>
                ) : (
                  <p className="product-price">${price}</p>
                )}
                {priceAfterDiscount ? (
                  <p className="ms-2 old-price ">${price}</p>
                ) : null}
              </div>
              <ProductModelSize
                sizes={size}
                quantity={quantity}
                productId={productId}
                setQuantity={setQuantity}
                productSize={size[0]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModel;
