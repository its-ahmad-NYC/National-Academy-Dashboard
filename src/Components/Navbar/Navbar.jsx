import React from 'react'
import "./Navbar.css"
import logo from "../assets/MobNA.png"
import logout from "../assets/logout.svg"
import dashboard from "../assets/dashboard.svg"
import user from "../assets/user.svg"
import verification from "../assets/verification.svg"
import category from "../assets/category.svg"
import arrowdown from "../assets/arrowdown.svg"
import Dashboard from '../Dashboard/Dashboard'
import hamburger from "../assets/hamburger.png"
import close from "../assets/close.png"
function Navbar({ setlogin, setsidebar, sidebar }) {
    return (
        <div >
            <div className="nav">
                
                <div className="logo">
                <img onClick={()=> setsidebar(!sidebar)} src={sidebar===true?close:hamburger} alt="" className="hamburger" />
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
