import React from 'react'
import Logo from './Logo'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export const Navbar = () => {
  const {isAuthenicated, updateAuth} = useAuthContext();

  const handleLogout = () => {
    localStorage.clear();
    updateAuth(false);
  };
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
        <Logo/>
        <div className="collapse navbar-collapse" id="navbarNav">
       <div className="navbar-nav">
        {isAuthenicated ? (
          <>
          <NavLink className='nav-link'  to="/">
        Dashboard
        </NavLink>
        <NavLink className='nav-link'  to="/new">
        New Expense
        </NavLink>
        <NavLink className='nav-link'  to="/reports">
        Reports
        </NavLink>
          </>
        ) : null}

       </div>
        </div>
        <div className="d-flex" role="search">
        {
          !isAuthenicated ? (  
          <>
          <NavLink className='btn btn-sm btn-outline-light' to="/login">Login</NavLink>
          <NavLink className='btn btn-sm btn-outline-light mx-1' to="/register">Register</NavLink>
          </>
        ) : null}
          {
            isAuthenicated ? (
              <>
        <button className='btn btn-sm btn-danger btn-outline-light' onClick={handleLogout}>
        Logout
        </button>
              </>
            ) : null
          }
        <button
        className='navbar-toggler border-none'
        type='button'
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-label='Toggle navigation'
        >
        <FaBars color='white' />
        </button>
        </div>
    </div>
    </nav>
  )
}
