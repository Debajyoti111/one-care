import React, { useState }  from 'react'
import "./HLS.css"
import one from './img/6.svg'
import two from './img/7.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function HLS() {
const [startDate, setStartDate] = useState(new Date());
const [name, setName] = useState("");
const [registration, setRegistration] = useState("");
const [password, setPassword] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [pin, setPin] = useState("");
const [loginname, setLoginName] = useState("");
const [loginpassword, setLoginPassword] = useState("");
const navigate = useNavigate();

  function sub(e)
  {
    document.querySelector(".containerA").classList.add("sign-up-mode");

  }
  function sib(e)
  {
    document.querySelector(".containerA").classList.remove("sign-up-mode");

  }

  // todo : complete the login and signup function
  async function login (e) {
    e.preventDefault();
    await axios({
        method:"post",
        data:{
          name: loginname,
          password: loginpassword,
        },
        withCredentials: true,
        url:"http://localhost:3001/login-hospital"
      }).then((res)=>{
        if(res.status == 200)
        {
          navigate(res.data);
        }
      })
  }

  async function signup(e) {
    e.preventDefault();
    await axios({
        method:"post",
        data:{
          name: name,
          registration: registration,
          password: password,
          address: address,
          city: city,
          pin : pin
        },
        withCredentials: true,
        url:"http://localhost:3001/register-hospital"
      }).then((res)=>{
        if(res.status == 200)
        {
          navigate(res.data);
        }
      })
  }
  return (
    <div className="containerA">
      <div className="forms-containerA">
        <div className="signin-signup">
          <form onSubmit={login}className="sign-in-form">
            <h2 className="title">Hospital Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="name" placeholder="Hospital Name" value={loginname}
              onChange={(e)=>{
                setLoginName(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input name="password" type="password" placeholder="Password" value={loginpassword} 
              onChange={(e)=>{
                setLoginPassword(e.target.value);
              }}/>
            </div>
            <input type="submit" onSubmit={login} value="Login" className="btn solid" />
          </form>
          <form onSubmit={signup} className="sign-up-form" >
            <h2 className="title" style={{marginTop:"30px"}}>Register and Enter Your Details</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="name" placeholder="Full Hospital Name" required value={name}
              onChange={(e)=>{
                setName(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="registration" value={registration} placeholder="Hospital Registration Number" required
              onChange={(e)=>{
                setRegistration(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" value={password}name="password" placeholder="Create Password" required onChange={(e)=>{
                setPassword(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="address" value={address} placeholder="Address" required onChange={(e)=>{
                setAddress(e.target.value);
              }} />
            </div>
            <div style={{display:'flex'}}>
            <div className="input-field" style={{width:"190px"}}>
              <i className="fas fa-lock"></i>
              <input type="text" name="city" placeholder="City" value={city} onChange={(e)=>{
                setCity(e.target.value);
              }}/>
            </div>
            <div className="input-field" style={{width:"190px"}}>
              <i className="fas fa-lock"></i>
              <input type="text" name="pin" placeholder="PIN Code" value={pin} onChange={(e)=>{
                setPin(e.target.value);
              }}/>
            </div>
            </div>
            <input type="submit" onSubmit={signup}  className="btn" value="Sign up" />
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
          <img src={two} className="image" alt="" style={{position:"relative",width:"60%", height:"60%",left:"-300px"}}/>
        </div>
        <div className="panel right-panel">
          <div className="content" style={{marginLeft:"13%", marginTop:"-80px"}}>
            <h1 style={{marginLeft:"15%"}} >Already Registered ?</h1>
            <img src={one} alt="sign-up-image" style={{width:"60%",height:"90%",marginLeft:"20%"}}/>
            <p style={{marginLeft:"15%", width:"100%",fontSize:'25px',marginTop:"-90px"}}>
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