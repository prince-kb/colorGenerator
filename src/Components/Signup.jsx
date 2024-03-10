import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'

function Signup() {

    const [cred,setCred]= useState({name : "",email : "",password : "",cpassword : ""})
    const [credentials,setCredentials] = useState({name : "",email : "",password : ""})
    const onChange=(e)=>{
        setCred({...cred,[e.target.name]:[e.target.value]})
    }

    const submitted=async(e)=>{
        e.preventDefault();
        
        console.log(cred)
        const pass = cred.password.toString();
        const cpass = cred.cpassword.toString();
        if(pass!=cpass){
            console.log("Passwords do not match")
            return;
        };
        const n = cred.name.toString();
        const z = cred.email.toString();
        setCredentials({name :n,email : z,password : pass})
        console.log(credentials)
        try{
            const signup = await fetch("http://localhost:5000/auth/signup",{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(credentials)
        }) 
            const res = await signup.json();
            if(localStorage.getItem('token')){
              localStorage.removeItem('token');
            }
            if(res.status){
                localStorage.setItem('token',res.authToken)
            }
            console.log(res)
            setCred({name : null,email : null,password : null,cpassword : null})
        }
        
        catch(err){
            console.log(err)
        }

    }


  return (
    <div>
        <h1 className='h1'>Signup Page</h1>
            <form onSubmit={submitted}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Enter full name</label>
            <input onChange={onChange} type="textarea" className="form-control" id="name" name="name" value={cred.name} required minLength={3}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input onChange={onChange} type="email" className="form-control" id="email" name="email" value={cred.email} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={onChange} type="password" className="form-control" id="password" name="password" value={cred.password}required minLength={3}/>
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm your password</label>
            <input onChange={onChange} type="password" className="form-control" id="cpassword" name="cpassword" value={cred.cpassword}required minLength={3}/>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form >
    </div>
  )
}

export default Signup
