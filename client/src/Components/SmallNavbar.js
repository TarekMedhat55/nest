import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import compare from "../images/icon-compare.svg";
import wishlist from "../images/icon-heart.svg";
import cart from "../images/icon-cart.svg";
import { FiMenu } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import search from "../images/search.png";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { showLeftNav } from "../features/UserSlice";
import { toast } from "react-toastify";
const SmallNavbar = () => {
  const [smallNavFixed, setSmallNavFixed] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const { leftNav, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { wishlistLength } = useSelector((store) => store.wishlist);
  const { numOfCartItems } = useSelector((store) => store.cart);
  const { compareLength } = useSelector((store) => store.compare);
  const handleNavFixed = () => {
    if (window.scrollY > 150) {
      setSmallNavFixed(true);
    } else {
      setSmallNavFixed(false);
    }
  };
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
        Navigate("/search", {
          state: {
            searchProduct,
          },
        });
      }, 500);
    }
    setIsSubmit(false);
  }, [isSubmit]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavFixed);
    return () => {
      window.removeEventListener("scroll", handleNavFixed);
    };
  }, []);
  return (
    <div className={smallNavFixed ? "small-navbar active" : "small-navbar"}>
      <div className={leftNav && "nav-overlay"}>
        <div className="container-fluid">
          <div className="small-navbar-content d-flex align-items-center justify-content-between">
            <div className="small-navbar-logo">
              <img src={logo} alt="nest" />
            </div>
            <div className="small-navbar-items d-flex align-items-center ">
              <Link to="/compare" className="small-navbar-item">
                <div>
                  <div className="content">
                    <img src={compare} alt="compare" />
                    <p className="content-count">{compareLength}</p>
                  </div>
                </div>
              </Link>
              <Link to="/wishlist" className="small-navbar-item">
                <div>
                  <div className="content">
                    <img src={wishlist} alt="wishlist" />
                    <p className="content-count">{wishlistLength}</p>
                  </div>
                </div>
              </Link>
              <Link to="/cart" className="small-navbar-item">
                <div>
                  <div className="content">
                    <img src={cart} alt="cart" />
                    <p className="content-count">{numOfCartItems}</p>
                  </div>
                </div>
              </Link>
              <div
                className="small-nav-menu"
                onClick={() => dispatch(showLeftNav())}
              >
                <FiMenu />
              </div>
            </div>

            <div
              className={
                leftNav ? "small-navbar-links show" : "small-navbar-links "
              }
            >
              <div className="small-navbar-links-header d-flex align-items-center justify-content-between">
                <div className="logo">
                  <img src={logo} alt="nest" />
                </div>
                <div
                  className="close-nav"
                  onClick={() => dispatch(showLeftNav())}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="small-navbar-links-search">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="search for items..."
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
              <div className="small-navbar-links-item">
                <ul>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/profile">my-account</Link>
                  </li>{" "}
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="social-account">
                <h2>follow us</h2>
                <div className="social-account-icons">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GrFacebookOption />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNavbar;
