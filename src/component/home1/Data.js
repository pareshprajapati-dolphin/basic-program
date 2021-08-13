import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  incrementdata,
  decrementdata,
  resetdata,
  increment,
  decrement,
  zero,
} from "../redux/actions/action";

const Data = () => {
  const total = useSelector((state) => state.countReducer.count);

  const countdata2 = useSelector((state) => state.countReducer.conut1);
  const array = [1, 2, 3, 4, 5];

  const dispatch = useDispatch();

  return (
    <>
      <div className="container pt-3">
        <p>this count the data:- {total}</p>

        <button
          className="mx-1"
          onClick={() => dispatch(incrementdata(total + 1, array))}
        >
          {" "}
          Increment1
        </button>
        <button
          className="mx-1"
          onClick={() => dispatch(decrementdata(total - 1))}
        >
          {" "}
          Decrement1
        </button>
        <button className="mx-1" onClick={() => dispatch(resetdata(0))}>
          {" "}
          Reset{" "}
        </button>
      </div>
      <div>
        <p>this count the data:- {countdata2}</p>

        <button
          className="mx-1"
          onClick={() => dispatch(increment(countdata2 + 2))}
        >
          {" "}
          Increment2
        </button>
        <button
          className="mx-1"
          onClick={() => dispatch(decrement(countdata2 - 2))}
        >
          {" "}
          Decrement2
        </button>
        <button className="mx-1" onClick={() => dispatch(zero(0))}>
          {" "}
          Reset{" "}
        </button>
      </div>
    </>
  );
};

export default Data;
