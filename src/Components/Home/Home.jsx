import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import "./Home.css";
import Users from "../Users/Users";
import VerifiDetail from "../VerificationDetail/VerifiDetail";
import Category from "../Category/Category";
import Tuition from "../Tuition/Tuition";
import Ads from "../Ads/Ads";

function Home({ setsidebar, sidebar, setaddbutton2 }) {
  const [unshow, show] = useState("dash");
  const board="Board/Exam"
  const Grade="Grade"
  const Subject="Subject"
  const City="City"
  return (
    <div className="Home">
  
      <div className={` sidebar-1 ${sidebar === true ? "sect-1-Ham" : "section-1"}`}>
        <Sidebar setsidebar={setsidebar} show={show} />
      </div>
      <div onClick={()=>setsidebar(false)} className="section-2">
      <div  className={unshow === "dash" ? "showpage" : "notshow"}>
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
        <Category cate={Subject} setaddbutton2={setaddbutton2} />
      </div>
      <div className={unshow === "grade" ? "showpage" : "notshow"}>
        <Category cate={Grade} setaddbutton2={setaddbutton2} />
      </div>
      <div className={unshow === "board" ? "showpage" : "notshow"}>
        <Category cate={board} setaddbutton2={setaddbutton2} />
      </div>
      <div className={unshow === "city" ? "showpage" : "notshow"}>
        <Category cate={City} setaddbutton2={setaddbutton2} />
      </div>
      <div className={unshow === "approved" ? "showpage" : "notshow"}>
        <Tuition text="Tuition"/>
      </div>
      <div className={unshow === "Rejected" ? "showpage" : "notshow"}>
        <Tuition text="Rejected"/>
      </div>
      <div className={unshow === "ads" ? "showpage" : "notshow"}>
        <Ads setaddbutton2={setaddbutton2}/>
      </div>
      </div>
    </div>
  );
}

export default Home;
