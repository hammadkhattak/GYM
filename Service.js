import React from 'react'
// import "./Service.css"
export default function Service() {
  return (
    <div>
      <div className="service">
        <h1 className='serviceh1'>__SERVICE</h1><br/>
        <div className="container">
            <div className="con1">
            <img src="./Pictures/img2.jpg" width={"90%"} height={"400px"}/>
            <h3>Weight Lifting</h3>
            <p>20$ per Month</p>
            <button className="join">Join</button>
            </div>
            <div className="con1">
            <img src="./Pictures/img10.jpg" width={"90%"} height={"400px"}/>
            <h3>Weight Lifting</h3>
            <p>20$ per Month</p>
            <button className="join">Join</button>
            </div>
            <div className="con1">
            <img src="./Pictures/img9.jpg" width={"90%"} height={"400px"}/>
            <h3>Weight Lifting</h3>
            <p>20$ per Month</p>
            <button className="join">Join</button>
            </div>
        </div>
      </div>
    </div>
  )
}
