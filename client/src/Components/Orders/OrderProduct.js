import React from "react";
import productImage from "../../images/image-not-available.png";
import Time from "react-time-format";
import { Link } from "react-router-dom";

const OrderProduct = ({ products }) => {
  return (
    <div className="products-table">
      {products.map((product, index) => {
        const { images, name, mfg, _id } = product.product;

        const { price, quantity, size } = product;
        return (
          <div
            className="product d-flex align-items-center justify-content-between"
            key={index}
          >
            <div className="product-right d-flex align-items-center ">
              <div className="product-img">
                {images ? (
                  <img src={images[0]} alt={name} />
                ) : (
                  <img src={productImage} alt="productImage" />
                )}
              </div>
              <div className="product-details">
                <Link to={`/shop/${_id}`}>
                  <h2>
                    {name?.length > 40 ? `${name.slice(0, 40)}...` : name}
                  </h2>
                </Link>
                <span>size: {size}</span>
                <span>
                  mfg: <Time value={mfg} format="YYYY/MM/DD" className="time" />
                </span>
              </div>
            </div>
            <div className="product-left">
              <h2>${price}</h2>
              <p>Qy:{quantity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderProduct;
