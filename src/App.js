//import logo from './logo.svg';
import React, { Suspense, lazy } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//import Product from "component/product/product";
import ContextAPi from "component/context";
import Counter from "component/counter";
import Navbar from "component/navbar/navbar";
import Home from "component/home";
import Login from "component/form/login";
import Logout from "component/logout";
import Tab from "component/tabledata /tab";
import Register from "component/form/register";
import TableData from "component/tabledata /tableData";
import CompA from "component/parentchild/compA";
import Stock from "component/stock table/stock";
import Data from "component/home1/Data";
import ScrollToTop from "./component/scrollToTop";
//import ProductData from "component/product sortion on checkbox/productData";
import Cart from "component/product sortion on checkbox/cart";
//import { signin } from "./component/redux/actions";
import EditUser from "./component/tabledata /editUser";
import Date from "./component/custom compo/utility/dateFormat";

import Page from "./page";
import Spinner from "./component/custom compo/Spinner/spinner";
//import NotFound from "./component/pageNotFound";

const Product = lazy(() => import("component/product/product"));
const ProductData = lazy(() =>
  import("component/product sortion on checkbox/productData")
);
const NotFound = lazy(() => import("./component/pageNotFound"));
// import SignIn from "./component/demo privete rounting/login";
// import ProtectedRoute from "./component/demo privete rounting/ProtectedRoute";
// import Home from "./component/home1/homeComponent";

function App(props) {
  const { isAuth } = props;

  let route = (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Page title="Home">
            <Home {...props} />
          </Page>
        )}
      />
      <Route
        path="/login"
        render={(props) => (
          <Page title="Sign in">
            <Login {...props} />
          </Page>
        )}
      />
      <Route
        path="/register"
        render={(props) => (
          <Page title="Register Page">
            <Register {...props} />
          </Page>
        )}
      />
      <Route
        path="/tab"
        render={(props) => (
          <Page title="Tab">
            <Tab {...props} />
          </Page>
        )}
      />

      <Route
        path="/table"
        render={(props) => (
          <Page title="User Table">
            <TableData {...props} />
          </Page>
        )}
      />

      <Route
        path="/stock"
        render={(props) => (
          <Page title="Stock Page">
            <Stock {...props} />
          </Page>
        )}
      />

      <Route
        path="/productdata"
        render={(props) => (
          <Page title="product Page">
            <ProductData {...props} />
          </Page>
        )}
      />

      <Route
        path="/users/edit/:id"
        render={(props) => (
          <Page title="users-edit">
            <EditUser {...props} />
          </Page>
        )}
      />

      <Route path="/parentComponent" component={CompA} />
      <Route path="/home1" component={Data} />
      <Route exact path="/productdata/carts" component={Cart} />
      <Route path="/date" component={Date} />

      <Route component={NotFound} />
    </Switch>
  );

  if (isAuth) {
    route = (
      <Switch>
        <Route path="/product" render={(props) => <Product {...props} />} />
        <Route path="/context" render={(props) => <ContextAPi {...props} />} />
        <Route path="/reducer" render={(props) => <Counter {...props} />} />
        <Route path="/logout" render={(props) => <Logout {...props} />} />
        <Route component={NotFound} />
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
        <Suspense
          fallback={
            <div>
              <Spinner />
            </div>
          }
        >
          <Navbar />
          {route}
          <ScrollToTop />
        </Suspense>
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
