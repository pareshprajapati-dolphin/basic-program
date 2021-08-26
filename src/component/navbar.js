import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { isAuth } = props;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          React
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/" className="nav-item">
                  Home
                </NavLink>
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/login" className="nav-item">
                  {" "}
                  Login
                </NavLink>{" "}
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                <NavLink to="/register" className="nav-item">
                  {" "}
                  Sign up
                </NavLink>
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/tab" className="nav-item">
                  {" "}
                  Tab open
                </NavLink>
              </li>
            ) : null}

            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/parentComponent" className="nav-item">
                  {" "}
                  parentToChild
                </NavLink>
              </li>
            ) : null}

            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/table" className="nav-item">
                  {" "}
                  User Table
                </NavLink>
              </li>
            ) : null}
            {isAuth ? (
              <li>
                {" "}
                <NavLink to="/product" className="nav-item">
                  {" "}
                  Product{" "}
                </NavLink>{" "}
              </li>
            ) : null}
            {isAuth ? (
              <li>
                {" "}
                <NavLink to="/context" className="nav-item">
                  {" "}
                  Context{" "}
                </NavLink>{" "}
              </li>
            ) : null}
            {isAuth ? (
              <li>
                {" "}
                <NavLink to="/reducer" className="nav-item">
                  {" "}
                  Reducer{" "}
                </NavLink>{" "}
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/stock" className="nav-item">
                  {" "}
                  Stocks Table
                </NavLink>{" "}
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                <NavLink to="/productdata" className="nav-item">
                  filpkart productdesign
                </NavLink>{" "}
              </li>
            ) : null}
            {isAuth ? (
              <li>
                <NavLink to="/logout" className="nav-item">
                  {" "}
                  Logout{" "}
                </NavLink>{" "}
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.userdata,
  };
};

export default connect(mapStateToProps, null)(Navbar);
