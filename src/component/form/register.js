import React, { useState } from "react";
import validation from "./validation";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handlefile = (e) => {
    // console.log();
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    setErrors(validation(data));
    console.log(errors);
    if (!errors) {
      console.log(data);
    }
  };

  return (
    <>
      <div className="container pt-3 rounded border">
        <form onSubmit={handleSubmitt}>
          <div className="form-group">
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              placeholder="Enter firstname"
              onChange={handleChange}
              value={data.firstname}
            />
            {errors.firstname && <span>{errors.firstname}</span>}
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              placeholder="Enter lastname"
              onChange={handleChange}
              value={data.lastname}
            />
            {errors.firstname && <span>{errors.lastname}</span>}
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={data.email}
            />
            {errors.firstname && <span>{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {errors.firstname && <span>{errors.password}</span>}
          </div>
          <div className="form-group">
            <label>upload file</label>
            <input
              type="file"
              className="form-control"
              name="file"
              accept=".png .jpg"
              onChange={handlefile}
            />
            <img src={file} />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
