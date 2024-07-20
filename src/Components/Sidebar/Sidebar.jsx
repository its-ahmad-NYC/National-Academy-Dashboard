import React, { useState } from "react";
import "./Sidebar.css";
import Dashboard from "./assets-sidebar/house-flood.png";
import DashboardWhite from "./assets-sidebar/house-flood_white.png";
import Category from "./assets-sidebar/category_black.png";
import CategoryWhite from "./assets-sidebar/category_white.png";
import verify1 from "./assets-sidebar/user-check.png";
import verifyWhite from "./assets-sidebar/user-check-white.png";
import usersWhite from "./assets-sidebar/users.png";
import users from "./assets-sidebar/users_black.png";
import arrow from "./assets-sidebar/arrow.png";
import arrowWhite from "./assets-sidebar/arrow_black.png";
import tuitionpic from "./assets-sidebar/tuition.png"
import tuitionWhite from "./assets-sidebar/tuition_white.png"
import ad from "./assets-sidebar/ad.png"
import adWhite from "./assets-sidebar/ad_white.png"

function Sidebar({ show, setsidebar }) {
  const [unselect, select] = useState("dashboard");

    
  const [verify, setverify] = useState(false);
  function verification1() {
    if (verify === false) {
      setverify(true);
      setcategory(false);
      setuser(false);
      settuition(false);
    } else if (verify === true) {
      setverify(false);
    }
  }
  const [user, setuser] = useState(false);
  function user1() {
    if (user === false) {
      setuser(true);
      setcategory(false);
      setverify(false);
      settuition(false);
    } else if (user === true) {
      setuser(false);
    }
  }
  const [category, setcategory] = useState(false);
  function category1() {
    if (category === false) {
      setcategory(true);
      setuser(false);
      setverify(false);
      settuition(false);
    } else if (category === true) {
      setcategory(false);
    }
  }
  const [tuition, settuition] = useState(false);
  function tuition1() {
    if (tuition === false) {
      settuition(true)
      setcategory(false);
      setuser(false);
      setverify(false);
    } else if (tuition === true) {
      settuition(false);
    }
  }
  const selchange = (val) => select(val);
  const showpage = (val2) => show(val2);
  const [subCategory, setSubCategory] = useState("dashboard");
  return (
    <div>
      <div className={`sidebar `}>
        <div className="headings">
          <div className="headng-upper">
          <div
            onClick={function () {
              selchange("dashboard");
              showpage("dash");
              setSubCategory("dashboard");
              setcategory(false);
              setuser(false);
              setverify(false);
              setsidebar(false);
              settuition(false);
            }}
            className={`dashborad user-panel flx ${
              unselect === "dashboard" ? "select" : ""
            }`}
          >
            <img
              src={unselect === "dashboard" ? DashboardWhite : Dashboard}
              alt=""
              className="svg"
            />

            <h1>Dashboard</h1>
          </div>
          <div className={`user-panel  ${unselect === "user" ? "select" : ""}`}>
            <div onClick={user1} className="users flx">
              <img
                src={unselect === "user" ? usersWhite : users}
                alt=""
                className="svg"
              />

              <h1>Users</h1>
              <img
                src={unselect === "user" ? arrowWhite : arrow}
                alt=""
                id="arrow"
              />
            </div>
            <div
              className={user === true ? "user-category" : "user-category-none"}
            >
              <ul>
                <div
                  onClick={() => {
                    showpage("user");
                    setSubCategory("students");
                    selchange("user");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "students" ? "round" : ""}>
                    Students
                  </li>
                </div>
                <div
                  onClick={function () {
                    showpage("teachers");
                    setSubCategory("teachers");
                    selchange("user");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "teachers" ? "round" : ""}>
                    Teachers
                  </li>
                </div>
                <div
                  onClick={function () {
                    showpage("institutes");
                    setSubCategory("institutes");
                    selchange("user");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "institutes" ? "round" : ""}>
                    Institutes
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div
            className={`user-panel  ${unselect === "verify" ? "select" : ""}`}
          >
            <div onClick={verification1} className="verifications flx">
              <img
                src={unselect === "verify" ? verifyWhite : verify1}
                alt=""
                className="svg"
              />

              <h1>Verification</h1>
              <img
                src={unselect === "verify" ? arrowWhite : arrow}
                alt=""
                id="arrow"
              />
            </div>
            <div
              className={
                verify === true ? "user-category" : "user-category-none"
              }
            >
              <ul>
                <div
                  onClick={function () {
                    showpage("verified");
                    setSubCategory("verified");
                    selchange("verify");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "verified" ? "round" : ""}>
                    Verified
                  </li>
                </div>
                <div
                  onClick={function () {
                    showpage("unverify");
                    setSubCategory("unverify");
                    selchange("verify");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "unverify" ? "round" : ""}>
                    Unverified
                  </li>
                </div>
                <div
                  onClick={function () {
                    showpage("verify");
                    setSubCategory("pending");
                    selchange("verify");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "pending" ? "round" : ""}>
                    Pending
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div
            className={`user-panel  ${unselect === "category" ? "select" : ""}`}
          >
            <div onClick={category1} className="verifications flx">
              <img
                src={unselect === "category" ? CategoryWhite : Category}
                alt=""
                className="svg"
              />

              <h1>Category</h1>
              <img
                src={unselect === "category" ? arrowWhite : arrow}
                alt=""
                id="arrow"
              />
            </div>
            <div
              className={
                category === true ? "user-category" : "user-category-none"
              }
            >
              <ul>
                <div
                  onClick={function () {
                    showpage("subject");
                    setSubCategory("subject");
                    selchange("category");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "subject" ? "round" : ""}>
                    Subject
                  </li>
                </div>
                <div
                  onClick={function () {
                    showpage("grade");
                    setSubCategory("grade");
                    selchange("category");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "grade" ? "round" : ""}>
                    Grade
                  </li>
                </div>
                <div
                  onClick={function () {
                    showpage("board");
                    setSubCategory("board");
                    selchange("category");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "board" ? "round" : ""}>
                    Board/Exam
                  </li>
                </div>
                <div
                  onClick={function () {
                    showpage("city");
                    setSubCategory("city");
                    selchange("category");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "city" ? "round" : ""}>
                    City
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div
            className={`user-panel  ${unselect === "tuition" ? "select" : ""}`}
          >
            <div onClick={tuition1} className="verifications flx">
              <img
                src={unselect === "tuition" ? tuitionWhite : tuitionpic}
                alt=""
                className="svg"
              />

              <h1>Tuitions</h1>
              <img
                src={unselect === "tuition" ? arrowWhite : arrow}
                alt=""
                id="arrow"
              />
            </div>
            <div
              className={
                tuition === true ? "user-category" : "user-category-none"
              }
            >
              <ul>
                <div
                  onClick={function () {
                    showpage("approved");
                    setSubCategory("approved");
                    selchange("tuition");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "approved" ? "round" : ""}>
                    Approved
                  </li>
                </div>
                <div
                  onClick={function () {
                    showpage("Rejected");
                    setSubCategory("Rejected");
                    selchange("tuition");
                    setsidebar(false);
                  }}
                >
                  <li className={subCategory === "Rejected" ? "round" : ""}>
                    Rejected
                  </li>
                </div>
              </ul>
            </div>
          </div>
          </div>
          <div className="heading-lower">
          <div
            onClick={function () {
              selchange("ads");
              showpage("ads");
              setSubCategory("ads");
              setcategory(false);
              setuser(false);
              setverify(false);
              setsidebar(false);
              settuition(false);
            }}
            className={`dashborad user-panel flx ${
              unselect === "ads" ? "select" : ""
            }`}
          >
            <img
              src={unselect === "ads" ? adWhite : ad}
              alt=""
              className="svg"
            />

            <h1>Ads</h1>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
