import axios from "axios";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { addToCart } from "../../store/slice/slice";
import toast, { Toaster } from "react-hot-toast";
import { Slider } from "../slider/Slider";
import { Offer } from "../offer/Offer";

export const Dashboard = () => {
  const dispatch = useDispatch();

  const cardAdd = (item) => {
    dispatch(addToCart(item));
    toast.success("Successfully Add to Cart!");
  };

  const [searchPrams] = useSearchParams();
  const query = searchPrams.get("cate_name");

  const [state, setState] = useState([]);
  const [cat, setCate] = useState([]);

  const showCatagory = () => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCate(res.data);
    });
  };

  const getelementbycategory = (item) => {
    axios
      .get("https://fakestoreapi.com/products/category/" + item)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      });
  };

  useEffect(() => {
    if (query == undefined) {
      (function () {
        axios.get("https://fakestoreapi.com/products").then((res) => {
          setState(res.data);
        });

        showCatagory();
      })();
    } else {
      (function () {
        axios.get("https://fakestoreapi.com/products").then((res) => {
          setState(res.data);
        });

        showCatagory();
      });

      getelementbycategory(query);
    }
  }, [query]);

  return (
    <div className="contanier-fuid">
      <div className="row">
        <Slider />
      </div>
      <Toaster />
      <div className="row">
        <div className="col-md-3">
          <div
            class="card shadow-lg p-3 mb-5 bg-body rounded"
            style={{
              width: " 18rem",
              margin: "20px",
              textTransform: "capitalize",
            }}
          >
            <div class="card-header">Specific Category</div>
            <ul class="list-group list-group-flush">
              {cat.map((item, index) => (
                <li
                  key={index}
                  class="list-group-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    getelementbycategory(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-9">
          {query}
          <div className="row">
            {state.map((item, index) => (
              <div
                key={index}
                class="card shadow p-3 mb-5 bg-body rounded"
                style={{
                  width: "18rem",
                  margin: "5px",
                  textTransform: "capitalize",
                }}
              >
                <img
                  src={item.image}
                  class="card-img-top"
                  alt="..."
                  height={"200px"}
                />
                <div class="card-body">
                  <h4 class="card-title">{item.title.substring(1, 20)}</h4>
                  <h1 class="card-title">${item.price}</h1>
                  <p class="card-text">{item.description.substring(1, 90)}</p>
                  <div class="d-flex justify-content-between">
                    <a
                      href="#"
                      class="btn btn-success"
                      onClick={() => {
                        cardAdd(item);
                      }}
                    >
                      Add To Cart
                    </a>
                    <Link to={`/view/${item.id}`} class="btn btn-danger">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container">
          <Offer />
        </div>
      </div>
    </div>
  );
};
