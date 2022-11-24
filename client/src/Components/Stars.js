import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, review }) => {
  const tempStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill className="star-fill" />
        ) : stars >= number ? (
          <BsStarHalf className="star-half" />
        ) : (
          <BsStar className="star-empty" />
        )}
      </span>
    );
  });
  return (
    <div className="stars">
      {tempStar} {review && <span className="review">({review} reviews) </span>}
    </div>
  );
};

export default Stars;
