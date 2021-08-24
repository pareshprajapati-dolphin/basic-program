import React from "react";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        ref={props.register}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
