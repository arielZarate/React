
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import { searchPosts } from '../../Redux/action';


function SeachBar() {
  
const [search,setSearch]=useState("");
const dispatch=useDispatch();

const handlerSubmit=(e)=>{
e.preventDefault();
dispatch(searchPosts(search));

//setSearch("");

}



const handlerSearch=(e)=>{
  console.log(e.target.value)
setSearch(e.target.value)

}

  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <form className="d-flex" onSubmit={(e)=>handlerSubmit(e)}  >
        <input className="form-control me-2" type="text" placeholder="Search"  value={search} onChange={(e)=>handlerSearch(e)} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default SeachBar
