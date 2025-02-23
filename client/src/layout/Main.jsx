import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
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
