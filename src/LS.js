import React from 'react'
import "./LS.css"
import one from './img/1.svg'
import two from './img/5.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
export default function LS() {
const [startDate, setStartDate] = useState(new Date());
  function sub(e)
  {
    document.querySelector(".containerA").classList.add("sign-up-mode");

  }
  function sib(e)
  {
    document.querySelector(".containerA").classList.remove("sign-up-mode");

  }
  return (
    <div className="containerA">
      <div className="forms-containerA">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form" >
            <h2 className="title" style={{marginTop:"30px"}}>Register and Enter Your Details</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Full name" required/>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Aadhar Card Number" required/>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Blood Group" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Gender" required/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
             {/*  <div>Date of Birth</div>
             <div style={{width:"150px",height:"40px",position:"relative",marginLeft:"140px",marginTop:"12px"}}><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>  */}
            <input type="date" id="birthday" name="birthday" placeholder='Date of Birth' required></input>
            </div>
            <div style={{display:'flex'}}>
            <div className="input-field" style={{width:"190px"}}>
              <i className="fas fa-lock"></i>
              <input type="number" placeholder="Height(in cm)" />
            </div>
            <div className="input-field" style={{width:"190px"}}>
              <i className="fas fa-lock"></i>
              <input type="number" placeholder="Weight(in kg)" />
            </div>
            </div>
            
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-containerA">
        <div className="panel left-panel">
          <div className="content">
            <h1>Haven't Registered Yet?</h1>
            <br/>
            <h2>
              Register Now to get free and Easy access to your Medical Records
            </h2>
            <br/>
            <h1>
              Anyplace and Anytime!!
            </h1>
            <button className="btn transparent" id="sign-up-btn" onClick={(e)=>sub(e)}>
              Sign up
            </button>
          </div>
          <img src={two} className="image" alt="" style={{position:"relative",width:"80%", height:"60%",left:"-175px"}}/>
        </div>
        <div className="panel right-panel">
          <div className="content" style={{marginLeft:"13%"}}>
            <h1 style={{marginLeft:"15%"}} >Already Registered ?</h1>
            <img src={one} alt="sign-up-image" style={{width:"80%",height:"90%",marginLeft:"20%"}}/>
            <p style={{marginLeft:"15%", width:"100%",fontSize:'25px'}}>
              Click Here to Sign in and have a look at your Medical Record in a Single Place!
            </p>
            <button style={{marginLeft:"30%"}} className="btn transparent" id="sign-in-btn" onClick={(e)=>sib(e)}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>

  )
}
