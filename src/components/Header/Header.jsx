import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




export const Header = () => {

  const cardProduct=useSelector((state)=>state.cart)



  
const [cate,setCate]=useState([])

  useEffect(()=>{
    (function (){ 
      axios.get("https://fakestoreapi.com/products/categories") 
      .then((res)=>{
        setCate(res.data)
      })
      })();
  },[])

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about">About</a>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Category
        </a>
        <ul class="dropdown-menu" style={{textTransform:'capitalize'}}>

          {
            cate.map((item,index)=>
              <Link to={`/?cate_name=${item}`}>
              <li key={index}><a class="dropdown-item" href="#">{item}</a></li>
              </Link>
            )
          }
            
          
          
          </ul>
        
      </li>


      <li class="nav-item">
        <a class="nav-link" href="contact">Contact</a>
      </li>
    </ul>

    <Link to="/cart">
            <table style={{ marginRight: "20px" }}>
              <tr>
                <td>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"  fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </td>
                <td>{cardProduct.cartItems.length}</td>

              </tr>
            </table>



          </Link>



  </div>
</nav>
    </>
  )
}
