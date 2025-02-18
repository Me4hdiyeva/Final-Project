import React from 'react'

const LoginGoogle = () => {
    const handleGoogleLogin = () => {
    window.open("http://localhost:3000/auth/google", "_self");
      };
  return (
    <div>
    {/* <h2>Google ilə daxil ol</h2> */}
    <button style={{
      padding:"10px",
      width:"90%",
      border:"1px solid gray",
      maxWidth:"424px",
      borderRadius:"5px",
      display:"flex",
      gap:"120px",
      paddingLeft:"15px",

      // justifyContent:"space-between"
   

    }} onClick={handleGoogleLogin}><i style={{
      paddingTop:"5px"
    }} class="fa-brands fa-google"></i>Google ilə Daxil Ol</button>
  </div>
  )
}

export default LoginGoogle
