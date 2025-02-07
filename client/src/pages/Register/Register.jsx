import React from 'react'
 import './Register.css'
import LoginGoogle from '../../components/LoginGoogle'

const Register = () => {
  return (
    <>
<div className='register'>
    <input type="text" placeholder='Name' />
    <input type="text"  placeholder='Username'/>
    <input type="email"  placeholder='Email'/>
    <input type="password"  placeholder='Password'/>
    <input type="password"  placeholder='Confirm Password'/>
    <input type="file" />
    <LoginGoogle />
    <button>Register</button>





</div>


    </>
  )
}

export default Register
