import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import { toggleNav } from '../Redux/storeSlice'

const Navbar = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const openNav = useSelector(state => state.openNav)
  return (
    <div className={`navbar container-fluid ${location.pathname !== "/" && 'not-home'}`}>
        <div className='nav-container container'> 
            <div className="logo">
                <h1>Vicky Kumar</h1>
            </div>
            <div className={`nav ${openNav && 'active'}`}>
                <i class="fa-solid fa-xmark" onClick={() => dispatch(toggleNav())}></i>
                <div className="menu">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/"}>Service</Link></li>
                        <li><Link to={"/"}>About</Link></li>
                        <li><Link to={"/"}>Reviews</Link></li>
                        <li><Link to={"/"}>Why Us</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="icon">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            <i className="fa-solid fa-bars bar" onClick={() => dispatch(toggleNav())}></i>
        </div>
    </div>
  )
}

export default Navbar
