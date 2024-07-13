import React from 'react'
import "./dashboard.css"

function Dashboard() {

    let stats = [
        {
            head: "All Users",
            data: 2400,
            class: "yellow statmain"
        },
        {
            head: "Active Users",
            data: 2100,
            class: "darkblue statmain"
        },
        {
            head: "Blocked Users",
            data: 300,
            class: "lightblue statmain"
        },
        {
            head: "Students",
            data: 2200,
            class: "natural statmain"
        },
        {
            head: "Teachers",
            data: 100,
            class: "natural statmain"
        },
        {
            head: "Institutes",
            data: 100,
            class: "natural statmain"
        },

    ]
    return (
        <div>
            <div className="container">
                <div className="heading">
                    <h1>Welcome Ahmad</h1>
                    <p>Discover the Statistics of Seekooh App</p>
                </div>
                <div className="statistics">
                    <h1 className='stat-head'>Users</h1>
                    <div className="stat">
                        {stats.map((stat) => {
                            return (
                                <div className={stat.class}>
                                    <h1>{stat.head}</h1>
                                    <p>{stat.data}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
