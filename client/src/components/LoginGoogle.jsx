import React from 'react'

const LoginGoogle = () => {
    const handleGoogleLogin = () => {
    window.open("http://localhost:3000/auth/google", "_self");
      };
  return (
    <div>
    <h2>Google ilə daxil ol</h2>
    <button onClick={handleGoogleLogin}>Google ilə Daxil Ol</button>
  </div>
  )
}

export default LoginGoogle
