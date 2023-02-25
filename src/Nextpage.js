import React from 'react'
import { Link, Outlet, useParams } from "react-router-dom";


const Nextpage = () => {
  const params = useParams();
  
  return (
    <div className='next1'>
      <div className='next2'>
      <Link className='link' to="/first">Back</Link>
        <h1>Welcome back   {params.name} </h1>
        <p>Add your expenditure</p>
        <div className='next3'>
        <button className='btn1'> <Link className='nextlink' to={"/next/detail"}>Cash In </Link>  </button> <button className='btn2'>  <Link className= "nextlink"to={"/next/detail1"}> Cash out  </Link> </button>
        </div>
        <Outlet/>
    </div>
    </div>
  )
}

export default Nextpage