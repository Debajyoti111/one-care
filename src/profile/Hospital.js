import React, {useState, useEffect} from 'react'
import './Patient.css';
import profile_logo from '../assets/home_logo.svg'
// import card from '../card/card.js';
import Logo_page from '../assets/Logo_page.png';
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";

function Hospital() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('q');
  const [hospitalData, setHospitalData] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{
    axios({
      method:"get",
      withCredentials: true,
      url:"http://localhost:3001/hospital_profile",
      params:{
        id: id.toString()
      }
        }).then((data)=>{
          console.log(data.data);
          setHospitalData(data.data);
        })
    },[])
    function handleClick(e){
      e.preventDefault();
      axios({
        method:"get",
        withCredentials: true,
        url:"http://localhost:3001/patient_search",
        params:{
          id: id.toString()
        }
      }).then((data)=>{
        navigate(data.data, {replace:true});
      })
    }
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
            {hospitalData.hospitalname} Hospital
          </h2>
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
        <button className="btn btn-med" onClick={handleClick}>
          Search For Patient
        </button>
      </div>
    </div>
  )
}

export default Hospital
