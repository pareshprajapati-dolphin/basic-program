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
import Tab from "./component/new folder/tab";
import Register from "./component/form/register";
import TableData from "./component/new folder/tableData";
import CompA from "./component/parentchild/compA";
import Stock from "./component/stock table/stock";

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
      <div className="App">
        <Navbar />
        {route}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.userdata,
  };
};

export default connect(mapStateToProps, null)(App);
