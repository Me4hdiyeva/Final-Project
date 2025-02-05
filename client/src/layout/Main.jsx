import React from 'react'
// import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import Navbar from './navbar/Navbar'

const Main = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />

    </>
  )
}

export default Main
