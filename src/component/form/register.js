import React from "react";
//import validation from "./validation";

import { useForm } from "react-hook-form";
import Button from "../custom compo/utility/button";
import Input from "../custom compo/utility/input";

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});
  // const [data, setData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   dob: "",
  // });

  // const [errors, setErrors] = useState({});
  // const [file, setFile] = useState();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  // const handlefile = (e) => {
  //   // console.log();
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // };

  // const handleSubmitt = (e) => {
  //   e.preventDefault();
  //   setErrors(validation(data));
  //   console.log(errors);
  //   if (!errors) {
  //     console.log(data);
  //   }
  // };

  const onAdd = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="container pt-3 ">
        {/* <form onSubmit={handleSubmitt}>
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
            <label>Date Of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              value={data.dob}
              onChange={handleChange}
            />
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
            <img src={file} alt="upload img" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form> */}

        <form onSubmit={handleSubmit(onAdd)}>
          <Input
            type="text"
            name="firstName"
            label="First Name"
            placeholder="firstName"
            ref={register("firstname", {
              required: true,
            })}
          />
          <div>
            {errors.firstname && (
              <span className="error">This field is required</span>
            )}
          </div>
          <label> LastName</label>
          <input
            {...register("lastname", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="Last name"
          />
          <div>
            {errors.lastname && errors.lastname.type === "pattern" && (
              <span className="error">
                number and special char is not allowed
              </span>
            )}
            {errors.lastname && errors.lastname.type === "required" && (
              <span className="error">This field is required </span>
            )}
          </div>
          <label>Email Id</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder="email Id"
          />
          <div>
            {errors.email && <span className="error"> invalid Email id</span>}
          </div>
          <label>Phone Number</label>
          <input
            type="number"
            {...register("phone", {
              required: "This field is required",
              minLength: "10",
              maxLength: { value: 10, message: "not more then 10" },
            })}
            placeholder="Phone Number"
          />
          <div>
            {errors.phone && (
              <span className="error">Enter the valid Number</span>
            )}
          </div>
          <label>Date of Birth</label>
          <input
            type="date"
            {...register("dob", {
              required: "true",
            })}
          />
          <div>
            {errors.dob && <span className="error">select the date</span>}
          </div>
          <label> Category</label>
          <select {...register("category", { required: true, value: "A" })}>
            <option value="">Select Category...</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
          </select>
          <div>
            {errors.category && (
              <span className="error">select the one Category</span>
            )}
          </div>
          <label>I would like to: </label>
          <input
            {...register("weather", { required: "true" })}
            type="radio"
            name="weather"
            value="rain"
          />
          <h4>Rain</h4>
          <input
            {...register("weather", { required: "true" })}
            type="radio"
            name="weather"
            value="wind"
          />
          <h4>Wind</h4>
          <div>
            {errors.weather && (
              <span className="error">select the one value</span>
            )}
          </div>

          <Button
            className="btn btn-primary mt-3"
            type="submit"
            clicked={props.onSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
