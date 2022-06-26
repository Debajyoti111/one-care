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
    function handleAddRecord(e){
      e.preventDefault();
      navigate("/patient_add?q="+id, {replace: true});
    }
  return (
    <div className="profile_parent_container">
      <div className='profile-container'>
        <nav className='patient__nav'>
          <div>
            <img src={Logo_page} className='landing_logo' alt="" /> 
          </div>
        <ul className='patient__list'>
          <li className='patient__li'><a href="#">HOME</a></li>
          <li className='patient__li'><a href="/aboutus">ABOUT US</a></li>
          <li className='patient__li'><a href="/contactus">CONTACT US</a></li>
        </ul>
        <div>
          <h2>
            {hospitalData.hospitalname} Hospital
          </h2>
        </div>
        </nav>
        <div className='profile__about'>
          <div className="profile_pic">
            <img src={profile_logo} alt="" style={{marginTop:"50px",marginLeft:"-90px",height:"300px" }} /> 
          </div>  
          <div className="patient__details">
            <div className="patient__name">{hospitalData.hospitalname}</div>
            <div className="patient__bloodgroup">{hospitalData.address}</div>
          </div>
        </div>
      </div>
      {/* <card/> */}
      <div>
      </div>
      <div className="button3">
        <button className="btn3 btn-med" onClick={handleClick}>
          Search For Patient
        </button>
        <button className="btn3 btn-med" style={{marginLeft:"2px"}} onClick={handleAddRecord}>
          Add Record
        </button>
      </div>
    </div>
  )
}

export default Hospital
