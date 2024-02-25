import React, {useState} from 'react'
// import Display from './Display';
import { useCart, useSearch } from './States';
import { Link } from 'react-router-dom';
// import Sidebar from './Sidebar'

export default function Navbar() {
  const [searchtermNav, setSearchTerm] = useState('');
  // const [searchresult, setSearchResult] = useState("");
  const { cart} = useCart();
  const {setSearchTermState} = useSearch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searched Item: ", searchtermNav);
    // setSearchResult(searchtermNav);
    setSearchTermState(searchtermNav);
  } 

  return (
    <>
        {/* <Sidebar/> */}
      <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <div>
      <button className="mx-2 navbar-toggler btn-sm" type="button" data-bs-toggle="offcanvas" style={{border: "1px solid #ffc107"}} data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button> 
    <Link   className="navbar-brand" to='/main'>Shopex</Link >
    </div>
    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{width: "15rem"}}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Shopex</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
          <li className="nav-item dropdown">
            <Link   className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</Link >
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link   className="dropdown-item" to="/mens_wear">Men's Wear</Link ></li>
              <li><Link   className="dropdown-item" to="/womens_wear">Women's Wear</Link ></li>
              <li><Link   className="dropdown-item" to="/kids_collection">Kids Collection</Link ></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link   className="nav-link dropdown-toggle" to="/account" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</Link >
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link   className="dropdown-item" to="/profile">Profile</Link ></li>
              <li><Link   className="dropdown-item" to="/loginPage">Log Out</Link ></li>
              <li><Link   className="dropdown-item" to="/Settings">Change Password</Link ></li>
              
            </ul>
          </li>
          <hr/>
              <li><Link   className="dropdown-item" to="/cart">Cart: {cart}</Link ></li>
        </ul>
      </div>
    </div>
    <form className="d-flex" role="search" value = {searchtermNav} onSubmit={handleSubmit} onChange={handleChange}>
      <input className="form-control me-2" style={{border: "1px solid #ffc107"}}   type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-warning btn-dark" type="submit" >Search</button>
      
    </form>
  </div>
</nav>
 
    </>
  )
}
