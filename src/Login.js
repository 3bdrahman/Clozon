import React, { useState } from 'react'
import "./Login.css"
import logo from "./imgs/logo.png"
import {Link} from 'react-router-dom'
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=(e)=>{
        e.preventDefault();
    }
    const signUp=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='login'>
    <Link to="/">
    <img className='login__logo' src={logo}/>
    </Link>
    
       <div className='login__form'>
       <h1>Sign in </h1>
       <form>
            <h4>Email address</h4>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <h4>Password</h4>
            <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
            <button className='login__loginButton' onClick={signIn} type='submit'>Login</button>
            
            <p className='login__agreementP'>
            By signing-in you agree to this fake clone of amazon conditions of use & sale.
            Please see out privacy notice, our cookies notice and our ads notice.
        </p>
        <h6>don't have an account ? <button onClick={signUp} className='login__signupButton'>Create your Amazon account</button></h6>
        </form>
      
       </div> 
       
    
           
        
    </div>
  )
}

export default Login