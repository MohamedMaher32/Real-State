import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../Image/logo.png"
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow position-sticky top-0">
        <div className="container">
          <Link to='/' className="navbar-brand" ><img src={Logo} alt="logo"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/properties' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/projects' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/blog' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <button className='btn rounded-2 d-none d-lg-block'>Submit Property</button>
        </div>
      </nav>
    </>
  )
}
