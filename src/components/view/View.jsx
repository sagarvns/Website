import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
  const {id}=useParams()

  const [state,setState]=useState(
    {

                 title:'',
                price:'',
                category:'',
                description:'',
                image:''
})

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/'+id)
    .then((res)=>{
      console.log(res.data);
      
      setState(res.data)
    })
  },[])

  return (
    <>
   
 
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-8">


        <div className="card mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ margin:'10px',padding:'30px'}}>
    <div className="row g-0">


      <div className="col-md-4">
      <h3 className="card-title" style={{textTransform:'capitalize'}}>{state.category}</h3>
       <div style={{width:'300px',paddingLeft:'100px'}}><img src={state.image} className="img-fluid rounded-start" alt="Image" /></div> 
      </div>
      <div className="col-md-10">
        <div className="card-body">
          <h1 className="card-title"> ${state.price} </h1>
          <h5 className="card-title">{state.title}</h5>
          <p className="card-text">
            {state.description}
          </p>
          
        </div>
      </div>


    </div>
  </div>




        </div>
        <div className="col-md-1"></div>
      </div>
    </div>


  
 
</>



   
  )
}

export default View