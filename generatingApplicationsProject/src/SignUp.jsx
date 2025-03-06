import React from 'react'
import { useState } from 'react'
import Login from './Login'
import './styles/signUp.css'
function SignUp() {

    //Create usestates to use for the login and register forms
    const [register, setRegister] = useState(false);
    const handleRegister = () =>{
        setRegister(!register);
    };
  return (
    <div className='container-signup'>
        {/* <img src={formImage} alt='A woman filling a form'/> */}
        {register &&<Login handleRegister={handleRegister}/>} 
        <div className='LoginPage'>
            <div className='entire-form'>
            <h3>Login to Account</h3>
            <form className='login-form'>
                <label className='username-text'>Username</label>
                <input type='text' placeholder='Enter username'className='username-holder'></input>
                <label className='username-text'>Password</label>
                <input type='text' placeholder='Enter password'className='password-holder'></input>
                <button type='button' className='login-button'>Log in</button>
                <p className='password-recover'>Forget password?</p>
                <p className='last-line'>Don't have an account?
                    <span className='register-path' onClick={handleRegister}>Create Account</span>
                    </p>
            </form>   
            </div>
            
        </div>
    </div>
  )
}

export default SignUp