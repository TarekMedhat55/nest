import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { getPopularProducts } from "../../features/productSlice";

const PopularProducts = () => {
  const { popularProducts } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularProducts());
  }, [dispatch]);
  return (
    <div className="new-products">
      <div className="container-fluid">
        <div className="home-title d-flex align-items-center justify-content-between">
          <h2>popular products</h2>
          <div className="details d-flex align-items-center">
            <Link to="/shop">Explore More</Link>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="products">
          {popularProducts.map((product) => (
            <Product
              key={product._id}
              ratingsAverage={product.ratingsAverage}
              ratingsQuantity={product.ratingsQuantity}
              name={product.name}
              category={product.category.name}
              price={product.price}
              priceAfterDiscount={product.priceAfterDiscount}
              img={product.images[0]}
              productId={product._id}
              productSize={product.size[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
