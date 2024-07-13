import React, { useState } from 'react'
import "./App.css"
import Login from './Components/LoginPanel/Login'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'

function App() {
  const [login, setlogin] = useState(true)
  return (
    <div>
      {login ? <Login setlogin={setlogin} /> : <>
        <Navbar setlogin={setlogin} />
        <Home />
      </>}


    </div>
  )
}

export default App
