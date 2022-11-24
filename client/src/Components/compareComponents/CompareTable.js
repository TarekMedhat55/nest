import React from "react";
import Stars from "../Stars";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteProductToCompare } from "../../features/compareSlice";
import { addProductToCart } from "../../features/cartSlice";

const CompareTable = ({ compareProducts }) => {
  const dispatch = useDispatch();
  let quantity = Number(1);
  return (
    <div className="compare-table">
      <div className="container">
        <div className="compare-table-content">
          <table className="table">
            <tbody>
              <tr>
                <td className="preview">
                  <span>Preview</span>
                </td>
                {compareProducts.map((product) => {
                  return (
                    <td>
                      <span className="img-product" key={product._id}>
                        <img src={product.images[0]} alt={product.name} />
                      </span>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="title-name">
                  <span>Name</span>
                </td>
                {compareProducts.map((product) => {
                  return (
                    <td className="name" key={product._id}>
                      <span>
                        <Link to={`/shop/${product._id}`}>
                          {product.name.slice(0, 30)}...
                        </Link>
                      </span>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="title-price">
                  <span>Price</span>
                </td>
                {compareProducts.map((product) => {
                  return (
                    <td className="price" key={product._id}>
                      <span>${product.price}</span>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="title-stars">
                  <span>stars</span>
                </td>
                {compareProducts.map((product) => {
                  return (
                    <td className="stars" key={product._id}>
                      <span>
                        <Stars
                          stars={product.ratingsAverage}
                          review={product.ratingsQuantity}
                        />
                      </span>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="title-status">
                  <span>Stock status</span>
                </td>
                {compareProducts.map((product) => {
                  return (
                    <td className="status" key={product._id}>
                      <span>
                        {product.quantity >= 0 ? (
                          <span className="in-stock">in stock</span>
                        ) : (
                          <span className="out-stock">out stock</span>
                        )}
                      </span>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="title-weight">
                  <span>weight</span>
                </td>
                {compareProducts.map((product) => {
                  return (
                    <td className="weight" key={product._id}>
                      {product.size.map((item) => (
                        <span className="size">{item}kG</span>
                      ))}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="title-Buy">
                  <span>Buy now</span>
                </td>
                {compareProducts.map((product) => {
                  let size = product.size[0];
                  let productId = product.id;
                  return (
                    <td className="product-action" key={product._id}>
                      <span>
                        {product.quantity >= 0 ? (
                          <span
                            className="add-to-cart"
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
                        ) : (
                          <span className="contact-us">contact us</span>
                        )}
                      </span>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="title-delete">
                  <span>delete</span>
                </td>
                {compareProducts.map((product) => {
                  return (
                    <td className="delete" key={product._id}>
                      <span
                        className="delete-icon"
                        onClick={() =>
                          dispatch(deleteProductToCompare(product._id))
                        }
                      >
                        <RiDeleteBin6Line />
                        <span className="remove-content">remove</span>
                      </span>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareTable;
