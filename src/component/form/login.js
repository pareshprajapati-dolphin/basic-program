import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "component/redux/actions";
import SelectExample from "../selectbox example/selectExample";
import PrintComponent from "component/custom compo/utility/printComponent";

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
      <div className="container pt-3 simplediv">
        <form onSubmit={handleSubmitt}>
          <div className="form-group">
            <label className="label">Email address</label>
            <input
              type="email"
              className="form-control input"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={loginData.email}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control input"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={loginData.password}
            />
          </div>

          <button type="submit" className="btn btn-primary my-2 main">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary my-2 main"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
        </form>
      </div>

      <div>
        <PrintComponent />
      </div>
      {/* <SelectExample /> */}
    </>
  );
};

export default Login;
