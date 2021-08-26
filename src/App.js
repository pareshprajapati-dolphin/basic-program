//import logo from './logo.svg';
import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Product from "./component/product/product";
import ContextAPi from "./component/context";
import Counter from "./component/counter";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Login from "./component/form/login";
import Logout from "./component/logout";
import Tab from "./component/tabledata /tab";
import Register from "./component/form/register";
import TableData from "./component/tabledata /tableData";
import CompA from "./component/parentchild/compA";
import Stock from "./component/stock table/stock";
import Data from "./component/home1/Data";
import ScrollToTop from "./component/scrollToTop";
import ProductData from "./component/product sortion on checkbox/productData";
import Cart from "./component/product sortion on checkbox/cart";
//import { signin } from "./component/redux/actions";
import EditUser from "./component/tabledata /editUser";
import Date from "./component/custom compo/utility/dateFormat";

// import SignIn from "./component/demo privete rounting/login";
// import ProtectedRoute from "./component/demo privete rounting/ProtectedRoute";
// import Home from "./component/home1/homeComponent";

function App(props) {
  const { isAuth } = props;

  let route = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/tab" component={Tab} />
      <Route path="/register" component={Register} />
      <Route path="/table" component={TableData} />
      <Route path="/parentComponent" component={CompA} />
      <Route path="/stock" component={Stock} />
      <Route path="/home1" component={Data} />
      <Route exact path="/productdata" component={ProductData} />
      <Route exact path="/productdata/carts" component={Cart} />
      <Route exact path="/users/edit/:id" component={EditUser} />
      <Route path="/date" component={Date} />
    </Switch>
  );

  if (isAuth) {
    route = (
      <Switch>
        <Route path="/product" render={(props) => <Product {...props} />} />
        <Route path="/context" render={(props) => <ContextAPi {...props} />} />
        <Route path="/reducer" render={(props) => <Counter {...props} />} />
        <Route path="/logout" render={(props) => <Logout {...props} />} />
      </Switch>
    );
  }

  return (
    <>
      {/* <Switch>
        <Route exact path="/login" component={SignIn} />
        <ProtectedRoute path="/home" component={Home} />
      </Switch> */}
      <div className="App">
        <Navbar />
        {route}
        <ScrollToTop />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.userdata,
  };
};

export default connect(mapStateToProps, null)(App);
