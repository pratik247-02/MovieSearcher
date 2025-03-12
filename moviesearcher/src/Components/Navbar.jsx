import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to='/'>MOVIE APP</Link>
        </div>
        <div className='navbar-links'>
            <Link to='/'>Home</Link>
            <Link to='/favs'>Favourites</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
