
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
          <Route path='/allCoins' element={<AllCoins />} />
        </Route>

        <Route path='/dashboard' element={<UserLayout />}>
          <Route index element={<UserMain />} />
        </Route>

        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
