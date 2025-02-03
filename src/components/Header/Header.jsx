import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




export const Header = () => {

  
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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}
