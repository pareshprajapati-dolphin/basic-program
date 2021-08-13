import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../redux/actions";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmitt = (e) => {
    e.preventDefault();

    console.log("the submitted data", loginData);
    dispatch(signin(loginData.email, loginData.password));
    history.push("/");
    // if(loginData.email === "abc@test.com"){
    //     if(loginData.password === "12345"){
    //         setUserLogged(true);
    //         localStorage.setItem("user", loginData.email);
    //         history.push("/")
    //     }
  };

  return (
    <>
      <div className="container pt-3 rounded border">
        <form onSubmit={handleSubmitt}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={loginData.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={loginData.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
