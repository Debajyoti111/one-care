import React, {useEffect, useState} from 'react'
import './patient_profile.css';
import profile_logo from '../assets/home_logo.svg'
// import card from '../card/card.js';
import Logo_page from '../assets/Logo_page.png';
import axios from "axios";
import {useLocation} from "react-router-dom";
import data from '../card/data';

function Patientprofile() {
  const search = useLocation().search;
  const email = new URLSearchParams(search).get('q');
  const [userData, setUserData] = useState({});
  useEffect(()=>{
    axios({
      method:"get",
      withCredentials: true,
      url:"http://localhost:3001/patient_profile",
      params:{
        email: email.toString()
      }
        }).then((data)=>{
          console.log(data.data);
          setUserData(data.data);
        })
    },[])
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
          <h2>
          Welcome {userData.username}
          </h2>
        </div>
        </nav>
        <div className='profile__about'>
          <div className="profile_pic">
            <img src={profile_logo} alt="" /> 
          </div>  
          <div className="patient__details">
            <div className="patient__name">Name: {userData.username}</div>
            <div className="patient__bloodgroup">Blood Group: {userData.bloodgroup}</div>
            <div>Id: {userData._id}</div>
            <div>Age: {userData.age}</div>
            <div><span>Height: {userData.height}cm</span> Weight:<span>{userData.weight} Kg</span></div>
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
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Patientprofile;
