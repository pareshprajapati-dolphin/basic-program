import React, { useEffect } from "react";
import { DateTimeFormat } from "./dateTimeFormat";

function DateFormat() {
  const today = new Date();
  useEffect(() => {
    setInterval(function () {
      //code goes here that will be run every 5 seconds.
    }, 1000);
  }, []);
  return (
    <>
      <div className="form-group">
        <label>Date Of Birth</label>
        <input
          type="date"
          name="dob"
          className="form-control"
          value={DateTimeFormat(today)}
        />
      </div>
    </>
  );
}

export default DateFormat;
