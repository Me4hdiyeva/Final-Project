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
        // width: "90%",
        border: "1px solid gray",
        maxWidth: "424px",
        minWidth:"300px",
        borderRadius: "5px",
        display: "flex",
        gap: "120px",
        textWrap: "nowrap",
        justifyContent:"center",
        paddingLeft: "15px",
      }} onClick={handleGoogleLogin}><i style={{
        paddingTop: "5px",
        marginRight:"auto"
      }} className="fa-brands fa-google"></i>
      Google sdscsilə Daxil Ol
      </button>
    </div>
  )
}

export default LoginGoogle
