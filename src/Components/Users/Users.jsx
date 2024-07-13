import React from 'react'
import "./Users.css"
import search from "../assets/search.svg"
import cardpic1 from "./UserAssets/peep1.jpg"
import cardpic2 from "./UserAssets/peep2.jpg"
import cardpic3 from "./UserAssets/peep3.jpg"
import cardpic4 from "./UserAssets/peep4.jpg"
import cardpic5 from "./UserAssets/peep5.jpg"
import cardpic6 from "./UserAssets/peep6.jpg"

function Users(props) {
    let usercard = [
        {
            pic: cardpic1,
            blockstatus: "Block",
            Name: "Kate William",
            Email: "katewilliam@gmail.com",
            Phone: "(259)778-9876"
        },
        {
            pic: cardpic2,
            blockstatus: "Block",
            Name: "Kate William",
            Email: "katewilliam@gmail.com",
            Phone: "(259)778-9876"
        },
        {
            pic: cardpic3,
            blockstatus: "Block",
            Name: "Kate William",
            Email: "katewilliam@gmail.com",
            Phone: "(259)778-9876"
        },
        {
            pic: cardpic4,
            blockstatus: "Block",
            Name: "Kate William",
            Email: "katewilliam@gmail.com",
            Phone: "(259)778-9876"
        },
        {
            pic: cardpic5,
            blockstatus: "Block",
            Name: "Kate William",
            Email: "katewilliam@gmail.com",
            Phone: "(259)778-9876"
        },
        {
            pic: cardpic6,
            blockstatus: "Block",
            Name: "Kate William",
            Email: "katewilliam@gmail.com",
            Phone: "(259)778-9876"
        },
    ]


    return (
        <div className='Users'>
            <div className="nav-user">
                <h1>{props.text}</h1>
                <div className="search">
                    <img src={search} alt="" />
                    <input type="search" name="search" placeholder='Search' id="" />
                    <button>Search</button>
                </div>
            </div>
            <div className="user-cards">
                {usercard.map((data) => {
                    return (<div className='card'>
                        <div className='img'>
                            <p>{data.blockstatus}</p>
                            <img src={data.pic} alt="" />
                        </div>
                        <h1>{data.Name}</h1>
                        <p>{data.Email}</p>
                        <p>{data.Phone}</p>

                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users