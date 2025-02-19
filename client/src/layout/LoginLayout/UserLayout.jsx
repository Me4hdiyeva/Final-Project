import { Outlet } from "react-router"
import Footer from "../Footer/Footer"
import UserNavBar from "../Navbar/UserNavBar"

const UserLayout = () => {
  return (
    <>
      <UserNavBar />
      <Outlet  />
      <Footer />
    </>
  )
}

export default UserLayout
