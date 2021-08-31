import React from "react";
//import validation from "./validation";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import Button from "../custom compo/utility/button";

//import Input from "../custom compo/utility/input";

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const history = useHistory();
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
    const dataSub = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      address: {
        category: data.category,
        weather: data.weather,
      },
    };
    console.log(dataSub);
    reset();
  };

  const selectValue = register("category", { required: true });
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
          <label className="label">FirstName</label>
          <input
            className="input"
            {...register("firstname", {
              required: true,
            })}
            placeholder="firstname"
          />
          <div>
            {errors.firstname && (
              <span className="error">This field is required</span>
            )}
          </div>
          <label className="label"> LastName</label>
          <input
            className="input"
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
          <label className="label">Email Id</label>
          <input
            className="input"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder="email Id"
          />
          <div>
            {errors.email && <span className="error"> invalid Email id</span>}
          </div>
          <label className="label">Phone Number</label>
          <input
            className="input"
            type="number"
            {...register("phone", {
              required: "true",
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
          <label className="label">Date of Birth</label>
          <input
            className="input"
            type="date"
            {...register("dob", {
              required: "true",
            })}
            // defaultValue={DateTimeFormat(
            //   "Tue Aug 26 2021 15:54:25 GMT+0530 (India Standard Time)"
            // )}
          />

          <label className="label">TextArea</label>
          <textarea
            className="input"
            type="text"
            {...register("textarea", {
              required: "true",
            })}
            placeholder="Enter the text"
          />
          {/* <div>
            {errors.dob && <span className="error">select the date</span>}
          </div> */}
          <label className="label"> Category</label>
          <select
            className="select"
            {...selectValue}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <option value="">Select Category...</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
          </select>
          <div>
            {errors.category === "required" && (
              <span className="error">select the one Category</span>
            )}
          </div>
          <label className="label">
            I would like to:
            <input
              style={{ margin: "0px 10px" }}
              {...register("weather", { required: "true" })}
              type="radio"
              name="weather"
              value="rain"
            />
            <label>Rain</label>
            <input
              style={{ margin: "0px 10px" }}
              {...register("weather", { required: "true" })}
              type="radio"
              name="weather"
              value="wind"
            />
            <label>Wind</label>
          </label>
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
          <button
            type="button"
            className="btn btn-secondary mt-3 mx-3"
            onClick={() => history.push("/")}
          >
            {" "}
            cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
