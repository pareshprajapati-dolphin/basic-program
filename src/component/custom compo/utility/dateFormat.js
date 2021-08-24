import React from "react";

function DateFormat() {
  const DateTimeFormat = (dateData) => {
    let date = new Date(dateData);

    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var months =
      date.getMonth() + 1 < 9
        ? "0" + parseInt(date.getMonth() + 1)
        : date.getMonth() + 1;

    var year = date.getFullYear();

    return year + "-" + months + "-" + day;
  };

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
