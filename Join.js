import React from 'react'
// import './Join.css'
export default function Join() {
  return (
    <div className="fulljoin">
      <h1 className='joinheading'>__JOIN US</h1><br/><br/>
    <div className='mainjoin'> 
    <div className="contact">
      <input type="text" className='firstname' placeholder='First Name'/>
      <input type="text"  className='lastname' placeholder='Last Name'/><br></br>
      <input type="text" className='email' placeholder='Email'/><br/>
      <input type="text" className='message' placeholder='Message'/><br/>
      <button className="join-btn">Send</button>
      </div>
      <div className="pic">
        <img src="" alt="" />
        <img src="./Pictures/img9.jpg" width={"100%"} height={"350px"}/>
      </div>
    </div>
    </div>
  )
}
