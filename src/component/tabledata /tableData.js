import axios from "axios";
import React, { useEffect, useState } from "react";
//import data from "../../db.json";
import { Link } from "react-router-dom";
import ConfimModel from "./confimModel";

const TableData = () => {
  const [users, setUsers] = useState();
  const [keyValue, setKeyValue] = useState("");
  const [ctime, setCtime] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUsers(response.data);
      });
  };

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

  setInterval(updateTime);

  const onSortChange = (key) => {
    let arrayCopy = [...users];

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

  const deleteUser = (deleteId) => {
    setModalIsOpen(!modalIsOpen);
    setUserId(deleteId);
  };

  /// confim model close event
  const modalClose = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // in confim modal click on the yes button then deleter operation perform
  const submitDelete = (id) => {
    console.log(id);
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      <div className="container-fluid">
        <div classNames="mr-3 text-right">
          <h1 className="d-inline">{ctime}</h1>
        </div>
        <div className="my-3">
          <table class="table table-striped border">
            <thead>
              <tr>
                <th scope="col" onClick={() => onSortChange("id")}>
                  id
                </th>
                <th scope="col" onClick={() => onSortChange("name")}>
                  Firstname
                </th>
                <th scope="col" onClick={() => onSortChange("username")}>
                  UserName
                </th>
                <th scope="col" onClick={() => onSortChange("email")}>
                  email
                </th>
                <th scope="col" onClick={() => onSortChange("phone")}>
                  Phone
                </th>
                <th scope="col"> Action </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link
                        to={`/users/edit/${user.id}`}
                        className="btn btn-success mx-2"
                      >
                        <i class="fas fa-edit" />
                      </Link>
                      <button
                        data-toggle="modal"
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        <i class="far fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <ConfimModel
        show={modalIsOpen}
        id={userId}
        message={"are you delete this item"}
        handleClose={(e) => modalClose(e)}
        confirmModal={submitDelete}
      />
    </>
  );
};

export default TableData;