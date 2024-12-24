import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        if(re.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            alert('Email is not valid');
            return;
        }
        if (password.length < 8) {
            alert('Password is too short');
            return;
        }
        console.log('Email:', email);
        console.log('Password', password);
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submitForm} className='login-form'>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
       
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    
                />
                <button type="submit" className='login-form-btn'>Login</button>
            </form>
            <div className="no-acc">
                <a href="/register">Don't have an account?</a>
            </div>
        </div>
    );
}

export default Login;
