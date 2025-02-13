import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";


export const Data = () => {
  const { id } = useParams();

  const [state, setState] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    category: "",
    brand: "",
  });
  useEffect(() => {
    axios.get("https://dummyjson.com/products/" + id).then((res) => {
      setState(res.data);
    });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
  <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "800px" }}>
    <h1 className="card-title" style={{textTransform:'capitalize'}}>{state.category}</h1>
    <div  className="card-img-top" style={{width: "300px", borderRadius: "10px", margin: "0 auto" }}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Card image cap",
                          isFluidWidth: true,
                          src: state.thumbnail,
                        },
                        largeImage: {
                          src: state.thumbnail,
                          width: 1200,
                          height: 1800,
                        },
                      }}
                    />
                  </div>
    <div className="card-body">
      <h1 className="card-title"> Price: $ {state.price}</h1>
      <h3 className="card-title">{state.title}</h3>
      <p className="card-text">Description: {state.description}</p>
    </div>
    <h3 className="card-title"> Brand: {state.brand}</h3>
  </div>
</div>


      
    </>
  );
};
