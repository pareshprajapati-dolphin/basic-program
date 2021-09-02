import React from "react";
//import validation from "./validation";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import Button from "../custom compo/utility/button";
import printComponent from "../custom compo/utility/printComponent";

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
      gender: data.gender,
      address: {
        category: data.category,
      },
      acceptTerms: data.terms,
    };
    console.log(dataSub);
    reset();
  };

  const selectValue = register("category", { required: true });
  return (
    <>
      <div className="container mt-3">
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

          {errors.firstname && (
            <span className="error">This field is required</span>
          )}

          <label className="label"> LastName</label>
          <input
            className="input"
            {...register("lastname", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="Last name"
          />

          {errors.lastname && errors.lastname.type === "pattern" && (
            <span className="error">
              number and special char is not allowed
            </span>
          )}
          {errors.lastname && errors.lastname.type === "required" && (
            <span className="error">This field is required </span>
          )}

          <label className="label">Email Id</label>
          <input
            className="input"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder="email Id"
          />

          {errors.email && <span className="error"> invalid Email id</span>}

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

          {errors.phone && (
            <span className="error">Enter the valid Number</span>
          )}

          <label className="label">Date of Birth</label>
          <input
            className="input"
            type="date"
            {...register("dob", {
              required: "true",
            })}
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
          {errors.textarea && <span className="error">Enter the text</span>}
          <label className="label">Category</label>
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

          {errors.category && (
            <span className="error">Select the category </span>
          )}

          <label className="label">
            Gender:
            <input
              style={{ margin: "0px 10px" }}
              {...register("gender", { required: "true" })}
              type="radio"
              name="gender"
              value="male"
            />
            <label>Male</label>
            <input
              style={{ margin: "0px 10px" }}
              {...register("gender", { required: "true" })}
              type="radio"
              name="gender"
              value="female"
            />
            <label>Female</label>
          </label>

          {errors.weather && (
            <span className="error">select the one value</span>
          )}

          <label className="checkbox">
            <input
              style={{ margin: "0px 5px" }}
              {...register("terms", { required: true })}
              type="checkbox"
              value={true}
            />
            I have read and agree to the Terms *
          </label>

          {errors.terms && <span className="error"> select the field</span>}

          <Button
            className="btn btn-primary mt-3 printbtn"
            type="submit"
            clicked={props.onSubmit}
          >
            Submit
          </Button>
          <button
            type="button"
            className="btn btn-secondary mt-3 ml-3 printbtn"
            onClick={() => history.push("/login")}
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
