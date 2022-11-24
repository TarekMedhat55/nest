import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product";
import { getNewProducts } from "../../features/productSlice";
const NewProducts = () => {
  const { newProducts } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewProducts());
  }, [dispatch]);
  return (
    <div className="new-products">
      <div className="container-fluid">
        <div className="home-title d-flex align-items-center justify-content-between">
          <h2>new products</h2>
          <div className="details d-flex align-items-center">
            <Link to="/shop">Explore More</Link>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="products">
          {newProducts ? (
            newProducts.map((product) => (
              <Product
                ratingsAverage={product.ratingsAverage}
                ratingsQuantity={product.ratingsQuantity}
                name={product.name}
                category={product.category.name}
                price={product.price}
                priceAfterDiscount={product.priceAfterDiscount}
                img={product.images[0]}
                productId={product._id}
                productSize={product.size[0]}
                key={product._id}
              />
            ))
          ) : (
            <h2>Loading....</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
