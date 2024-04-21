import React from 'react'
import { Link } from 'react-router-dom'
import  SearchBar from '../SeachBar/SeachBar'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark p-3 y" data-bs-theme="dark" >
    <div className="container-fluid" >
      <a className="navbar-brand" >Logo</a>
   

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-0 mb-lg-0">
          <li className="nav-item">
            <a aria-current="page" ><Link to="/" className="nav-link active">Home</Link></a>
          </li>
          <li className="nav-item">
            <a>
              <Link to="/PostCreateUpdate" className="nav-link">Crear Posts</Link>
            </a>
          </li>
          
          <li className="nav-item">
            <a >
            <Link to='/PostList' className="nav-link">Listar Posts</Link>
            </a>
          </li>
        </ul>
          <SearchBar/>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
