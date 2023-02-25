import React from 'react'
import { Link} from "react-router-dom";
import frontbook from './Asset/frontbook.png'
import './App.css'

const Mainpage = () => {
  

// const click =(e)=>{
// e.preventDefault();

// }

  return (
    <div className='main1'>
    <div className='main2'>
      <img style={{width:"8vmax"}} src={frontbook} alt="" />
      <h1>Add your first book to get started</h1>
      <p>Setup your business by adding 'new books'..</p>
      <button> <Link className='link1' to={"/popup"}> ADD FIRST BOOK </Link></button>
      <button> <Link className='link1' to={"/first"}> YOUR BOOKS </Link></button>
    </div>
    </div>
  )
}

export default Mainpage