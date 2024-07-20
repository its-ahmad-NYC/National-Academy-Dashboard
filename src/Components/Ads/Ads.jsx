import React from 'react'
import "./Ads.css"
import btn from "./adsAssets/plusicon.svg"
import ad1 from "./adsAssets/ad1.png"
import ad2 from "./adsAssets/ad2.png"

function Ads({setaddbutton2}) {

  return (
    <div className='ads-sect'>
            <div className="nav-category">
                <h1>Ads</h1>
                <div className="navbtn">
                    <button onClick={()=>setaddbutton2(true)} ><img src={btn} alt="" />Add Ad</button>
                </div>
            </div>
            <div className="ad-images">
                <img src={ad1} alt="" />
                <img src={ad2} alt="" />
            </div>
    </div>
  )
}

export default Ads