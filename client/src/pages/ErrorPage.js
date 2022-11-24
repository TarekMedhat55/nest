import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../images/page-404.png";
import { BiHomeAlt } from "react-icons/bi";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page-content">
        <div className="error-page-img">
          <img src={errorImage} alt="error page" />
        </div>
        <h2>page not found!</h2>
        <p>
          The link you clicked may be broken or the page may have been removed.
          <br />
          visit the <Link to="/">Homepage</Link> or
          <Link to="/contact-us"> Contact us</Link> about the problem
        </p>
        <Link to="/" className="homepage d-flex align-items-center">
          <span className="homepage-svg">
            <BiHomeAlt />
          </span>
          <span className="homepage-title">Back To Home Page</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
