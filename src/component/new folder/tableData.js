import React, { useState } from "react";
import data from "../../db.json";

const TableData = () => {
  const [users, setUsers] = useState(data.users);
  const [keyValue, setKeyValue] = useState("");
  const [ctime, setCtime] = useState("");

  const updateTime = () => {
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
    let sec = today.getSeconds();

    //console.log(typeof min, typeof hours);
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours < 10 ? "0" + hours : hours;
    sec = sec < 10 ? "0" + sec : sec;
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
      ":" +
      sec +
      " " +
      " " +
      ampm;
    setCtime(dateTime1);
  };

  setInterval(updateTime, 200);

  const onSortChange = (key) => {
    let arrayCopy = [...users];
    //console.log(arrayCopy);

    if (keyValue !== key) {
      arrayCopy.sort((a, b) =>
        a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
      );
      setKeyValue(key);
      // setUsers(arrayCopy);
    } else {
      arrayCopy.sort((a, b) =>
        b[key] > a[key] ? 1 : a[key] > b[key] ? -1 : 0
      );
      setKeyValue("");
      // setUsers(arrayCopy);
    }
    setUsers(arrayCopy);
  };

  return (
    <>
      <div className="container-fluid">
        <div classNames="mr-3 text-right">
          <p className="d-inline">{ctime}</p>
        </div>
        <div className="my-3">
          <table class="table border shadow">
            <thead>
              <tr>
                <th scope="col" onClick={() => onSortChange("id")}>
                  id
                </th>
                <th scope="col" onClick={() => onSortChange("firstname")}>
                  Firstname
                </th>
                <th scope="col" onClick={() => onSortChange("price")}>
                  price
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstname}</td>
                    <td>{user.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableData;
