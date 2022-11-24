import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import search from "../images/search.png";
import compare from "../images/icon-compare.svg";
import wishlist from "../images/icon-heart.svg";
import cart from "../images/icon-cart.svg";
import account from "../images/icon-user.svg";
import support from "../images/icon-headphone.svg";
import { BsGridFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { logoutUser } from "../features/UserSlice";
import { toast } from "react-toastify";

const BigNavbar = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const navigate = useNavigate();
  const { wishlistLength } = useSelector((store) => store.wishlist);
  const { numOfCartItems } = useSelector((store) => store.cart);
  const { compareLength } = useSelector((store) => store.compare);
  const [navFixed, setNavFixed] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const { AllCategories } = useSelector((store) => store.categories);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchProduct) {
      toast.error("enter the product name");
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      setTimeout(() => {
        navigate("/search", {
          state: {
            searchProduct,
          },
        });
      }, 500);
    }
    setIsSubmit(false);
  }, [isSubmit]);
  const showNavbar = () => {
    if (window.scrollY > 150) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showNavbar);
    return () => {
      window.removeEventListener("scroll", showNavbar);
    };
  }, []);

  return (
    <div className="big-navbar">
      {!navFixed && (
        <div className="big-navbar-top">
          <div className="container-fluid">
            <div className="big-navbar-content d-flex justify-content-between align-items-center">
              <div className="big-navbar-content-left">
                <Link to="/about">About Us</Link>
                <Link to="/profile">My Account</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/order">order </Link>
              </div>
              <div className="big-navbar-content-right d-flex align-items-center">
                <h6>
                  Need help? Call Us:<span>+ 1800 900</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
      {!navFixed && (
        <div className="big-navbar-center">
          <div className="container-fluid">
            <div className="big-navbar-center-content d-flex align-items-center justify-content-between">
              <div className="big-navbar-center-left d-flex align-items-center">
                <Link to="/">
                  <div className="logo">
                    <img src={logo} alt="nest" />
                  </div>
                </Link>
                <div className="form-search">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="search items..."
                      value={searchProduct}
                      onChange={(e) => setSearchProduct(e.target.value)}
                    />
                    <img
                      src={search}
                      alt="search"
                      onClick={handleSubmit}
                      type="submit"
                    />
                  </form>
                </div>
              </div>
              <div className="big-navbar-center-right r">
                <Link className="content-link" to="/compare">
                  <div className="content">
                    <div className="content-items d-flex">
                      <img src={compare} alt="compare" />
                      <p className="align-self-end">compare</p>
                    </div>

                    <p className="content-count">{user ? compareLength : 0}</p>
                  </div>
                </Link>
                <Link className="content-link" to="/wishlist">
                  <div className="content">
                    <div className="content-items d-flex">
                      <img src={wishlist} alt="wishlist" />
                      <p className="align-self-end">wishlist</p>
                    </div>
                    <p className="content-count">{user ? wishlistLength : 0}</p>
                  </div>
                </Link>
                <Link className="content-link" to="/cart">
                  <div className="content">
                    <div className="content-items d-flex">
                      <img src={cart} alt="cart" />
                      <p className="align-self-end">cart</p>
                    </div>
                    <p className="content-count">{user ? numOfCartItems : 0}</p>
                  </div>
                </Link>
                {user ? (
                  <div className="content">
                    <div className="content-items d-flex">
                      <img src={account} alt="account" />
                      <div
                        className="user-information"
                        onClick={() => setShowUserInfo(!showUserInfo)}
                      >
                        <p className="align-self-end">
                          {user?.firstName}
                          {showUserInfo ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </p>
                        {showUserInfo && (
                          <div className="user-content">
                            <ul className="list-unstyled">
                              <li className="d-flex align-items-center">
                                <span>
                                  <AiOutlineUser />
                                </span>
                                <Link to="/profile" className="text">
                                  my account
                                </Link>
                              </li>
                              <li className="d-flex align-items-center">
                                <span>
                                  <GoLocation />
                                </span>
                                <Link to="/order" className="text">
                                  order
                                </Link>
                              </li>
                              <li
                                onClick={() => dispatch(logoutUser())}
                                className="d-flex align-items-center"
                              >
                                <span>
                                  <MdOutlineLogout />
                                </span>
                                <span className="text">logout</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link className="content-link" to="/login">
                    <div className="content">
                      <div className="content-items d-flex">
                        <img src={account} alt="account" />
                        <p className="align-self-end">account</p>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={navFixed ? "big-navbar-bottom active" : "big-navbar-bottom"}
      >
        <div className="container-fluid">
          <div className="big-navbar-bottom-content d-flex align-items-center justify-content-between">
            <div className="big-navbar-bottom-left d-flex align-items-center">
              <div
                className="browser-categories d-flex align-items-center"
                onClick={() => setOpenCat(!openCat)}
              >
                <BsGridFill />
                <p>Browse All Categories</p>
                {openCat ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div className="menu">
                <ul className="list-unstyled d-flex">
                  <li>
                    <NavLink
                      to="/"
                      end
                      className={({ isActive }) =>
                        isActive ? "nav-active" : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-active" : null
                      }
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-active" : null
                      }
                      to="/shop"
                      end
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-active" : null
                      }
                      to="/contact-us"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              {openCat && (
                <div className="big-navbar-cats">
                  <div className="row">
                    {AllCategories.map((cat) => {
                      return (
                        <div className="col-md-6">
                          <Link
                            to={`categories/${cat._id}/products`}
                            className="cat-content d-flex align-items-center"
                            onClick={() => setOpenCat(!openCat)}
                          >
                            <div className="cat-img">
                              <img src={cat.image} alt={cat.name} />
                            </div>

                            <h4>{cat.name}</h4>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="big-navbar-right d-flex align-items-center">
              <div className="support-image">
                <img src={support} alt="support" />
              </div>
              <div className="support-content ">
                <p>1900 - 888</p>
                <span>24/7 Support Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNavbar;
