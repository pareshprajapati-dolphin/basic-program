import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import ProductItem from "./productItem";
import { Context } from "./context";

const ProductData = () => {
  const [product, setProduct] = useState(data.products);
  const [checkvalue, setCheckValue] = useState([]);

  let brand = [...new Set(data.products.map((value) => value.brande))];

  const [select, setSelect] = useState("selected");
  const [count, setCount] = useState(0);

  const [productData, SetProductData] = useState(data.products);
  const [selectedData, setSelectedData] = useState(data.products);

  let resultArray = [];
  let finalResult = [];
  let selectedPrice = [];

  /// apply the filtering on the select the brand of product  ////
  const handleCheckbox = (e) => {
    //  this the checkbox value is set or not and resultArray store the
    //  how many select the checkbox or not ---
    if (e.target.checked) {
      resultArray = checkvalue.filter(
        (brandname) => brandname !== e.target.value
      );
      resultArray.push(e.target.value); /// add the new data
    } //if not checked (false), then remove this id from checkedList
    else {
      resultArray = checkvalue.filter(
        (brandname) => brandname !== e.target.value
      );
    }

    setCheckValue(resultArray);
    if (resultArray.length === 0) {
      SetProductData(product);
      setSelectedData(product);
    }
    if (resultArray.length > 0) {
      resultArray.map((val) => {
        product.map((data) => {
          if (data.brande === val) {
            finalResult = [...finalResult, data]; /// concat the to finalresult data
          }
        });
      });
      SetProductData(finalResult);
      setSelectedData(finalResult); /// this data is set after using the when only price is change //
    }

    if (select !== "selected") {
      if (finalResult.length === 0) finalResult = product;
      console.log(finalResult);
      selectedPrice = select.split("-");
      let getTheData = [];
      finalResult.map((val) => {
        if (val.MRP >= selectedPrice[0] && val.MRP <= selectedPrice[1]) {
          console.log(val);
          getTheData.push(val);
        }
      });
      console.log(getTheData);
      SetProductData(getTheData);
    }
  };

  // the select the price then display that price related data
  const priceSelectChange = (e) => {
    setSelect(e.target.value);
    selectedPrice = e.target.value.split("-"); /// here this split the string into two array //
    if (checkvalue.length === 0) {
      product.map((val) => {
        if (val.MRP >= selectedPrice[0] && val.MRP <= selectedPrice[1]) {
          finalResult = [...finalResult, val];
        }
      });
    } else {
      console.log(selectedData);
      selectedData.map((val) => {
        if (val.MRP >= selectedPrice[0] && val.MRP <= selectedPrice[1]) {
          finalResult = [...finalResult, val];
        }
      });
    }
    SetProductData(finalResult);
  };

  const focuseFunction = (e) => {
    if (e.key === "k" && e.altKey) {
      document.getElementById("search").focus();
      return false;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", focuseFunction);
    return () => {
      //document.removeEventListener("keydown", escFunction);
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2 bg-light">
          <h3>Product data</h3>
          <Link to="/productdata/carts" className="nav-link ml-auto">
            Carts : {count}
          </Link>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row my-3">
          <div className="col-4">
            <div style={{ textAlign: "left" }}>
              {brand.map((productdata, i) => (
                <div>
                  <input
                    name="checkbox"
                    type="checkbox"
                    value={productdata}
                    onChange={(e) => handleCheckbox(e, productdata)}
                  />
                  <label className="mx-2">{productdata}</label>
                </div>
              ))}
            </div>
            <div>
              <label className="label"> Price </label>
              <select
                className="select"
                value={select}
                onChange={priceSelectChange}
              >
                <option defaultValue="selected">Select</option>
                <option value="1000-5000">1000-5000</option>
                <option value="6000-10000">6000-10000</option>
                <option value="11000-20000">11000-20000</option>
              </select>
            </div>

            <div className="mt-4">
              <input
                id="search"
                type="text"
                className="select"
                placeholder="Search..   ALT+K"
              />
            </div>
          </div>

          <Context.Provider value={[count, setCount]}>
            <ProductItem productData={productData} />
          </Context.Provider>
        </div>
      </div>
    </>
  );
};

export default ProductData;
