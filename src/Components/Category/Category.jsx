import React from 'react'
import btn from "./assets/plusicon.svg"
import del from "./assets/delete.svg"
import "./Category.css"

let boards = [
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
    {
        name: "Sahiwal Board"
    },
]

function Category({cate, setaddbutton2}) {
    return (
        <div className='category-comp'>
            <div className="nav-category">
                <h1>Board (<span id='nav-span'>{cate}</span>)</h1>
                <div className="navbtn">
                    <button onClick={()=>setaddbutton2(true)} ><img src={btn}  alt="" />Add Board</button>
                
                </div>
            </div>
            <div className="city-boards">
                {boards.map((data) => {
                    return (
                        <div className="board">
                            <h1>{data.name}</h1>
                            <div className="del">
                                <img src={del} alt="" />
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Category
