
import { Route, Routes } from 'react-router'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard'
import BuyCrypto from './pages/BuyCrypto/BuyCrypto'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />

        <Route path='/' element={<Main/>}>
          <Route index element={<Home/>} />
          <Route path="/dashboard"  element={<Dashboard/>}/>
          <Route path="/buyCrypto"  element={<BuyCrypto/>}/>





        </Route>

      </Routes>
    </>
  )
}

export default App
