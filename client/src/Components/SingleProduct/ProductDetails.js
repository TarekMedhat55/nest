import React, { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import Comments from "./Comments";
import Description from "./Description";

const ProductDetails = ({ comments, reviewRating, productId }) => {
  const [index, setIndex] = useState(0);
  const commentLength = comments?.length;
  return (
    <div className="single-product-details">
      <div className="header">
        <ul>
          <li
            className={index === 0 ? "active" : null}
            onClick={() => setIndex(0)}
          >
            description
          </li>
          <li
            className={index === 1 ? "active" : null}
            onClick={() => setIndex(1)}
          >
            additional info
          </li>
          <li
            className={index === 2 ? "active" : null}
            onClick={() => setIndex(2)}
          >
            reviews ({commentLength})
          </li>
        </ul>
      </div>
      {index === 0 && <Description />}
      {index === 1 && <AdditionalInfo />}
      {index === 2 && (
        <Comments reviews={comments} stars={reviewRating} product={productId} />
      )}
    </div>
  );
};

export default ProductDetails;
