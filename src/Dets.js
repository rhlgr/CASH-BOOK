import React, { useState } from 'react'


const Details = (props) => {

const [amount, setamount] = useState("");
const [desc, setdesc] = useState("")
const {tasks, settasks} = props

const sbmt2 = (e)=>{
e.preventDefault();
let task = ({amount,desc});
let copytask = [...tasks,task]
copytask.push();
settasks(copytask)
console.log({amount,desc})
setamount("");
setdesc("");
}


let tasklist = []
if (tasks.length>0) {
  tasklist = tasks.map((task,id)=>{
return <li key={id}>{task.amount}- {""}-{task.desc}     
   </li> 
  })
}

  return (
    <div className='details1' style={{marginTop:"5vmax"}}>
       <form className='details2'  onSubmit={sbmt2}>
        <input type="text" placeholder='Amount' value={amount}
         onChange={(e)=>{setamount(e.target.value)}} />
        <input type="text" placeholder='Description' value={desc} 
        onChange={(e)=>{setdesc(e.target.value)}}  />
        <button>Save</button>
       </form>

<hr />

    </div>
  )
}

export default Details