import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Details = (props) => {

const [amount, setamount] = useState("");
const [desc, setdesc] = useState("")
const {tasks, settasks} = props

const sbmt1 = (e)=>{
e.preventDefault();
let task = ({amount,desc});
console.log({amount,desc})
setamount("");
setdesc("");
settasks([...tasks,task])
}

const taskdelete = (i) => {
  const copytask = [...tasks];
  copytask.splice(i, 1);
  settasks(copytask);

}


let tasklist = <h1>No data found!</h1>
if (tasks.length>0) {
  tasklist = tasks.map((task,id)=>{
    return <li style={{backgroundColor:"white"}} key={id}>{task.amount}- {""}-{task.desc}     
    <span style={{color:"green", marginLeft:"5vmax"}}>Cash</span>
   <span style={{marginLeft:"7vmax"}} onClick={() => { taskdelete(id) }}>❌</span>
   <span > <Link style={{textDecoration:"none"}} to={"/next/detail/dets"}>  ✏️ </Link></span>
    </li> 
  })
}

  return (
    <div className='details1' style={{marginTop:"5vmax"}}>
       <form className='details2'  onSubmit={sbmt1}>
        <input type="text" placeholder='Amount' value={amount}
         onChange={(e)=>{setamount(e.target.value)}} />
        <input type="text" placeholder='Description' value={desc} 
        onChange={(e)=>{setdesc(e.target.value)}}  />
        <button>Save</button>
       </form>

<hr />
<ol className='list-group'>
  {tasklist}
</ol>
<Outlet/>
    </div>
  )
}

export default Details