import React from 'react'
import { useEffect } from 'react';

const Dashboard = () => {
const logout=()=>{
    localStorage.removeItem('token');
}
    useEffect(()=>{
        
    })
  return (
    <div>
      {localStorage.getItem('token') ? 
      <div className="">
      <h1 className="h1">DashBoard</h1> 
        <button onClick={logout}>LOGOUT</button>
        </div>
      : <h1 className='h1'>Login first</h1>}
    </div>
  )
}

export default Dashboard
