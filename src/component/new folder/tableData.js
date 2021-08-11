import React, { useEffect, useState } from "react";
import data from "../../db.json";

const TableData = () => {
  const [users, setUsers] = useState([]);
  const [keyValue, setKeyValue] = useState("");

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    setUsers(data.users);
  };

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
