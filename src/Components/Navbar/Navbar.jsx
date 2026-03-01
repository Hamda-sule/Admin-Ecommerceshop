import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/logo.png'


export const Navbar = () => {
  return (
    <div className="navbar">
     <img src={nav_logo} alt="" className="nav-logo" />
     
    </div>
  )
}
export default Navbar