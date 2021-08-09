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
                <NavLink to="/">Home</NavLink>
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/login"> Login</NavLink>{" "}
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                <NavLink to="/register"> Sign up</NavLink>
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/tab"> Tab open</NavLink>
              </li>
            ) : null}

            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/parentComponent"> parentToChild</NavLink>
              </li>
            ) : null}

            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/table"> Table</NavLink>
              </li>
            ) : null}
            {isAuth ? (
              <li>
                {" "}
                <NavLink to="/product"> Product </NavLink>{" "}
              </li>
            ) : null}
            {isAuth ? (
              <li>
                {" "}
                <NavLink to="/context"> Context </NavLink>{" "}
              </li>
            ) : null}
            {isAuth ? (
              <li>
                {" "}
                <NavLink to="/reducer"> Reducer </NavLink>{" "}
              </li>
            ) : null}
            {!isAuth ? (
              <li>
                {" "}
                <NavLink to="/stock"> Stocks Table</NavLink>{" "}
              </li>
            ) : null}
            {isAuth ? (
              <li>
                {" "}
                <NavLink to="/logout"> Logout </NavLink>{" "}
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
    isAuth: state.auth.userdata,
  };
};

export default connect(mapStateToProps, null)(Navbar);
