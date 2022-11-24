import React from "react";
import productImage from "../../images/image-not-available.png";
const ProductImage = ({ images }) => {
  if (!images) {
    return <img src={productImage} alt="" />;
  }
  return (
    <>
      <div className="product-images">
        <img src={images[0]} alt="" />
      </div>
      {/* <div className="images">
        {product[0].imageCover.map((item, index) => {
          console.log(item);
          return (
            <div className="product-image">
              <img src={item} alt="" onClick={() => setMain(item[index])} />
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default ProductImage;
