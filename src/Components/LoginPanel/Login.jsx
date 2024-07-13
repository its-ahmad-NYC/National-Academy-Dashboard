import React from 'react'
import seekoohlogo from '../assets/seekooh.svg'
import hidepic from '../assets/hidepass.svg'
import "./Login.css"
import sect1 from "../assets/loginsectlogo.svg"

function Login({ setlogin }) {
  return (
    <div>
      <div className="main">
        <div className="sect1">
          <img src={sect1} alt="" />
        </div>
        <div className="sect2">
          <div className="title">
            <h1>Welcome Admin!</h1>
            <h3>Sign-in to Continue</h3>
          </div>
          <div className="loginform">
            <form action="">
              <p>Email</p>
              <input type="email" name="email" placeholder='Email' id="" />
              <p>Password</p>
              <div className="password">
                <input type="password" name="password" placeholder='Password' id="" />
              </div>
              <button onClick={() => setlogin(false)}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
