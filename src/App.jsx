import React, { useState } from 'react'
import "./App.css"
import Login from './Components/LoginPanel/Login'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import AddButton from './Components/AddButton/AddButton'

function App() {
  const [login, setlogin] = useState(true)
  const [sidebar, setsidebar] = useState(true)
  const[addbutton2, setaddbutton2] = useState(false)
  return (
    <div>
      {login ? <Login setlogin={setlogin} /> : <>
      <div className="main-sect">
        
        <div className={`add-btn`}>
          
        <AddButton addbutton2={addbutton2} setaddbutton2={setaddbutton2} />
        </div>
        <div className="nav-home">
        <Navbar sidebar={sidebar} setsidebar={setsidebar} setlogin={setlogin} />
        <Home setaddbutton2={setaddbutton2} sidebar={sidebar} setsidebar={setsidebar} />
        </div>
        </div>
      </>}


    </div>
  )
}

export default App
