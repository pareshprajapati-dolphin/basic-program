import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../db.json";
import { useForm } from "react-hook-form";
import Button from "../custom compo/utility/button";

const EditUser = (props) => {
  const { id } = useParams();
  const [editUser, setEditUser] = useState({});

  useEffect(() => {
    const value = {};
    const fetchData = data.users.find((d) => d.id == id);
    const fields = ["firstname", "price"];
    fields.forEach((field) => setValue(field, fetchData[field]));
    setEditUser(fetchData);
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  //  console.log(editUser);
  const onUpdate = (datasub) => {
    console.log(datasub);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onUpdate)}>
          <label> FirstName</label>
          <input
            {...register("firstname", { required: true })}
            placeholder="First name"
          />
          <div>
            {errors.firstName && (
              <span className="error">This field is required</span>
            )}
          </div>
          <label> Price</label>
          <input
            {...register("price", {
              required: true,
            })}
            placeholder="Price"
          />
          {errors.lastName && errors.lastName.type === "required" && (
            <span className="error">This field is required </span>
          )}

          <Button
            className="btn btn-primary mt-3"
            clicked={props.onSubmit}
            type="submit"
          >
            Update
          </Button>
          <Button className="btn btn-secondary mt-3 mx-3" type="reset">
            Reset
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
