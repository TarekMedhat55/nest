import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../features/cartSlice";
import { deleteProductToWishlist } from "../../features/wishlistSlice";
import productImage from "../../images/image-not-available.png";

const WishlistTable = () => {
  const { wishlistProducts, wishlistLength } = useSelector(
    (store) => store.wishlist
  );
  useEffect(() => {}, [wishlistLength]);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-table mt-4">
      <table class="table">
        <thead>
          <tr>
            <th>product</th>
            <th>price</th>
            <th>Stock Status </th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wishlistProducts.map((product) => {
            let size = product.size[0];
            let quantity = Number(1);
            const productId = product._id;
            return (
              <tr>
                <td>
                  <span className="img-product">
                    {product.images ? (
                      <img src={product.images[0]} alt={product.name} />
                    ) : (
                      <img src={productImage} alt="productImage" />
                    )}
                  </span>
                  <Link to={`/shop/${product._id}`} className="product-name">
                    {product.name.length > 40
                      ? `${product.name.slice(0, 40)}...`
                      : product.name}
                  </Link>
                </td>
                <td className="product-price">
                  $
                  {product.priceAfterDiscount
                    ? product.priceAfterDiscount
                    : product.price}
                </td>
                <td className="product-stock">
                  {product.quantity >= product.sold ? (
                    <span className="in-stock">in stock</span>
                  ) : (
                    <span className="out-stock">out stock</span>
                  )}
                </td>
                <td className="product-action">
                  {product.quantity >= product.sold ? (
                    <span
                      className="add-to-cart"
                      onClick={() =>
                        dispatch(
                          addProductToCart({ productId, size, quantity })
                        )
                      }
                    >
                      add to cart
                    </span>
                  ) : (
                    <span className="contact-us">contact us</span>
                  )}
                </td>

                <td>
                  <span
                    className="remove"
                    onClick={() => dispatch(deleteProductToWishlist(productId))}
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
  );
};

export default WishlistTable;
