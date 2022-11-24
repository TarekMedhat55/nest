import React from "react";

const Categories = ({ categories, shopCategory, setShopCategory }) => {
  localStorage.setItem("category", JSON.stringify(shopCategory));
  return (
    <div className="categories">
      <h5 className="shop-slider-title shop-slider-cat">categories</h5>
      <div className="categories-item">
        <div className="categories-content">
          <h5
            onClick={() => setShopCategory("")}
            className={shopCategory === "" ? "all active" : "all "}
          >
            All
          </h5>
        </div>

        {categories.map((category) => {
          return (
            <div className="categories-content " key={category._id}>
              <div className="form-check categories-form-check">
                <h5
                  onClick={() => setShopCategory(category._id)}
                  className={category._id === shopCategory ? "active" : null}
                >
                  {category.name}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
