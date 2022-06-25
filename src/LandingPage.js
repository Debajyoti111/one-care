import React from 'react'
import './LandingPage.css'
// import logo from'./assets/logo.png'
import doctor from './assets/doctor.svg';

function LandingPage() {
  return (
    <div className='Landing_page'>
       {/* <img src={logo} alt="" className='landing_logo'/> */}
       <img src={doctor} alt="" className='doctor'/>
       <div className='landing_about'>
       <div className="landing_name">One<span style={{color:"#1C2367"}}>Care</span></div>
       <div className="Landing_desc">-Your Medical Portfolio</div>
       <div className="Landing_btn">
       <button className="btn">HOSPITAL</button>
       <button className="btn">PATIENT</button>
       </div>
       </div>
    </div>
  )
}
export default LandingPage
