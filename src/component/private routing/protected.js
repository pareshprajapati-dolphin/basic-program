
import React from "react";
import { Redirect, Route } from "react-router";

const Protected = ({ component : cmp, ...rest}) =>(
 
    <Route
     {...rest}
      render={props =>
          localStorage.getItem("user") ?  (
              <cmp { ...props} />
          ) :
          <Redirect to="/login" />
          }
    />
    );

export default Protected;