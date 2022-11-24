import React from "react";

const CompareTitle = ({ compareLength }) => {
  return (
    <div className="compare-page-title">
      <div className="container-fluid">
        <div className="compare-title-content">
          <h2>Products Compare</h2>
          <h4>
            there are <span>{compareLength} </span> products to compare
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CompareTitle;
