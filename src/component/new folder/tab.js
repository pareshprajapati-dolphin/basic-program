import React from "react";
import { Link } from "react-router-dom";

const Tab = () => {
  return (
    <>
      <p>
        {" "}
        this th new tab open the link{" "}
        <Link to="https:/www.google.com" target="_blank">
          link
        </Link>
      </p>
    </>
  );
};

export default Tab;
