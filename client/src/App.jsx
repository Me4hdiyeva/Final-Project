
import { Route, Routes } from 'react-router'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route index element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/dashboard"  element={<Dashboard/>}/>

        </Route>

      </Routes>
    </>
  )
}

export default App
