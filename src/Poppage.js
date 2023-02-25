import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Popuppage = (props) => {
const {books, setbooks} = props
const [title, settitle] = useState("")
const navigate = useNavigate();

const sbmt = (e) => {
    e.preventDefault();
    const book = { title };
    settitle("");
    setbooks([...books, book]);
  navigate("/first")
}

return (
    <div className='popp1' >
        <form className='popp2'  onSubmit={sbmt}>
            <input  style={{marginTop:"2vmax"}}  type="text" value={title} placeholder="Title"
             onChange={ (e) => { settitle(e.target.value); }} />
     <Link className='poplink1' to={"/first"}>Back</Link>
     
 <button style={{marginTop:"2vmax"}} >➕ ADD YOUR BOOK  </button>
        </form>
    </div>
)
}

export default Popuppage