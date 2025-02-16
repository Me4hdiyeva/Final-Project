import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Boşluq yoxlaması
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }
  
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            username,
            password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
  
      // Tokeni localStorage-də saxlayırıq
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Login failed. Please check your username and password.');
      console.error(err); // Daha ətraflı məlumat üçün səhvi konsola yazdırırıq
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
