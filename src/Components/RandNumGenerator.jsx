import React, { useState } from 'react'

function RandGenerator() {
    const randNo=()=>{
        setNo(Math.floor(Math.random()*100) +1);
    }
    const [no,setNo]=useState(Math.floor(Math.random()*100));

  return (
    <div>
        <h2>Random Number = {no}</h2>
        <button onClick={randNo}>Generate Number</button>
    </div>
  )
}

export default RandGenerator
