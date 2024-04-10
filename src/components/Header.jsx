import React from 'react'
import Navbar from './Navbar'
import NavLink from './NavLink'

const Header = () => {
  return (
    <div className='header-section z-50'>
      <Navbar/>
      <NavLink/>
    </div>
  )
}

export default Header
