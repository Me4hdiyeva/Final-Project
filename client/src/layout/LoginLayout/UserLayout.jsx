import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import UserNavBar from '../Navbar/UserNavBar'

const Main = () => {
  return (
    <>
      <UserNavBar/>
      <Outlet />
      <Footer />

    </>
  )
}

export default Main
