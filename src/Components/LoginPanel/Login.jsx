import React from 'react'
import seekoohlogo from '../assets/seekooh.svg'
import hidepic from '../assets/hidepass.svg'
import "./Login.css"
import sect1 from "../assets/NA.png"
import mobilelogo from "../assets/MobNA.png"

function Login({ setlogin }) {
  return (
    <div>
      <div className="main">
        <div className="sect1-mobile">
          <img src={mobilelogo} alt="" />
        </div>
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
              <div className="input-field">
              <p>Email</p>
              <input type="email" name="email" placeholder='Email' id="" />
              </div>
              <div className="input-field">
              <p>Password</p>
              <div className="password">
                <input type="password" name="password" placeholder='Password' id="" />
              </div>
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
