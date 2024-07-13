import React from 'react'
import "./Verify.css"
import idfront from "./DetailAssets/IDFront.png"
import idback from "./DetailAssets/IDBack.png"
import transcript from "./DetailAssets/Transcript.png"

function VerifiDetail() {
  return (
    <div className='detail-main'>
      <h1>Verification Details</h1>
      <div className="verify-data">
        <div className="id">
          <img src={idfront} alt="" />
          <img src={idback} alt="" />
        </div>
        <p id='p1'>Latest Degrees/Transcripts* from the institutes you have mentioned in your profile.</p>
        <p id='p2'>* If you are still studying or don't have a degree yet, you can send us your transcript, university card or any other document that can prove that you are part of the institution.</p>
        <img id='transcript' src={transcript} alt="" />
      </div>
      <div className="button">
        <button id='approve'>Approve</button>
        <button id='reject'>Reject</button>
      </div>
    </div>
  )
}

export default VerifiDetail