import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsGridFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { showProductGrid } from "../../features/productSlice";
const ShopHeader = ({ productLength, value, setValue }) => {
  const { productGrid } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  return (
    <div className="shop-header d-flex align-items-center justify-content-between">
      <div className="results">
        <span>{productLength}</span> items for you!
      </div>
      <div className="sort d-flex align-items-center">
        <div className="sortBy d-flex align-align-items-center">
          <h6>sort by:</h6>
          <div className="select-product">
            <select
              className="form-select"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="createdAt">recommended</option>
              <option value="-price">price: high to low</option>
              <option value="+price">price: low to high</option>
              <option value="+name">name: a to z</option>
              <option value="-name">name: z to a</option>
            </select>
          </div>
        </div>
        <div className="show">
          <span onClick={() => dispatch(showProductGrid())}>
            <BsGridFill className={productGrid ? "active" : null} />
          </span>
          <span onClick={() => dispatch(showProductGrid())}>
            <FiMenu className={!productGrid ? "active" : null} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
