import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom'


export const Dashboard = () => {

  const [searchPrams]=useSearchParams();
  const query=searchPrams.get('cate_name');



  const [state, setState] = useState([]);
  const [cat,setCate]=useState([]);





const showCatagory=()=>{
  axios.get("https://fakestoreapi.com/products/categories")
  .then((res)=>{
    setCate(res.data)
  })
}




const getelementbycategory=(item)=>{
  axios.get("https://fakestoreapi.com/products/category/"+item)
  .then((res)=>{
    console.log(res.data)
    setState(res.data)
  })


}


  useEffect(() => {

    if(query==undefined){

    
    (function () {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setState(res.data);
      });

      showCatagory();

    })();
  }

  else{

    (function () {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setState(res.data);
      });

      showCatagory();

    })

    getelementbycategory(query)

  }
}
, [query]);



  return (
    <div className="contanier-fuid">
      <div className="row">
        <div className="col-md-3">
          <div class="card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: " 18rem", margin: "20px",textTransform:'capitalize'}}>
            <div class="card-header">Specific Category</div>
            <ul class="list-group list-group-flush">
              {
                cat.map((item,index)=>
                  <li key={index} class="list-group-item" style={{cursor:'pointer'}} onClick={()=>{getelementbycategory(item)}} >{item}</li>
                
                )
              }
             
              
            </ul>
          </div>
        </div>

        <div className="col-md-9">
          {
            query
          }
        <div className="row">
          {
            state.map((item,index)=>

             
            <div key={index} class="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem",margin:"5px",textTransform:'capitalize' }}>
              <img src={item.image} class="card-img-top" alt="..." height={'200px'}/>
              <div class="card-body">
                <h4 class="card-title">{item.title.substring(1, 20)}</h4>
                <h1 class="card-title">${item.price}</h1>
                <p class="card-text">
                  {item.description.substring(1, 90)}
                </p>
                    <div class="d-flex justify-content-between">
                     <a href="#" class="btn btn-success">Add To Cart</a>
                     <Link to={`/view/${item.id}`} class="btn btn-danger">View</Link>
                  </div>
                
                
              </div>
            </div>
         
            
            
            
            )
          }

          
           </div>
        </div>
      </div>
    </div>
  );
};
