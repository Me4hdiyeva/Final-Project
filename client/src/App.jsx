
import { Route, Routes } from 'react-router'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import BuyCrypto from './pages/BuyCrypto/BuyCrypto'
import Login from './pages/Login/Login'
import { Toaster } from 'react-hot-toast'
import UserMain from './layout/UserMain'
import Error404 from './pages/Error404'
import AllCoins from './pages/allcoins/AllCoins'
import UserLayout from './layout/LoginLayout/UserLayout'
import Payment from './pages/payment/Payment'
import Auth from './layout/Auth'
import Earn from './pages/earn/Earn'
import About from './pages/about/About'
import Settings from './pages/settings/Settings'
import Grafic from "./pages/grafics/Grafics"
function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/buyCrypto" element={<BuyCrypto />} />
          <Route path='/grafic' element={<Grafic/>} />
          <Route path="/earn" element={<Earn />} />
          <Route path='/about' element={<About/>} />
          <Route path='/allCoins'  element={<AllCoins/>}/>
          <Route path='/allCoins' element={<AllCoins />} />
        </Route>

        <Route path='/dashboard' element={<Auth><UserLayout /></Auth>} >
          <Route index element={<UserMain />} />

          <Route path='payment' element={<Payment />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
