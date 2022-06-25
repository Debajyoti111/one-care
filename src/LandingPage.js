import React from 'react'
import './LandingPage.css'
// import logo from'./assets/logo.png'
import doctor from './assets/doctor.svg';
import Logo_page from './assets/Logo_page.png';

function LandingPage() {
  return (
    <div className='Landing_page'>
       {/* <img src={logo} alt="" className='landing_logo'/> */}
       <img src={doctor} alt="" className='doctor'/>
       <img src={Logo_page} alt="" className='landing_logo2'/>
       <div className='landing_about'>
       <div className="landing_name">One<span style={{color:"#1C2367"}}>Care</span> </div>
       <div className="Landing_desc">-Your Medical Portfolio</div>
       <div className="Landing_btn">
       <a href="/hospital_register"><button className="btn">HOSPITAL</button></a>
       <a href="/patient_register"><button  className="btn">PATIENT</button></a>
       </div>
       </div>
    </div>
  )
}
export default LandingPage