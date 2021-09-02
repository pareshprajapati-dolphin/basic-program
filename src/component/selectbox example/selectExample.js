import React from "react";
import { useForm } from "react-hook-form";

const SelectExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const data = [
    {
      value: "cerulean",
      label: "cerulean",
    },
    {
      value: "fuchsia",
      label: "fuchsia rose",
    },
    {
      value: "truered",
      label: "true red",
    },
    {
      value: "aqua",
      label: "aqua sky",
    },
    {
      value: "tigerlily",
      label: "tigerlily",
    },
    {
      value: "turquoise",
      label: "blue turquoise",
    },
  ];
  const onSubmit = (data) => console.log(data);
  const selectValue = register("category", { required: true });
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <select
            className="select"
            {...selectValue}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            {data.map((val, index) => (
              <option value={val.value}>{val.label}</option>
            ))}
          </select>
          <div>
            {errors.category && (
              <span className="error">Select the category </span>
            )}
          </div>
        </form>
      </div>
      <input type="submit" />
    </>
  );
};

export default SelectExample;
