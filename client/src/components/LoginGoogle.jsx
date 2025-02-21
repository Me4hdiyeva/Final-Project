import React from 'react'
import "../../src/index.css"

const LoginGoogle = () => {
  const handleGoogleLogin = () => {
    window.open("http://localhost:3000/api/auth/google", "_self");
  };
  return (
    <div>
      {/* <h2 className='text-center'>Google ilə daxil ol</h2> */}
      <button className='text-center'  style={{
        padding: "10px",
        // width: "85%",
        // border: "1px solid gray",
        maxWidth: "424px",
        borderRadius: "5px",
        display: "flex",
        gap: "120px",
        paddingLeft: "25px",
        marginLeft:"90px"
      }} onClick={handleGoogleLogin}><i style={{
        paddingTop: "5px"
      }} className="fa-brands fa-google"></i>Google ilə daxil ol</button>
    </div>
  )
}

export default LoginGoogle
