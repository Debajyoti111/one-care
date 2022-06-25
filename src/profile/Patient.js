import React from 'react'
import './Patient.css';
import profile_logo from '../assets/home_logo.svg'
// import card from '../card/card.js';
import Logo_page from '../assets/Logo_page.png';

function Patient() {
  return (
    <div className="profile_parent_container">
      <div className='profile-container'>
        <nav className='patient__nav'>
          <div>
            <img src={Logo_page} className='landing_logo' alt="" /> 
          </div>
        <ul className='patient__list'>
          <li className='patient__li'>HOME</li>
          <li className='patient__li'>ABOUT US</li>
          <li className='patient__li'>CONTACT US</li>
        </ul>
        <div>
          <h3>
            This User Profile!
          </h3>
        </div>
        </nav>
        <div className='profile__about'>
          <div className="profile_pic">
            <img src={profile_logo} alt="" /> 
          </div>  
          <div className="patient__details">
            <div className="patient__name">Anshu Joshi</div>
            <div className="patient__bloodgroup">Blood Group A*</div>
          </div>
        </div>
      </div>
      {/* <card/> */}
      <div>
      </div>
      <div className="button">
        <button className="btn btn-med">
          Medical History
        </button>
        <button className="btn btn-new">
          Add new record
        </button>
      </div>
    </div>
  )
}

export default Patient
