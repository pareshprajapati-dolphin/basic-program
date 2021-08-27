import React from "react";
import { useForm, Controller } from "react-hook-form";

const SelectExample = () => {
  const { handleSubmit, control } = useForm({});
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
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <label>React Select</label>
            <Controller
              name="ReactSelect"
              control={control}
              render={({ field: { onChange, value } }) => (
                <select
                  className="select"
                  selected={value}
                  required={true}
                  onChange={(e) => onChange(console.log(e.target.value))}
                >
                  {data.map((val, i) => (
                    <option value={val.value}>{val.label}</option>
                  ))}
                </select>
              )}
            />
          </section>
        </form>
      </div>
      <input type="submit" />
    </>
  );
};

export default SelectExample;
