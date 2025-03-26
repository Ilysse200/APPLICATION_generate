import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import './styles/signUp.css';

function SignUp() {
    const [register, setRegister] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        setRegister(!register);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5009/users/login', {
                name,
                password
            });

            if (response.data.success) {
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                
                // Show success message
                setSuccessMessage(true);
                
                // Auto-close popup & navigate to welcome after 3s
                setTimeout(() => {
                    setSuccessMessage(false);
                    navigate('/welcome');
                }, 3000);
            } else {
                setErrorMessage('Login failed: Invalid credentials.');
            }
        } catch (error) {
            setErrorMessage('Login failed: Please check your details.');
        }
    };

    return (
        <div className='container-signup'>
            {register && <Login handleRegister={handleRegister} />}

            {/* Error Box */}
            {errorMessage && (
                <div className='error-box'>
                    <span className='error-text'>{errorMessage}</span>
                    <button className='close-btn' onClick={() => setErrorMessage('')}>❌</button>
                </div>
            )}

            {/* Success Pop-up Message */}
            {successMessage && (
                <div className="success-popup">
                    <div className="success-content">
                        ✅ Login Successful
                        <button className="close-btn" onClick={() => setSuccessMessage(false)}>✖</button>
                    </div>
                    <div className="success-timer"></div>
                </div>
            )}

            <div className='LoginPage'>
                <div className='entire-form'>
                    <h3>Login to Account</h3>
                    <form className='login-form' onSubmit={(e) => e.preventDefault()}>
                        <label className='username-text'>Username</label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='username-holder'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label className='username-text'>Password</label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='password-holder'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type='button' className='login-button' onClick={handleLogin}>
                            Log in
                        </button>
                        <p className='password-recover'>Forget password?</p>
                        <p className='last-line'>
                            Don't have an account?
                            <span className='register-path' onClick={handleRegister}>Create Account</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
