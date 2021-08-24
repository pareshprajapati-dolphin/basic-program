import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ component: Component, ...rest }) {
  const [data1, setdata1] = useState(0);

  useEffect(() => {
    console.log("the useeffect");
    const token = localStorage.getItem("token");

    console.log(token);
    const data = {};
    async function fetchMyAPI() {
      console.log("fetch api functton");
      await axios
        .post(
          "https://trill.demoproject.info/wp-json/jwt-auth/v1/token/validate",
          data,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.status);
          setdata1(res.status);
        });
    }
    fetchMyAPI();
  }, []);

  console.log(data1);

  if (data1 === 200) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else return <Redirect to="/login" />;
}
export default ProtectedRoute;
