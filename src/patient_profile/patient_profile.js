import React, {useEffect, useState} from 'react'
import './patient_profile.css';
import profile_logo from '../assets/home_logo.svg'
// import card from '../card/card.js';
import Logo_page from '../assets/Logo_page.png';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import data from '../card/data';

function Patientprofile() {
  const navigate = useNavigate();
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
    function handleClick(e){
      e.preventDefault();
      navigate("/patient_history?q="+email);
    }
  return (
    <div className="profile_parent_container">
      <div className='profile-container'>
        <nav className='patient__nav'>
          <div>
            <img src={Logo_page} className='landing_logo' alt="" /> 
          </div>
        <ul className='patient__list'>
          <li className='patient__li '><a href="#" style={{color:"white",underline:"none"}}>HOME</a></li>
          <li className='patient__li' ><a href="/" style={{color:"white",underline:"none"}}>ABOUT US</a></li>
          <li className='patient__li'><a href="/contactus" style={{color:"white",underline:"none"}}>CONTACT US</a></li>
        </ul>
        <div>
          <h2>
          Welcome {userData.username}
          </h2>
        </div>
        </nav>
        <div className='profile__about'>
          <div className="profile_pic">
            <img src={profile_logo} alt="" style={{marginTop:"18px",marginLeft:"-30px",height:"300px" }}/> 
          </div>  
          <div className="patient__details" style={{marginTop:"-40px" }} >
            <div className="patient__name">Name: {userData.username}</div>
            <div className="patient__bloodgroup"><span style={{fontWeight:"bold"}}>Blood Group :</span> {userData.bloodgroup}</div>
            <div><span style={{fontWeight:"bold"}}>Id:</span> {userData._id}</div>
            <div><span style={{fontWeight:"bold"}}>Age:</span> {userData.age}</div>
            <div><span style={{fontWeight:"bold"}}>Height: {userData.height}cm Weight: {userData.weight} Kg</span > </div>
          </div>
        </div>
      </div>
      {/* <card/> */}
      <div>
      </div>
      <div className="button3">
        <a href="/patient_history">
        <button onClick={handleClick} className="btn3 btn-med">
          Medical History
        </button>
        </a>
      </div>
    </div>
  )
}

export default Patientprofile;
