import React, { useEffect, useState } from "react";
import { RelatedProduct } from "../Components/ShopComponents";
import {
  ProductDetails,
  ProductImage,
  ProductInfo,
} from "../Components/SingleProduct";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../features/productSlice";
import Loading from "../Components/Loading";

const Product = () => {
  const { singleProduct, success } = useSelector((store) => store.products);
  const [quantityNum, setQuantity] = useState(1);
  const { reviewAdded } = useSelector((store) => store.products);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id, reviewAdded]);
  if (success === false) {
    return <Loading />;
  }
  return (
    <div className="single-page-product">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <ProductImage images={singleProduct.images} />
          </div>
          <div className="col-md-7">
            <ProductInfo
              singleProduct={singleProduct}
              quantityNum={quantityNum}
              setQuantity={setQuantity}
              productId={id}
            />
          </div>
        </div>
        <ProductDetails
          comments={singleProduct.reviews}
          productId={singleProduct._id}
          reviewRating={singleProduct.ratingsAverage}
        />
        {/* <RelatedProduct /> */}
      </div>
    </div>
  );
};

export default Product;
