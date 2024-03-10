import React ,{useState}from 'react' 

function Login() {

    const [cred,setCred] = useState({email : "",password : ""})

    const submitted=async (e)=>{
        e.preventDefault();
        try{
            const login = await fetch("http://localhost:5000/auth/login",{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(cred)
        }) 
            const res = await login.json();
            if(res.status){
                localStorage.setItem('token',res.authToken)
            }
        }
        catch(err){
            console.log(err)
        }
        
    }

    const onChange=(e)=>{
        setCred({...cred,[e.target.name]:[e.target.value]})
    }
  return (
    <div>
        <h1 className='h1'>Login Page</h1>
            <form onSubmit={submitted}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={onChange} type="email" className="form-control" id="email" name="email" value={cred.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={onChange} type="password" className="form-control" id="password" name="password" value={cred.password}/>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form >
    </div>
  )
}

export default Login
