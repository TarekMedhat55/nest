import React from "react";
import { starsRating } from "../../data";
import Stars from "../Stars";

const Reviews = ({ starCheck, setStarCheck }) => {
  localStorage.setItem("rating", JSON.stringify(starCheck));
  return (
    <div className="shop-reviews">
      <h5 className="shop-slider-title">Reviews</h5>
      <div className="stars">
        {starsRating.map((rating) => (
          <div
            className="form-check categories-form-check d-flex align-items-center"
            key={rating._id}
            onClick={(e) => setStarCheck(rating.rating)}
          >
            <Stars stars={rating.rating} />
            <h6 className="ms-2 star-rating">({rating.rating}.0) </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
