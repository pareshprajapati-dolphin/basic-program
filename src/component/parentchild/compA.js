import React, { useState } from "react";
import CompB from "./compB";

/// passing the data from parent to child and  pass the some result data form child to parent //
const CompA = () => {
  const [data, setData] = useState({
    input1: "",
    input2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCallback = (childdata) => {
    //console.log("parent function ");
    console.log(" the addtion of data", childdata);
  };
  return (
    <>
      <p> this the parent component</p>
      <input
        type="number"
        name="input1"
        onChange={(e) => handleChange(e)}
        value={data.input1}
      />
      <input
        type="text"
        name="input2"
        onChange={(e) => handleChange(e)}
        value={data.input2}
      />

      <CompB inputdata={data} parentcall={handleCallback} />
    </>
  );
};

export default CompA;
