import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import "./Register.css";
import auth from "../../firebase.init";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }


    if(user){
        navigate('/');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your password did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters of longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

  return (
    <div className="input-container">
      <div className="input-area">
        <form onSubmit={handleCreateUser}>
          <h3>Please Sign up</h3>

          <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder="Email" required />

          <input
          onBlur={handlePasswordBlur}
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />

          <input
          onBlur={handleConfirmPasswordBlur}
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            required
          />
            <p style={{color:'red'}}>{error}</p>
          <button>Sign up</button>
        </form>

        <p className="google-link m-4">
        Already have an Account?
          <Link to="/login">Please Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
