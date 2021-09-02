import React from "react";
import "./print.css";

const PrintComponent = (props) => {
  const { firstname, lastname, email, number, category } = props;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="printdiv">
        <div className="header">Here's a print copy of data you entered </div>
        <br></br>

        <div className="my-3">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">stock</th>
                <th scope="col">Quantity</th>
                <th scope="col">price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tcs</td>
                <td>1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr className="table-borderless">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ fontSize: "bold" }}>Total Price:-200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="printfooter">THis the footer tag</div>
      </div>

      <button
        type="button"
        className="btn btn-primary my-2 mx-2 printbtn"
        onClick={() => handlePrint()}
      >
        Print
      </button>
    </>
  );
};

export default PrintComponent;
