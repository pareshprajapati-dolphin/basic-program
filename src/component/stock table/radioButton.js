import React, { useState } from "react";

const RadioButton = (props) => {
  const { product, disabled, TotalPrices, checked, parentcall } = props;

  const [products, setProducts] = useState(product);
  const [stocks, setStocks] = useState("");

  // select the radio button and and enter the value then onclick then call this function is call ///
  const handleAdd = () => {
    let caldata = products;
    if (checked === "quantity") {
      caldata.map((arrayCopy) => (arrayCopy.quanity = stocks));
    }
    /// this price logic ////
    if (checked === "price") {
      console.log("price function  is call");
      let amountperquanity = stocks / product.length;
      //console.log(amountperquanity);
      let limiteprice = 0;

      caldata = caldata.map((ele) => {
        limiteprice = limiteprice + ele.price;
        // console.log("the limit price is ===", limiteprice);
        if (stocks > limiteprice) {
          ele.quanity = Math.floor(amountperquanity / ele.price);
          console.log(ele.quanity);
        }
        return ele;
      });
      // console.log(caldata);
    }
    //console.log(caldata);
    setProducts(caldata);
    parentcall(stocks, products);
  };
  return (
    <>
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
        value={stocks}
        onChange={(e) => setStocks(e.target.value)}
        disabled={disabled}
      />
      <button className="mx-1" type="submiit" onClick={() => handleAdd()}>
        {" "}
        Add{" "}
      </button>
      <p> total Price:{TotalPrices.toFixed(2)}</p>
    </>
  );
};

export default RadioButton;
