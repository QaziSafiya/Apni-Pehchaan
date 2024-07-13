import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
    <h1 className="logo">Safiya <span className='dot'>.</span></h1>
      <ul className="nav-list">
        <li className="nav-items">Home</li>
        <li className="nav-items">About</li>
        <li className="nav-items">Skills</li>
        <li className="nav-items">Projects</li>
       
        <li className="nav-items">Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
