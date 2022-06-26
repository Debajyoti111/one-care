import React, {useState, useEffect} from 'react'
import './form.css';
import Logo_page from '../assets/Logo_page.png'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  const search = useLocation().search;
  const param = new URLSearchParams(search).get('q');
  const [hospital, setHospital] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medicine, setMedicine] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  function handleSubmit(e){
    axios({
      method:'post',
      data:{
        id:id,
        diagnosis: diagnosis,
        hospital:hospital,
        medicines: medicine,
        date: date
      },
      withCredentials: true,
      url:"http://localhost:3001/update_medical_history"
    }).then((data)=>{
      navigate("/profile_hospital?q="+param);
    })
  }
  return (
    <div className="form-container">
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
          <h4>
          Adding User new record!
          </h4>
        </div>
        </nav>
        <div className="form">
          Enter the details
        </div>
        <div className="form-card">
          <form onSubmit={handleSubmit} className='form-input'>
            <input name="hospital" value={hospital} type="text" placeholder='Hospital Name' className='input-text' 
            onChange={(e)=>{
              setHospital(e.target.value);
            }}/>
            <textarea name="diagnosis" value={diagnosis} type="test" placeholder='Diagnosis' className='input-text'
            onChange={(e)=>{
              setDiagnosis(e.target.value);
            }}/>
            <textarea name="medicine" value={medicine} type="test" placeholder='Medicines' className='input-text'
            onChange={(e)=>{
              setMedicine(e.target.value);
            }}/>
            <input name="date" value={date} type="text" placeholder='date' className='input-text'
            onChange={(e)=>{
              setDate(e.target.value);
            }}/>
            <input name="id" value={id} type="text" placeholder='id' className='input-text'
            onChange={(e)=>{
              setId(e.target.value);
            }}/>
          <button type="submit" className="submitbtn">
            Submit
          </button>
          </form>
        </div>
        <div className="button">
        
        </div>
    </div>
  )
}

export default Form;
