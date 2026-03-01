import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product from '../../assets/cart_icon.png'

export const Sidebar = () => {
  return (
   <div className="sidebar">
    <Link to={'/addproduct'} style={{textDecoration:"naone"}}>
    <div className="sidebar-item">
        <img src={add_product} alt="" />
        <p>Add Product</p>
    </div>
    </Link>
    <Link to={'/listproduct'} style={{textDecoration:"naone"}}>
    <div className="sidebar-item">
        <img src={add_product} alt="" />
        <p>Product List</p>
    </div>
    </Link>
     
   </div>
  )
}
export default Sidebar
