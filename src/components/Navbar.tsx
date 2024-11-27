import React from 'react'
import Logo from './Logo'
import { FaBars } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
        <Logo/>
        <div className="collapse navbar-collapse" id="navbarNav">
       <div className="navbar-nav">
        <a className='nav-link active' aria-current="page" href="#">Home</a>
        <a className='nav-link ' aria-current="page" href="#">Features</a>

       </div>
        </div>
        <div className="d-flex" role="search">
        <button className='btn btn-sm btn-outline-light'>Login</button>
        <button className='btn btn-sm btn-outline-light mx-1'>Logout</button>
        <button
        className='navbar-toggler border-none'
        type='button'
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expande="false"
        aria-label='Toggle navigation'
        >
        <FaBars color='white' />
        </button>
        </div>
    </div>
    </nav>
  )
}
