import React from "react";
import CompareTable from "./CompareTable";
import CompareTitle from "./CompareTitle";

const CompareContent = ({ compareLength, compareProducts }) => {
  return (
    <div className="compare-products">
      <div className="container">
        <CompareTitle compareLength={compareLength} />
        <CompareTable compareProducts={compareProducts} />
      </div>
    </div>
  );
};

export default CompareContent;
