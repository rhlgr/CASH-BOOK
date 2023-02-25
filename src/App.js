import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Firstpage from './Firstpage'
import Mainpage from './Mainpage'
import Popuppage from './Popuppage'
import Poppage from './Poppage'
import Frontpage from './Frontpage'
import Details from './Details'
import Details1 from './Details1'
import Dets from './Dets'
import { useState } from 'react'
import Nextpage from './Nextpage'

const App = () => {

const [books, setbooks] = useState([])
const [tasks, settasks] = useState([])
const [asks, setasks] = useState([])
  return (
    <div>
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/popup' element={<Popuppage  books={books} setbooks={setbooks} />}/>
      <Route path='/front' element={<Frontpage />}/>
      <Route path='/first' element={<Firstpage  books={books} setbooks={setbooks} />} >
      <Route path="/first/pop" element={<Poppage  books={books} setbooks={setbooks} />} />
        
         </Route>
      <Route path="/next" element={<Nextpage/>} >
      
      <Route path="/next/detail" element={<Details  tasks={tasks} settasks={settasks}  />} >
      <Route path="/next/detail/dets" element={<Dets tasks={tasks} settasks={settasks}  />} />
         </Route>
      <Route path="/next/detail1" element={<Details1  asks={asks} setasks={setasks}  />} >
      <Route path="/next/detail1/dets" element={<Dets  asks={tasks} setasks={setasks}  />} />
        
         </Route>
      </Route>
       
   </Routes>
    </div>
  )
}

export default App