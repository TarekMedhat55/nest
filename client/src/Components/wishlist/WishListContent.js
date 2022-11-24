import React from "react";
import WishlistTable from "./WishlistTable";
import WishlistTitle from "./WishlistTitle";

const WishList = () => {
  return (
    <div className="wishlist-products">
      <div className="container">
        <WishlistTitle />
        <WishlistTable />
      </div>
    </div>
  );
};

export default WishList;
