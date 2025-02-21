import React from 'react'

const LoginGoogle = () => {
  const handleGoogleLogin = () => {
    window.open("http://localhost:3000/api/auth/google", "_self");
  };
  return (
    <div>
      <h2 className='text-center'>Google ilə daxil ol</h2>
      <button style={{
        padding: "10px",
        width: "90%",
        border: "1px solid gray",
        maxWidth: "424px",
        borderRadius: "5px",
        display: "flex",
        gap: "120px",
        paddingLeft: "15px",
      }} onClick={handleGoogleLogin}><i style={{
        paddingTop: "5px"
      }} className="fa-brands fa-google"></i>Google sdscsilə Daxil Ol</button>
    </div>
  )
}

export default LoginGoogle
