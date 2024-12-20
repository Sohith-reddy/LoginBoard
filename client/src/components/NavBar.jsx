import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
      <>
          <header>
              <div className='container'>
                  <div className='logo'>
                      <NavLink to='/'>Demo Practice</NavLink>
                  </div>
              </div>
              <nav>
                  <ul>
                      <li><NavLink to='/'>Home</NavLink></li>
                      <li><NavLink to='/about'>About</NavLink></li>
                      <li><NavLink to='/contact'>Contact</NavLink></li>
                      <li><NavLink to='/login'>Login</NavLink></li>
                      <li><NavLink to='/signup'>SignUp</NavLink></li>
                  </ul>
              </nav>
          </header>
      </>
  )
}

export default NavBar