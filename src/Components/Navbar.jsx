import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav>
        <div className=' m-4 border-bottom border-dark red'></div>
          <div className='d-flex gap-5 text-lg justify-content-between'>
        <Link to='/'>App</Link>
        <Link to='/header'>Header</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/footer'>Footer</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/randomnum'>Random Number Generator</Link>
        <Link to='/randomcol'>Random Color Generator</Link>
      </div>
      </nav>
        <div className=' m-4 border-bottom border-dark red'></div>
    </div>
  )
}

export default Navbar
