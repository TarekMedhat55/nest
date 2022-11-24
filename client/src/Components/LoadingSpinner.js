import React from "react";
import loading from "../images/loading.gif";
const LoadingSpinner = () => {
  return (
    <div className="loading-svg">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default LoadingSpinner;
