import React, { useState } from "react";

const TableStock = (props) => {
  const { products, TotalPrices, disabled, parentcall } = props;
  const [stock, setStock] = useState(products);

  const quanityChange = (e, index) => {
    let a = 0;
    let data1 = stock;
    data1[index].quanity = e.target.value;
    if (e.target.value === null) return;
    data1.map((datatext) => (a += datatext.quanity * datatext.price));
    parentcall(a, data1);
  };

  const ChangeQuanityBlur = (e, index) => {
    if (!e.target.value || e.target.value < 1) e.target.value = 1;

    let data1 = stock;
    data1[index].quanity = e.target.value;

    setStock([...data1]);
  };

  return (
    <>
      <div className="my-3">
        <table class="table border shadow">
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
            {stock &&
              stock.map((stock, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{stock.name}</td>
                  <td>
                    <input
                      type="number"
                      name="quanity"
                      value={stock.quanity}
                      onChange={(e) => quanityChange(e, index)}
                      onBlur={(e) => ChangeQuanityBlur(e, index)}
                      disabled={disabled}
                    />
                  </td>
                  <td>{stock.price}</td>
                  <td>{(stock.quanity * stock.price).toFixed(2)}</td>
                </tr>
              ))}
            <tr className="table-borderless">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td> Total price:-{TotalPrices.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableStock;
