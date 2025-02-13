import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { data, Link } from "react-router-dom";
export const About = () => {
  const [state, setState] = useState([]);

  const showData = async () => {
    const res = await axios.get("https://dummyjson.com/carts");
    setState(res.data.carts);
    console.log(res.data.carts);
    
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <>

<div className="container mt-5">
  <div className="row justify-content-center">
    {state.length > 0 ? (
      state.map((cart, index) => (
        <div key={index} className="col-md-4 d-flex justify-content-center">
          <div className="card shadow-lg rounded text-center p-3" style={{ width: "20rem",margin:"5px" }}>
            <div className="card-body">
              <h2 className="card-title text-primary">Cart ID: {cart.id}</h2>
              <p className="card-text fw-bold">Total Items: {cart.totalProducts}</p>
              <p className="card-text text-danger">Total Price: ${cart.total}</p>
              <p className="card-text">Total Quantity: {cart.totalQuantity}</p>
              <Link to={`/data/${cart.id}`} className="btn btn-outline-success mt-2">
                View Item
              </Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center fs-4 text-muted">Loading...</p>
    )}
  </div>
</div>;

    </>
  );
};
