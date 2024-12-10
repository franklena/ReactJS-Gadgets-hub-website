import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  const [cpwd, setCpwd] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Email validation function using a regex pattern
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };


  const signup = async () => {
    if (name === "" || mail === "" || pwd === "" || cpwd === "") {
      setError("Please fill all fields");
      return;
    }
    if (pwd !== cpwd) {
      setError("Password doesn't match");
      return;
    }
  
    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email: mail,
        password: pwd
      });
  
      if (response.status === 201) {
        setError('');
        alert('User registered successfully!');
        navigate('/login');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Error: ' + (err.response?.data?.error || err.message));
    }
  };
  

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
              if (!validateEmail(e.target.value)) {
                setError('Please provide a correct email.');
              } else {
                setError('');
              }
            }}
          />
          <input
            type="password"
            placeholder="Create Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={cpwd}
            onChange={(e) => setCpwd(e.target.value)}
          />
          <button type="button" onClick={signup}>Register</button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;