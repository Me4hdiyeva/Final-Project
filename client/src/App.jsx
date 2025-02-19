
import { Route, Routes } from 'react-router'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard'
import BuyCrypto from './pages/BuyCrypto/BuyCrypto'
import Login from './pages/Login/Login'
import { Toaster } from 'react-hot-toast'
import UserNavBar from './layout/Navbar/UserNavBar'
import UserMain from './layout/UserMain'
import Error404 from './pages/Error404'
import AllCoins from './pages/allcoins/AllCoins'
function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buyCrypto" element={<BuyCrypto />} />
          <Route path='/allCoins' element={<AllCoins/>}/>
          {/* <Route path='/allCoins'  element={<AllCoins/>}/> */}

        </Route>

        {
          localStorage.getItem("token") &&
          <Route path='/admin' element={<UserNavBar />}>
            {/* <Route path="/buyCrypto" element={<BuyCrypto />} /> */}
            <Route index element={<UserMain />} />


          </Route>
        }

        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
