import React from "react";

/// this the child component ///
const CompB = ({ inputdata, parentcall }) => {
  console.log(inputdata);

  const result = parseInt(inputdata.input1) + parseInt(inputdata.input2);

  const handleChlid = () => {
    //console.log(result);
    parentcall(result);
  };
  return (
    <>
      <p>this the child component</p>
      <button onClick={handleChlid}>result</button>
    </>
  );
};

export default CompB;
