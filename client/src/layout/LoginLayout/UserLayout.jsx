import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import UserNavBar from '../Navbar/UserNavBar'
import Footer from '../Footer/Footer'
import { verifyToken } from '../../services/api'

const UserLayout = () => {
  const navigate = useNavigate()
  const token = window.location.search.split("=").at(-1)
  const localToken = localStorage.getItem("token")
  const [status, setStatus] = useState(false)
  useEffect(() => {
    yonlendir()
  }, [])

  async function yonlendir() {
    if (token) {
      localStorage.setItem("token", token)
      navigate("/dashboard")
    }

    if (token || localToken) {
      localStorage.setItem("token", token)
      const verify = await verifyToken()
      if (!verify.status) navigate("/login")
      setStatus(verify.status)
      localStorage.setItem("username", verify.username)
      localStorage.setItem("userid", verify.user_id)
    } else {
      navigate("/login")
    }
  }
  if (status) {
    return (
      <>
        <UserNavBar />
        <Outlet />
        <Footer />

      </>
    )
  }
}

export default UserLayout
