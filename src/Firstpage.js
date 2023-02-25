import React from 'react';
import{ Link,Outlet} from 'react-router-dom'





const Firstpage = (props) => {


    const  { books, setbooks } = props;

    const bookdelete = (i) => {
        const copybook = [...books];
        copybook.splice(i, 1);
        setbooks(copybook);
    }

    let booklist = <h1>No Book found!</h1>;
    if (books.length > 0) {
        booklist = books.map((book, indx) => {
            return (
 
  <li class="list-group-item  key={indx}">
  {book.title} 
   <span className='cross' onClick={(indx) => { bookdelete(indx) }}>❌</span>
  </li>
   )
    })
}
    return (
        <div className='first1'>
       
        <div className='first2' >
       <Link className='firstlink1' to={"/popup"}>Back</Link>
       <button className='btn3' ><Link className='firstlink2' to={"/first/pop"}> ➕ ADD MORE BOOKS </Link> </button>
       <Link className='firstlink' to={"/next"}> {booklist} </Link>
       </div>
       <Outlet/>
       </div>
    )
}
export default Firstpage