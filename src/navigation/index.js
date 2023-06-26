import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action">
          <i className="fab fa-twitter"></i>
        </Link>
        <NavLink to="/" end className="list-group-item list-group-item-action">
          <i className="fa-solid fa-home"></i>
          <span className="d-none d-xl-inline ps-1">Home</span>
        </NavLink>
        {/* Search */}
        <NavLink
          to="/search"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-hashtag"></i>
          <span className="d-none d-xl-inline ps-1">Search</span>
        </NavLink>
        {/* Details */}
        <NavLink
          to="/detail/:businessId"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-bell"></i>
          <span className="d-none d-xl-inline ps-1">Details</span>
        </NavLink>
        {/* login */}
        <NavLink to="login" className="list-group-item list-group-item-action">
          <i className="fa-solid fa-envelope"></i>
          <span className="d-none d-xl-inline ps-1">login</span>
        </NavLink>

        {/* sign up */}
        <NavLink
          to="/signup"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-bookmark"></i>
          <span className="d-none d-xl-inline ps-1">sign up</span>
        </NavLink>

        {/* Lists */}
        <NavLink
          to="/profile"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-list"></i>
          <span className="d-none d-xl-inline ps-1">profile</span>
        </NavLink>

        {isHomePage && !currentUser && (
          <Link className="list-group" to="/tuiter/login">
            {" "}
            Login{" "}
          </Link>
        )}
        {isHomePage && !currentUser && (
          <Link className="list-group" to="/tuiter/register">
            Register
          </Link>
        )}
        {currentUser && (
          <Link className="list-group" to="/tuiter/profile">
            {" "}
            Profile{" "}
          </Link>
        )}
      </div>
    </>
  );
};
export default NavigationSidebar;
