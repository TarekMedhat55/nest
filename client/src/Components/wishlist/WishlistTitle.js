import React from "react";
import { useSelector } from "react-redux";

const WishlistTitle = () => {
  const { wishlistLength } = useSelector((store) => store.wishlist);

  return (
    <div className="wishlist-page-title">
      <div className="container-fluid">
        <div className="wishlist-title-content">
          <h2>Your Wishlist</h2>
          <h4>
            there are <span>{wishlistLength} </span> products in this list
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WishlistTitle;
