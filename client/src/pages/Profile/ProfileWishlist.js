import React from "react";
import { useSelector } from "react-redux";
import Product from "../../Components/Product";

const ProfileWishlist = () => {
  const { wishlistProducts, wishlistLength } = useSelector(
    (store) => store.wishlist
  );
  return (
    <div className="profile-wishlist">
      <div className="profile-head">
        <h2>your wishlist</h2>
        <p>There Are {wishlistLength} Products In This List</p>
      </div>
      <div className="products">
        {wishlistProducts.map((product) => (
          <Product
            key={product._id}
            ratingsAverage={product.ratingsAverage}
            ratingsQuantity={product.ratingsQuantity}
            name={product.name}
            category={product.category.name}
            price={product.price}
            priceAfterDiscount={product.priceAfterDiscount}
            img={product.images[0]}
            productId={product._id}
            productSize={product.size[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileWishlist;
