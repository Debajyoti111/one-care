import React from 'react'
import './form.css';
import Logo_page from '../assets/Logo_page.png'
function form() {
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
          <form className='form-input'>
            <textarea type="text" placeholder='Diagonisis for' className='input-text'/>
            <textarea type="text" placeholder='Hospital Name' className='input-text'/>
            <textarea type="test" placeholder='Medicines' className='input-text'/>
            <input type="date" placeholder='date' className='input-text'/>
            <textarea type="text" placeholder='Key points' className='input-text'/>
          </form>
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
