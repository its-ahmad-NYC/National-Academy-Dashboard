import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo1.svg"
import logout from "../assets/logout.svg"
import dashboard from "../assets/dashboard.svg"
import user from "../assets/user.svg"
import verification from "../assets/verification.svg"
import category from "../assets/category.svg"
import arrowdown from "../assets/arrowdown.svg"
import Dashboard from '../Dashboard/Dashboard'
function Navbar({ setlogin }) {
    return (
        <div >
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="logout">
                    <a onClick={() => setlogin(true)}><img src={logout} alt="" /></a>

                </div>
            </div>
        </div>
    )
}

export default Navbar
