import React from "react";

const Price = ({ firstValue, setFirstValue, secondValue, setSecondValue }) => {
  localStorage.setItem("first-price", firstValue);
  localStorage.setItem("second-price", secondValue);

  return (
    <div className="price">
      <h5 className="shop-slider-title">Price</h5>
      <div className="price-form d-flex align-items-center justify-content-between">
        <input
          type="number"
          placeholder="0"
          min="0"
          value={firstValue || 0}
          onChange={(e) => setFirstValue(e.target.value)}
          name="firstValue"
          className={firstValue > secondValue ? "active" : null}
        />
        <h5 className="">to</h5>
        <input
          type="number"
          placeholder="0"
          value={secondValue || 0}
          onChange={(e) => setSecondValue(e.target.value)}
          name="secondValue"
          min="0"
        />
      </div>
    </div>
  );
};

export default Price;
