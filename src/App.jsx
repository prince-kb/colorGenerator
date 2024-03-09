import { useState } from 'react'
import './App.css'
import { Outlet ,Link} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <h1 className="h1">My Test app</h1>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
