import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { CgProfile } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { logoutUser } from "../../features/UserSlice";
const ProfileShareLayout = () => {
  const dispatch = useDispatch();
  return (
    <div className="myAccount">
      <div className="row">
        <div className="col-md-3">
          <div className="myAccount-list">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="list">
              <li>
                <Link to="/">
                  <span className="icon">
                    <FaHome />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  end
                  className={({ isActive }) =>
                    isActive ? "profile-active" : undefined
                  }
                >
                  <span className="icon">
                    <CgProfile />
                  </span>
                  <span>profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile/wishlist"
                  className={({ isActive }) =>
                    isActive ? "profile-active" : undefined
                  }
                >
                  <span className="icon">
                    <FiHeart />
                  </span>
                  <span>wishlist</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile/orders"
                  className={({ isActive }) =>
                    isActive ? "profile-active" : undefined
                  }
                >
                  <span className="icon">
                    <BsCart2 />
                  </span>
                  <span>orders</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile/address"
                  className={({ isActive }) =>
                    isActive ? "profile-active" : undefined
                  }
                >
                  <span className="icon">
                    <GoLocation />
                  </span>
                  <span>address</span>
                </NavLink>
              </li>
              <li className="logout" onClick={() => dispatch(logoutUser())}>
                <span className="icon">
                  <BiLogOut />
                </span>
                <span>sign out</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="myAccount-details">{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileShareLayout;
