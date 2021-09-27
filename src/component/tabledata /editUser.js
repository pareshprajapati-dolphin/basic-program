import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../custom compo/utility/button";
import axios from "axios";
import { useHistory } from "react-router";
import Spinner from "component/custom compo/Spinner/spinner";

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, isLoading] = useState(true);
  const [city, setCity] = useState();
  const cityData = [
    { value: "Gwenborough", label: "Gwenborough" },
    { value: "Wisokyburgh", label: "Wisokyburgh" },
    { value: "McKenziehaven", label: "McKenziehaven" },
  ];

  useEffect(() => {
    editData();
  }, []);

  const editData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        //console.log(response.data)
        setValue("firstname", response.data.name);
        setValue("username", response.data.username);
        setValue("email", response.data.email);
        setValue("phone", response.data.phone);
        setValue("city", response.data.address.city);
      });

    isLoading(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  //  console.log(editUser);
  const onUpdate = (data) => {
    console.log(city);
    const dataSub = {
      firstname: data.firstname,
      username: data.username,
      email: data.email,
      phone: data.phone,
      address: {
        city: data.city,
      },
    };
    console.log(dataSub);
  };
  const selectValue = register("city", { required: true });
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit(onUpdate)}>
            <label className="label"> FirstName</label>
            <input
              className="input"
              {...register("firstname", { required: true })}
            />
            <div>
              {errors.firstname && (
                <span className="error">This field is required</span>
              )}
            </div>
            <label className="label"> UserName</label>
            <input
              className="input"
              {...register("username", {
                required: true,
              })}
            />
            <div>
              {errors.username && (
                <span className="error">This field is required</span>
              )}
            </div>

            <label className="label">Email Id</label>
            <input
              className="input"
              {...register("email", {
                required: true,
              })}
            />
            <div>
              {errors.email && (
                <span className="error">This field is required</span>
              )}
            </div>
            <label className="label"> Phone Number</label>
            <input
              className="input"
              {...register("phone", {
                required: true,
              })}
            />
            <div>
              {errors.phone && (
                <span className="error">This field is required</span>
              )}
            </div>

            <label className="label">City</label>
            <select
              className="select"
              {...selectValue}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              {cityData.map((data) => (
                <option value={data.value}>{data.label}</option>
              ))}
            </select>
            <div>
              {errors.city && (
                <span className="error">This field is required</span>
              )}
            </div>
            <Button
              className="btn btn-primary mt-3"
              type="submit"
              onClick={handleSubmit(onUpdate)}
            >
              Update
            </Button>
            <button
              type="button"
              className="btn btn-secondary mt-3 mx-3"
              onClick={() => history.push("/table")}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditUser;
