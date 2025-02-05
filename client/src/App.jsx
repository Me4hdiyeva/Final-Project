
import { Route, Routes } from 'react-router'
import './App.css'
import Main from './layout/Main'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route />

        </Route>

      </Routes>
    </>
  )
}

export default App
