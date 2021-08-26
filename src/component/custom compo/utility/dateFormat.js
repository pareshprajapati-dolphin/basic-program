import React from "react";
import { DateTimeFormat } from "./dateTimeFormat";

function DateFormat() {
  return (
    <>
      <div className="form-group">
        <label>Date Of Birth</label>
        <input
          type="date"
          name="dob"
          className="form-control"
          value={DateTimeFormat(
            "Tue Aug 26 2021 15:54:25 GMT+0530 (India Standard Time)"
          )}
        />
      </div>
    </>
  );
}

export default DateFormat;
