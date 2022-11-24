import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../features/cartSlice";
import productImage from "../../images/image-not-available.png";

const CartTable = () => {
  const { cartProducts, totalProductPrice } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();
  useEffect(() => {}, [cartProducts, totalProductPrice]);
  return (
    <div className="col-md-9">
      <div className="border-products">
        <table className="table">
          <thead>
            <tr>
              <th>product</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => {
              const productCartId = product._id;
              const { name, images, price, _id } = product.product;
              return (
                <tr>
                  <td>
                    <span className="img-product">
                      {images ? (
                        <img src={images[0]} alt={name} />
                      ) : (
                        <img src={productImage} alt="productImage" />
                      )}
                    </span>
                    <Link to={`/shop/${_id}`} className="product-name">
                      {name?.length > 40 ? `${name.slice(0, 40)}...` : name}
                    </Link>
                  </td>
                  <td className="product-price">${price}</td>
                  <td>{product.quantity}</td>
                  <td className="product-subtotal">${product.subtotal}</td>
                  <td>
                    <span
                      className="remove"
                      onClick={() => dispatch(deleteProduct(productCartId))}
                    >
                      <RiDeleteBin6Line />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="product-footer">
        <div className="continue-shopping">
          <Link to="/shop">
            <span className="icon-shopping">
              <BsArrowLeft />
            </span>
            <span className="text-shopping"> continue shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
