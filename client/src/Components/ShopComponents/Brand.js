import React from "react";

const Brand = ({ allBrands, checked, setChecked }) => {
  const handleClick = (e) => {
    let value = e.target.value;

    if (e.target.checked) {
      setChecked([...checked, value]);
    }
    if (e.target.checked === false) {
      const filterChecked = checked.filter((brand) => brand !== value);
      setChecked(filterChecked);
    }
  };
  localStorage.setItem("brands", JSON.stringify(checked));
  return (
    <div className="categories">
      <h5 className="shop-slider-title">Brands</h5>
      <div className="categories-item">
        {allBrands.map((brand) => {
          return (
            <div className="categories-content " key={brand._id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={brand._id}
                  onClick={handleClick}
                  id={brand.name}
                />
                <label className="form-check-label" htmlFor={brand.name}>
                  {brand.name}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
