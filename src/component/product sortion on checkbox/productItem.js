import React, { useState, useContext } from "react";
import { Context } from "./context";

const ProductItem = ({ productData }) => {
  const [count, setCount] = useContext(Context);
  const [cart, setCart] = useState([]);
  const [cartCheck, setCartCheck] = useState([]);

  /// add to cart data & increment or decrement the count variable using the checkbox is selectd or not ///
  const addToCart = (e, item) => {
    let hardCopy = [...cart];

    if (e.target.checked) {
      hardCopy = [...hardCopy, item];
    } else {
      hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    }
    console.log(hardCopy);
    setCart(hardCopy);
    setCount(hardCopy.length); // set the count varibel and that affect into p
  };

  return (
    <>
      <div className="col-8 ">
        <div className="row">
          {productData.length <= 0 ? (
            <span> no data is availbale </span>
          ) : (
            productData.map((val, i) => (
              <div className="col-4 mt-2">
                <div className="card">
                  <img
                    className="cardimg"
                    src={val.image}
                    style={{
                      width: "auto",
                      height: "200px",
                      maxHeight: "200px",
                    }}
                    alt="card-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.brande}</h5>
                    <h4 className="card-text">MRP:-{val.MRP}</h4>
                    <input
                      name="checkbox"
                      type="checkbox"
                      value={cartCheck}
                      onChange={(e) => addToCart(e, val)}
                    />
                    <span className="mx-1">Add To Cart</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
