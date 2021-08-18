import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../pagination";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;
  const startNumber = (page - 1) * limit;
  const [searchData, setSearchData] = useState("");

  const selectedProducts = product.slice(startNumber, startNumber + limit);

  const loadProduct = async () => {
    await axios
      .get(`https://60ff90a3bca46600171cf36d.mockapi.io/api/products`)
      .then((response) => {
        setProduct(response.data);
        setTotalPages(Math.ceil(response.data.length / limit));
      });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  return (
    <>
      <div className="title">
        <p>this the product</p>
      </div>
      <div className="container-fluid">
        <div>
          <label> Price </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="select">select</option>
            <option value="ascending">Low to High</option>
            <option value="descending">High to Low</option>
          </select>
        </div>
      </div>

      <div>
        <label> serach </label>
        <input
          className="mx-1"
          type="text"
          name="search"
          placeholder="search"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      <div className="row">
        {selected === "ascending" &&
          product
            .sort((a, b) => a.price - b.price)
            .map((val) => {
              <div className="col-6 col-md-3 mt-2">
                <div className="card" style={{ width: "18 rem" }}>
                  <img
                    className="cardimg"
                    src={val.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.name}</h5>
                    <p className="card-text">{val.price}</p>
                  </div>
                </div>
              </div>;
            })}

        {selected === "descending" &&
          product
            .sort((a, b) => b.price - a.price)
            .map((val) => {
              <div className="col-6 col-md-3 mt-2">
                <div className="card" style={{ width: "18 rem" }}>
                  <img
                    className="cardimg"
                    src={val.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.name}</h5>
                    <p className="card-text">{val.price}</p>
                  </div>
                </div>
              </div>;
            })}

        {selectedProducts
          .filter((val) => {
            if (searchData === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => (
            <div className="col-6 col-md-3 mt-2">
              <div className="card" style={{ width: "18 rem" }}>
                <img className="cardimg" src={val.image} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  <p className="card-text">{val.price}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <ul class="pagination justify-content-end">
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </ul>
      </div>
    </>
  );
};
export default Product;
