import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav>
      <ul>
        <Link to='/'><h2>App</h2></Link>
        <Link to='/header'><h2>Header</h2></Link>
        <Link to='/about'><h2>About</h2></Link>
        <Link to='/contact'><h2>Contact</h2></Link>
        <Link to='/footer'><h2>Footer</h2></Link>
        <Link to='/randomnum'><h3>Random Number Generator</h3></Link>
        <Link to='/randomcol'><h3>Random Color Generator</h3></Link>
      </ul>
      </nav>
      <h2>--------------------------------------------------------</h2>
    </div>
  )
}

export default Navbar
