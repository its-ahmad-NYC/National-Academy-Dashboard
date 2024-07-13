import React, { useState } from 'react'
import "./Sidebar.css"

function Sidebar({ show }) {
    const [unselect, select] = useState("dashboard")
    function dashboard1() {
        if (dashboard === false) {
            setdashboard(true)
            setverify(false)
            setcategory(false)
            setuser(false)
        } else if (dashboard === true) {
            setdashboard(false)

        }

    }
    const [dashboard, setdashboard] = useState(true)
    const [verify, setverify] = useState(false)
    function verification1() {
        if (verify === false) {
            setverify(true)
            setcategory(false)
            setuser(false)
            setdashboard(false)
        } else if (verify === true) {
            setverify(false)

        }

    }
    const [user, setuser] = useState(false)
    function user1() {
        if (user === false) {
            setuser(true)
            setcategory(false)
            setverify(false)
            setdashboard(false)
        } else if (user === true) {
            setuser(false)
        }


    }
    const [category, setcategory] = useState(false)
    function category1() {
        if (category === false) {
            setcategory(true)
            setuser(false)
            setverify(false)
            setdashboard(false)
        } else if (category === true) {
            setcategory(false)
        }


    }
    const selchange = (val) => select(val)
    const showpage = (val2) => show(val2)
    const [subCategory, setSubCategory] = useState("dashboard")
    return (
        <div>
            <div className="sidebar">

                <div className="headings">
                    <div onClick={function () { selchange("dashboard"); showpage("dash"); setSubCategory("dashboard") }} className={`dashborad user-panel flx ${unselect === "dashboard" ? "select" : ""}`}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="32.518" height="32.492" viewBox="0 0 32.518 32.492">
                            <g id="house-flood" transform="translate(0.009 -0.002)">
                                <path id="Path_1" data-name="Path 1" d="M32.509,23.564a5.375,5.375,0,0,1-8.136-.019,5.344,5.344,0,0,1-8.124,0,5.344,5.344,0,0,1-8.124,0,5.375,5.375,0,0,1-8.136.019l2.043-1.782A2.708,2.708,0,0,0,6.773,20H9.481A2.708,2.708,0,1,0,14.9,20H17.6a2.708,2.708,0,1,0,5.416,0h2.708a2.708,2.708,0,0,0,4.739,1.782Z" transform="translate(0 7.078)" />
                                <g id="_01_align_center" data-name=" 01 align center" transform="translate(0.003 0.002)">
                                    <path id="Path_2" data-name="Path 2" d="M13.77,11.682A6.77,6.77,0,0,0,7,18.452v1.784H9.708V18.452a4.062,4.062,0,1,1,8.124,0v1.784h2.708V18.452a6.77,6.77,0,0,0-6.77-6.77Z" transform="translate(2.477 4.132)" />
                                    <path id="Path_3" data-name="Path 3" d="M2.708,24.37V14.893L16.247,2.707,29.786,14.893V24.37h2.708V13.689L18.059.7a2.708,2.708,0,0,0-3.623,0L0,13.689V24.37Z" transform="translate(0 -0.002)" />
                                </g>
                            </g>
                        </svg>

                        <h1>Dashboard</h1>

                    </div>
                    <div className={`user-panel  ${unselect === "user" ? "select" : ""}`} >
                        <div onClick={user1} className='users flx' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                                <path id="users" d="M10.313,17.875A6.188,6.188,0,1,1,16.5,11.688a6.188,6.188,0,0,1-6.187,6.188Zm0-9.625a3.438,3.438,0,1,0,3.438,3.438A3.437,3.437,0,0,0,10.313,8.25ZM20.625,31.625v-.687A10.313,10.313,0,0,0,0,30.938v.687a1.375,1.375,0,0,0,2.75,0v-.687a7.563,7.563,0,0,1,15.125,0v.688a1.375,1.375,0,0,0,2.75,0ZM33,24.75a9.625,9.625,0,0,0-16.042-7.173,1.375,1.375,0,1,0,1.834,2.049A6.875,6.875,0,0,1,30.25,24.75a1.375,1.375,0,0,0,2.75,0ZM24.063,12.375A6.188,6.188,0,1,1,30.25,6.188a6.188,6.188,0,0,1-6.187,6.188Zm0-9.625A3.438,3.438,0,1,0,27.5,6.188,3.437,3.437,0,0,0,24.063,2.75Z" />
                            </svg>

                            <h1>Users</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" id='arrow' width="18" height="11.115" viewBox="0 0 18 11.115">
                                <path id="Icon_material-navigate-next" data-name="Icon material-navigate-next" d="M15,9l-2.115,2.115L19.755,18l-6.87,6.885L15,27l9-9Z" transform="translate(27 -12.885) rotate(90)" />
                            </svg>
                        </div>
                        <div className={user === true ? "user-category" : "user-category-none"}>
                            <ul>
                                <div onClick={() => { showpage("user"); setSubCategory("students"); selchange("user") }}>
                                    <li className={subCategory === "students" ? "round" : ""} >Students</li>
                                </div>
                                <div onClick={function () { showpage("teachers"); setSubCategory("teachers"); selchange("user") }}>
                                    <li className={subCategory === "teachers" ? "round" : ""} >Teachers</li>
                                </div>
                                <div onClick={function () { showpage("institutes"); setSubCategory("institutes"); selchange("user") }}>
                                    <li className={subCategory === "institutes" ? "round" : ""}  >Institutes</li>
                                </div>
                            </ul>
                        </div>

                    </div>
                    <div className={`user-panel  ${unselect === "verify" ? "select" : ""}`} >
                        <div onClick={verification1} className='verifications flx' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.24" height="28.87" viewBox="0 0 35.24 28.87">
                                <g id="Icon_feather-user-check" data-name="Icon feather-user-check" transform="translate(0 -3)">
                                    <path id="Path_98437" data-name="Path 98437" d="M23.058,31.123V28.249A5.749,5.749,0,0,0,17.309,22.5H7.249A5.749,5.749,0,0,0,1.5,28.249v2.874" transform="translate(0 -0.754)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                    <path id="Path_98438" data-name="Path 98438" d="M18.248,10.249A5.749,5.749,0,1,1,12.5,4.5,5.749,5.749,0,0,1,18.248,10.249Z" transform="translate(-0.22)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                    <path id="Path_98439" data-name="Path 98439" d="M25.5,16.374l2.874,2.874L34.123,13.5" transform="translate(-1.005 -0.377)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                </g>
                            </svg>

                            <h1>Verification</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" id='arrow' width="18" height="11.115" viewBox="0 0 18 11.115">
                                <path id="Icon_material-navigate-next" data-name="Icon material-navigate-next" d="M15,9l-2.115,2.115L19.755,18l-6.87,6.885L15,27l9-9Z" transform="translate(27 -12.885) rotate(90)" />
                            </svg>
                        </div>
                        <div className={verify === true ? "user-category" : "user-category-none"}>
                            <ul>
                                <div onClick={function () { showpage("verified"); setSubCategory("verified"); selchange("verify") }}>
                                    <li className={subCategory === "verified" ? "round" : ""} >Verified</li>
                                </div>
                                <div onClick={function () { showpage("unverify"); setSubCategory("unverify"); selchange("verify") }}>
                                    <li className={subCategory === "unverify" ? "round" : ""} >Unverified</li>
                                </div>
                                <div onClick={function () { showpage("verify"); setSubCategory("pending"); selchange("verify") }}>
                                    <li className={subCategory === "pending" ? "round" : ""}  >Pending</li>
                                </div>
                            </ul>
                        </div>

                    </div>

                    <div className={`user-panel  ${unselect === "category" ? "select" : ""}`} >
                        <div onClick={category1} className='verifications flx' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.24" height="28.87" viewBox="0 0 35.24 28.87">
                                <g id="Icon_feather-user-check" data-name="Icon feather-user-check" transform="translate(0 -3)">
                                    <path id="Path_98437" data-name="Path 98437" d="M23.058,31.123V28.249A5.749,5.749,0,0,0,17.309,22.5H7.249A5.749,5.749,0,0,0,1.5,28.249v2.874" transform="translate(0 -0.754)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                    <path id="Path_98438" data-name="Path 98438" d="M18.248,10.249A5.749,5.749,0,1,1,12.5,4.5,5.749,5.749,0,0,1,18.248,10.249Z" transform="translate(-0.22)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                    <path id="Path_98439" data-name="Path 98439" d="M25.5,16.374l2.874,2.874L34.123,13.5" transform="translate(-1.005 -0.377)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                </g>
                            </svg>

                            <h1>Category</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" id='arrow' width="18" height="11.115" viewBox="0 0 18 11.115">
                                <path id="Icon_material-navigate-next" data-name="Icon material-navigate-next" d="M15,9l-2.115,2.115L19.755,18l-6.87,6.885L15,27l9-9Z" transform="translate(27 -12.885) rotate(90)" />
                            </svg>
                        </div>
                        <div className={category === true ? "user-category" : "user-category-none"}>
                            <ul>
                                <div onClick={function () { showpage("subject"); setSubCategory("subject"); selchange("category") }}>
                                    <li className={subCategory === "subject" ? "round" : ""} >Subject</li>
                                </div>
                                <div onClick={function () { showpage("grade"); setSubCategory("grade"); selchange("category") }}>
                                    <li className={subCategory === "grade" ? "round" : ""} >Grade</li>
                                </div>
                                <div onClick={function () { showpage("board"); setSubCategory("board"); selchange("category") }}>
                                    <li className={subCategory === "board" ? "round" : ""}  >Board/Exam</li>
                                </div>
                                <div onClick={function () { showpage("city"); setSubCategory("city"); selchange("category") }}>
                                    <li className={subCategory === "city" ? "round" : ""}  >City</li>
                                </div>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Sidebar