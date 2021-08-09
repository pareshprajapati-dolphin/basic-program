import React, { useEffect, useState } from "react";

const Home = () => {
  const [timer, setTimer] = useState();
  const [dateTime, setDateTime] = useState();
  let a = 20;

  useEffect(() => {
    let interval = setInterval(() => {
      a = a - 1;
      setTimer(a);
      if (a === 0) {
        loadtdate();
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  const loadtdate = () => {
    var today = new Date();

    var day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    var months =
      today.getMonth() + 1 < 9
        ? "0" + parseInt(today.getMonth() + 1)
        : today.getMonth() + 1;

    var year = today.getFullYear();
    var hours = today.getHours();
    var min =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();

    //console.log(typeof min, typeof hours);
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours < 10 ? "0" + hours : hours;

    var dateTime1 =
      day +
      "/" +
      months +
      "/" +
      year +
      " " +
      " " +
      hours +
      ":" +
      min +
      " " +
      ampm;
    setDateTime(dateTime1);
  };
  // console.log(dateTime);

  return (
    <div>
      <p> this the home page </p>
      {timer === 0 ? (
        <p> {dateTime}</p>
      ) : (
        <p> this the download link {timer} second </p>
      )}
    </div>
  );
};

export default Home;
