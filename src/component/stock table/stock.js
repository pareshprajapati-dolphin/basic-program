import React, { useEffect, useState } from "react";
import data from "../../stockdata.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableData from "./tableStock";
import RadioButton from "./radioButton";
import Stepper from "./stepper";

const Stock = () => {
  const [product, setProduct] = useState(data.products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [stock, setStock] = useState("");
  const [checked, setChecked] = useState("quantity");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let a = 0;
    console.log("the useeffect is call");
    product.map((datatext) => (a += datatext.quanity * datatext.price));
    setTotalPrice(a);
  }, [stock]);

  /// this the child component to parent component get the data tabel quanity change ///
  const handleCallback = (chailddata, data) => {
    setTotalPrice(chailddata);
    setProduct(data);
  };

  /// this the user input the value in child componrt and result is show in patrent component //
  const radionchange = (stock, products) => {
    setStock(stock);
    setProduct(products);
  };

  /// this the button function if placeorder and cancel and confirm  ///
  const handlePlaceOrder = () => {
    setCurrent(current + 1);
    setDisabled(!disabled);
  };

  const handelCancel = () => {
    setCurrent(current - 1);
    setDisabled(!disabled);
  };

  const handleConfirm = () => {
    toast.success("your data is submitt");

    setCurrent(current + 1);
  };

  const handleReset = () => {
    product.map((arrayCopy) => {
      arrayCopy.quanity = 1;
    });
    setDisabled(!disabled);
    setStock("");
    setCurrent(0);
    setProduct(product);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <Stepper current={current} />
        </div>
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
          <RadioButton
            product={product}
            disabled={disabled}
            checked={checked}
            TotalPrices={totalPrice}
            parentcall={radionchange}
          />
        </div>
        <div>
          <TableData
            products={product}
            TotalPrices={totalPrice}
            disabled={disabled}
            parentcall={handleCallback}
          />
          {current === 0 ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={(e) => handlePlaceOrder()}
            >
              {" "}
              Place Order{" "}
            </button>
          ) : null}
          {current === 1 ? (
            <button
              type="button"
              className="btn btn-secondary mx-1"
              onClick={() => handelCancel()}
            >
              Cancel
            </button>
          ) : null}

          {current === 1 ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleConfirm()}
            >
              confirm
            </button>
          ) : null}
          {current === 2 ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleReset()}
            >
              Reset
            </button>
          ) : null}
        </div>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </>
  );
};
export default Stock;
