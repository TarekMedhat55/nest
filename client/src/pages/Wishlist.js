import React from "react";
import WishListContent from "../Components/wishlist/WishListContent";
import { useSelector } from "react-redux";
import NoProducts from "../Components/NoProducts";

const Wishlist = () => {
  const { wishlistLength } = useSelector((store) => store.wishlist);
  const { user } = useSelector((store) => store.user);

  return (
    <div>
      {!user || wishlistLength === 0 ? (
        <NoProducts name={"wishlist"} />
      ) : (
        <WishListContent />
      )}
    </div>
  );
};

export default Wishlist;
