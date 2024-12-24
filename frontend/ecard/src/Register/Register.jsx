import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        if(re.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    const validatePassword = (password, confirmPassword) =>{
        if(password === confirmPassword){
            return true;
        }else if(password.length < 8){
            alert('Password is too short');
            return false;
        }
        else{
            alert('Passwords do not match');
            return false;
        }
    }
    const submitForm = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            alert('Email is not valid');
            return;
        }
        if (!validatePassword(password, confirmPassword)){
            return;
        }
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    }


    return (
        <div className='register'>
            <h1>Register</h1>
            <form onSubmit={submitForm} className='register-form'>
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" />
                <input 
                    type="email"
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Email" />
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" />
                <input 
                    type="password"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password" />
                <button type="submit">Register</button>
            </form>
            <div className="already-acc">
                <a href="/login">Already have an account? </a>
            </div>
        </div>
    );
};

export default Register;