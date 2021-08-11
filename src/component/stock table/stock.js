import React, { useEffect, useState } from "react";
import data from "../../stockdata.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableData from "./tableStock";

const Stock = () => {
  const [product, setProduct] = useState(data.products);
  const [checked, setChecked] = useState("quantity");
  const [totalPrice, setTotalPrice] = useState(0);
  const [page, setPage] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [stock, setStock] = useState("");

  useEffect(() => {
    let a = 0;
    product.map((datatext) => (a += datatext.quanity * datatext.price));
    setTotalPrice(a);
  }, [product]);

  /// this the child component to parent component get the data ///
  const handleCallback = (chailddata, stocks) => {
    setTotalPrice(chailddata);
    setProduct(stocks);
  };

  // select the radio button and and enter the value then onclick then call this function is call ///
  const handleAdd = () => {
    let caldata = product;
    if (checked === "quantity") {
      caldata.map((arrayCopy) => {
        arrayCopy.quanity = stock;
      });
      setStock("");
    }
    /// this price logic ////
    if (checked === "price") {
      let amountperquanity = stock / product.length;
      console.log(amountperquanity);
      let limiteprice = 0;

      caldata = caldata.map((ele) => {
        limiteprice = limiteprice + ele.price;

        console.log("the limit price is ===", limiteprice);
        if (stock > limiteprice) {
          ele.quanity = Math.floor(amountperquanity / ele.price);
          console.log(ele.quanity);
        }
        return ele;
      });
      //console.log(caldata);
    }
    setProduct([...caldata]);
  };

  /// this the button function if placeorder and cancel and confirm  ///
  const handlePlaceOrder = () => {
    setPage(1);
    setDisabled(!disabled);
  };

  const handelCancel = () => {
    setPage(0);
    setDisabled(!disabled);
  };

  const handleConfirm = () => {
    setPage(2);
    toast.success("your data is submitt");

    product.map((arrayCopy) => {
      arrayCopy.quanity = 1;
    });
    setDisabled(!disabled);
    setPage(0);
    setStock("");
    setProduct([...product]);
  };

  const handleReset = () => {
    product.map((arrayCopy) => {
      arrayCopy.quanity = 1;
    });
    setDisabled(!disabled);
    setPage(0);
    setStock("");
    setProduct([...product]);
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
            type="number"
            id="text"
            name="textinput"
            placeholder={
              checked === "quantity"
                ? "Enter quantity to invest"
                : "Enter amount to invest"
            }
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            disabled={disabled}
          />
          <button className="mx-1" type="submiit" onClick={() => handleAdd()}>
            {" "}
            Add{" "}
          </button>
          <p> total Price:{totalPrice.toFixed(2)}</p>
        </div>

        <div>
          <TableData
            products={product}
            TotalPrices={totalPrice}
            stocks={stock}
            checked={checked}
            disabled={disabled}
            parentcall={handleCallback}
          />

          {page === 0 ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={(e) => handlePlaceOrder()}
            >
              {" "}
              Place Order{" "}
            </button>
          ) : null}
          {page === 1 ? (
            <button
              type="button"
              className="btn btn-secondary mx-1"
              onClick={() => handelCancel()}
            >
              Cancel
            </button>
          ) : null}

          {page === 1 ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleConfirm()}
            >
              confirm
            </button>
          ) : null}
          {page === 2 ? (
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
