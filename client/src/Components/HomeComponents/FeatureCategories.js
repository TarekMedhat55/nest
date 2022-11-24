import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetAllCategories } from "../../features/Categories";
const FeatureCategories = () => {
  const { AllCategories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  const colors = [
    "#F2FCE4",
    "#FFFCEB",
    "#ECFFEC",
    "#FEEFEA",
    "#FFF3EB",
    "#FFF3FF ",
    "#F2FCE4",
    "#FEEFEA",
    "#FFFCEB",
  ];

  useEffect(() => {
    dispatch(GetAllCategories());
  }, [dispatch]);
  return (
    <div className="feature-categories">
      <div className="container-fluid">
        <div className="home-title d-flex align-items-center justify-content-between">
          <h2>Featured Categories</h2>
          <div className="details d-flex align-items-center">
            <Link to="/categories">Explore More</Link>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="feature-categories-content">
          {AllCategories.map((category, index) => {
            const categoryId = category._id;
            return (
              <Link
                to={`categories/${categoryId}/products`}
                className="category"
                key={category._id}
                style={{
                  backgroundColor: `${colors[index]}`,
                }}
              >
                <div className="category-img">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-item">
                  <h5>{category.name}</h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureCategories;
