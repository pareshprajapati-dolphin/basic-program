import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const Submithandler = async (e) => {
    e.preventDefault();

    const data = { username, password };
    await axios
      .post("https://trill.demoproject.info/wp-json/jwt-auth/v1/token", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", "Bearer " + res.data.token);
          history.push("/home");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div className="not-found">
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1">
              <h3>Login </h3>
              <form onSubmit={Submithandler}>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input
                    type="username"
                    className="form-control"
                    name="username"
                    placeholder="Enter Your Email "
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Your Password "
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input type="submit" className="btnSubmit" value="Login" />
                </div>
                <div className="form-group">
                  <p>
                    Dont have an account account?{" "}
                    <Link className="ForgetPwd" to={"/signup"}>
                      Click Hear{" "}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
