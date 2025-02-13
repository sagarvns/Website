import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store/slice/slice";
import toast, { Toaster } from "react-hot-toast";
import ReactImageMagnify from "react-image-magnify";

const View = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const adddata = (item) => {
    dispatch(addToCart(item));
    toast.success("Successfully Add to Cart!");
  };

  const [state, setState] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
      console.log(res.data);

      setState(res.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Toaster />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-8">
            <div
              className="card mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
              style={{ margin: "10px", padding: "30px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <h3
                    className="card-title"
                    style={{ textTransform: "capitalize" }}
                  >
                    {state.category}
                  </h3>
                  <div style={{ width: "300px", paddingLeft: "100px" }}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wrist",
                          isFluidWidth: true,
                          src: state.image,
                        },
                        largeImage: {
                          src: state.image,
                          width: 1200,
                          height: 1800,
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h1 className="card-title"> ${state.price} </h1>
                    <h5 className="card-title">{state.title}</h5>
                    <p className="card-text">{state.description}</p>

                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        adddata(state);
                      }}
                    >
                      {" "}
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
};

export default View;
