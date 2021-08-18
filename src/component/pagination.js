import React from "react";

const Pagination = (props) => {
  const { totalPages, handleClick } = props;
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      {pages.map((number) => (
        <button key={number} onClick={() => handleClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
