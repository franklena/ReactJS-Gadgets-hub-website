import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const Login = ({ onLoginSuccess, onLoginFailure }) => {
  const [name, setName] = useState(''); 
  const [pwd, setPwd] = useState(''); 
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login
  const login = async () => {
    // Check if all fields are filled
    if (name === "" || pwd === "") {
      setError("Please fill all fields");
      return;
    }
  
    try {
      // Make POST request to backend API
      const response = await axios.post('http://localhost:5000/login', {
        name,  
        password: pwd
      });

      // Show success message
      setError(response.data.message);
      
      // If login is successful, navigate to the home page
      if (response.status === 200) {
        onLoginSuccess();
        navigate('/navbar'); 
      }
    } catch (err) {
      // Handle errors and display error message
      setError('Error: ' + (err.response?.data?.error || err.message));
      onLoginFailure(); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required 
          />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" className='remember' /> Remember me
            </label>
          </div>
          <button type="button" onClick={login} className="login-btn">Login</button>

          {error && <p className="error-message">{error}</p>}
        </form>
        <p className='dont'>
          Don't have an account?{' '}
          <span onClick={() => navigate('/register')} className="register-link">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
