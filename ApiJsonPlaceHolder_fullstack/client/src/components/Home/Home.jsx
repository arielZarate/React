import React from 'react'
import Navbar from '../NavBar/Navbar'
import { Link, NavLink } from 'react-router-dom'
import style from  './Home.module.css'

function Home() {
  return (
    <main className={style.imagen}>
     <Navbar/>

      <div  className='d-flex align-items-md-center justify-content-center  mt-5'>
      <Link to='/PostList'>
     <button className='btn btn-warning btn-lg'>Ingresar</button>
     </Link>
      </div>
    
    </main>
  )
}

export default Home;
