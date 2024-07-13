import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import "./Home.css"
import Users from '../Users/Users'
import VerifiDetail from '../VerificationDetail/VerifiDetail'
import Category from '../Category/Category'


function Home() {

  const [unshow, show] = useState("dash")
  return (
    <div className='Home'>
      <Sidebar show={show} />
      <div className={unshow === "dash" ? "showpage" : "notshow"}>
        <Dashboard />
      </div>
      <div className={unshow === "user" ? "showpage" : "notshow"}>
        <Users text="Student" />
      </div>
      <div className={unshow === "teachers" ? "showpage" : "notshow"}>
        <Users text="Teacher" />
      </div>
      <div className={unshow === "institutes" ? "showpage" : "notshow"}>
        <Users text="Institute" />
      </div>
      <div className={unshow === "verified" ? "showpage" : "notshow"}>
        <Users text="Verified" />
      </div>
      <div className={unshow === "unverify" ? "showpage" : "notshow"}>
        <Users text="Unverified" />
      </div>
      <div className={unshow === "verify" ? "showpage" : "notshow"}>
        <VerifiDetail />
      </div>
      <div className={unshow === "subject" ? "showpage" : "notshow"}>
        <Category text="Subject" />
      </div>
      <div className={unshow === "grade" ? "showpage" : "notshow"}>
        <Category text="Grade" />
      </div>
      <div className={unshow === "board" ? "showpage" : "notshow"}>
        <Category text="Board/Exam" />
      </div>
      <div className={unshow === "city" ? "showpage" : "notshow"}>
        <Category text="City" />
      </div>





    </div>
  )
}

export default Home