import React, { useEffect, useState } from "react";
import data from "../../stockdata.json";

const Stock = () => {
  const [product, setProduct] = useState(data.products);
  const [checked, setChecked] = useState("quantity");
  const [total, setTotal] = useState(0);

  const [stock, setStock] = useState("");

  let a = 0;
  useEffect(() => {
    product.map((datatext) => (a = a + datatext.quanity * datatext.price));
    setTotal(a);
  }, []);

  const handleAdd = () => {
    //console.log("the data ===", stock, checked);
    let a = 0;
    if (checked === "quantity") {
      product.map(
        (arrayCopy) => (
          (arrayCopy.quanity = stock),
          (a = a + parseFloat(stock * arrayCopy.price))
        )
      );
    }
    if (checked === "price") {
      //// price logic is here ///
    }
    setTotal(a);
    setProduct(product);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="topping">
          <input
            type="radio"
            value="quantity"
            checked={checked === "quantity"}
            onChange={(e) => setChecked(e.target.value)}
          />
          Quantity
          <input
            className="mx-2"
            type="radio"
            value="price"
            checked={checked === "price"}
            onChange={(e) => setChecked(e.target.value)}
          />
          Price
          <label className="mx-3">
            {" "}
            enter the {checked === "quantity" ? "quantity" : "price"}{" "}
          </label>
          <input
            className="mx-4"
            type="text"
            id="text"
            name="textinput"
            onChange={(e) => setStock(e.target.value)}
          />
          <button className="mt-1" type="submiit" onClick={() => handleAdd()}>
            {" "}
            Add{" "}
          </button>
          <p> total Price:{total}</p>
        </div>
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
              {product &&
                product.map((stocks, index) => (
                  <tr>
                    <td scope="row">{index + 1}</td>
                    <td>{stocks.name}</td>
                    <td>
                      <input
                        type="text"
                        name="quanity"
                        value={stocks.quanity}
                      />
                    </td>
                    <td>{stocks.price}</td>
                    <td>
                      {stock === ""
                        ? stocks.quanity * stocks.price
                        : parseInt(stock) * stocks.price}
                    </td>
                  </tr>
                ))}
            </tbody>
            <td colSpan="5">Total price:-{total}</td>
          </table>
        </div>
      </div>
    </>
  );
};
export default Stock;
