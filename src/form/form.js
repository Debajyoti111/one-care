import React,{useState, useEffect} from 'react'
import './form.css';
import Logo_page from '../assets/Logo_page.png'
function form() {
  // const [patient, setPatient] = useState("");
  // const [hospital, setHospital] = useState("");
  // const [diagnosis, setDiagnosis] = useState("");
  // const [medicine, setMedicine] = useState("");
  // const [date, setDate] = useState("");
  // const [id, setId] = useState("");
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
          {/* <form className='form-input'>
            <input name="patient" value={patient} type="text" placeholder='Patient Name' className='input-text'/>
            <input name="hospital" value={hospital} type="text" placeholder='Hospital Name' className='input-text'/>
            <textarea name="diagnosis" value={patient} type="test" placeholder='Diagnosis' className='input-text'/>
            <textarea name="medicine" value={patient} type="test" placeholder='Medicines' className='input-text'/>
            <input name="date" value={patient} type="text" placeholder='date' className='input-text'/>
            <input name="id" value={patient} type="text" placeholder='id' className='input-text'/>
          </form> */}
        </div>
        <div className="button">
          <button className="submitbtn">
            Submit
          </button>
        </div>
    </div>
  )
}

export default form;
