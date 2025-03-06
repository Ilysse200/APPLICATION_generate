import React from 'react'
import './styles/login.css'
function Login({handleRegister}) {
    // // create usestates that will send you back to the login/register forms

    // const[isLogin, setIsLogin] = useState(false);
    // const handleLogin = () => {
    //     setIsLogin(!isLogin);
    // }
  return (
    <div className='container-register'>     
        <div className='LoginPage'>
            <div className='entire-form'>
            <h3>Register Account</h3>
            {/* {isLogin && <SignUp handleLogin={handleLogin}/>} */}
            <form className='register-form'>
                <label className='username-text'>Username</label>
                <input type='text' placeholder='Enter username'className='username-holder'></input>
                <label className='username-text'>Password</label>
                <input type='text' placeholder='Enter password'className='password-holder'></input>
                <button type='button' className='register-button'>Create Account</button>
                <p className='password-recover'>Forget password?</p>
                <p className='last-line'>Already have an account?
                    <span className='register-path' onClick={handleRegister}>Login</span>
                    </p>
            </form>   
            </div>
            
        </div>
    </div>
  )
}

export default Login