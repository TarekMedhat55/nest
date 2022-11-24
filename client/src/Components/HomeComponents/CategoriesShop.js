import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
const CategoriesShop = () => {
  return (
    <div className="categories-shop">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="first-category-shop">
              <h3>
                Everyday Fresh &<br />
                Clean with Our
                <br />
                Products
              </h3>
              <div className="detail">
                <Link to="/shop">
                  <span className="shop-title">shop now</span>
                  <span className="arrow-icon">
                    <IoIosArrowRoundForward />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className=" d-none d-lg-block col-lg-4  ">
            <div className="second-category-shop">
              <h3>
                Make your Breakfast
                <br />
                Healthy and Easy
              </h3>
              <div className="detail">
                <Link to="/shop">
                  <span className="shop-title">shop now</span>
                  <span className="arrow-icon">
                    <IoIosArrowRoundForward />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-3 mt-md-0">
            <div className="third-category-shop">
              <h3>
                The best Organic
                <br />
                Products Online
              </h3>
              <div className="detail">
                <Link to="/shop">
                  <span className="shop-title">shop now</span>
                  <span className="arrow-icon">
                    <IoIosArrowRoundForward />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesShop;
