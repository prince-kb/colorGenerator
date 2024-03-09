import React, { useState } from 'react'

function RandColGenerator() {
    const num =()=>{
        return Math.floor(Math.random()*255);
    }
    const gg = ()=>{
        setCol(`rgb(${num()},${num()},${num()})`)
    }
    const copier=(e)=>{
        console.log(col)
        navigator.clipboard.writeText(col);
      }
    const [col,setCol]=useState(`rgb(${num()},${num()},${num()})`);
  return (
    <>
      <h3>Random Color</h3>
      <div style = {{display : "flex",justifyContent : "center",alignItems : "center"}}>
      <div style={{backgroundColor : `rgb(${num()},${num()},${num()})`,height : "50px",width : "50vw",margin : "10px"}}></div>
      </div>
      <button onClick={gg}>Generate Random Color</button>
      <button onClick={copier}>Copy Code</button>
    </>
  )
}

export default RandColGenerator
