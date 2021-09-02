import React, { useEffect, useState } from "react";
import axios from "axios";
//import data from "../../db.json";
import { Link } from "react-router-dom";
import Spinner from "../custom compo/Spinner/spinner";
import ConfimModel from "./confimModel";

const TableData = () => {
  var today = new Date();
  const [users, setUsers] = useState();
  const [keyValue, setKeyValue] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [second, setSecond] = useState(today.getSeconds());
  const [minutes, setMinuties] = useState(today.getMinutes());
  const [hours, setHours] = useState(today.getHours());

  useEffect(() => {
    loadData();
    setInterval(function () {
      setSecond((second) => second + 1);
    }, 1000);
  }, []);

  /// this the one time get and update the time of every second
  function timeUpdate() {
    if (hours > 12) {
      let h = `0${hours % 12}`.slice(-2);
      setHours(h);
    }

    if (second > 59) {
      let m = minutes;
      m = m + 1;
      setMinuties(m);
      setSecond(0);
      if (minutes > 60) {
        setHours(hours + 1);
        setMinuties(0);
      }
    }
    return `${hours}:${minutes}:${second}`;
  }

  const loadData = async () => {
    setTimeout(function () {
      setIsLoading(true);
    }, 5000);

    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUsers(response.data);
      });
  };

  const onSortChange = (key) => {
    let arrayCopy = [...users];

    if (keyValue !== key) {
      arrayCopy.sort((a, b) =>
        a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
      );
      setKeyValue(key); // here set the previous key of the sorting
    } else {
      arrayCopy.sort((a, b) =>
        b[key] > a[key] ? 1 : a[key] > b[key] ? -1 : 0
      );
      setKeyValue("");
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
      {!isLoading ? (
        <Spinner />
      ) : (
        <div className="container-fluid">
          <div classNames="mr-3 text-right">
            <h1 className="d-inline">Timer : {timeUpdate()}</h1>
          </div>
          <div className="my-3">
            <table className="table table-striped border">
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
                    <tr key={index}>
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
                          <i className="fas fa-edit" />
                        </Link>
                        <button
                          data-toggle="modal"
                          className="btn btn-danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          <i className="far fa-trash-alt" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

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
