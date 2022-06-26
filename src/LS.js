import React,{useEffect, useState} from 'react'
import "./LS.css"
import one from './img/1.svg'
import two from './img/5.svg'
import axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
export default function LS() {
let navigate = useNavigate();
const [startDate, setStartDate] = useState(new Date());
const [fullName, setFullName] = useState("");
const [addhar, setAddhar] = useState("");
const [gender, setGender] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [date, setDate] = useState("");
const [height, setHeight] = useState("");
const [weight, setWeight] = useState("");
const [age, setAge] = useState("");
const [bloodgroup, setBloodgroup] = useState("");
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
  function sub(e)
  {
    document.querySelector(".containerA").classList.add("sign-up-mode");

  }
  function sib(e)
  {
    document.querySelector(".containerA").classList.remove("sign-up-mode");

  }

  async function makePostRegister(e)
    {
      e.preventDefault();
      await axios({
          method:"post",
          data:{
            fullname: fullName,
            addhar: addhar,
            gender: gender,
            email: email,
            password: password,
            date: date,
            height: height,
            weight: weight,
            age: age,
            bloodgroup: bloodgroup
          },
          withCredentials: true,
          url:"http://localhost:3001/register-patient"
        }).then((res)=>{
          if(res.status === 200)
          {
            navigate(res.data);
          }
        })
      
    };
    async function makePostLogin(e)
    {
      e.preventDefault();
      await axios({
          method:"post",
          data:{
            email: loginEmail,
            password: loginPassword,
          },
          withCredentials: true,
          url:"http://localhost:3001/login-patient"
        }).then((res)=>{
          if(res.status === 200)
          {
            navigate(res.data);
          }
        })
      
    };
  return (
    <div className="containerA">
      <div className="forms-containerA">
        <div className="signin-signup">
          <form onSubmit={makePostLogin}  className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input name="email" type="email" placeholder="Email" value={loginEmail} 
              onChange={(e)=>{
                setLoginEmail(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input name="password" type="password" placeholder="Password" value={loginPassword}
              onChange={(e)=>{
                setLoginPassword(e.target.value);
              }}/>
            </div>
            <input type="submit" value="Login" className="btn solid" />
            
          </form>
          <form onSubmit={makePostRegister} className="sign-up-form" >
            <h2 className="title" style={{marginTop:"30px"}}>Register and Enter Your Details</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input name="fullname" type="text" placeholder="Full name" required value={fullName} 
              onChange={(e)=>{
                setFullName(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input name="addhar" type="text" placeholder="Aadhar Card Number" required value={addhar}
              onChange={(e)=>{
                setAddhar(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input name="gender" type="text" placeholder="Gender" required value={gender}
              onChange={(e)=>{
                setGender(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input name="email" type="email" placeholder="Email" required value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input name="password" type="password" placeholder="Create Password" required value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
             {/*  <div>Date of Birth</div>
             <div style={{width:"150px",height:"40px",position:"relative",marginLeft:"140px",marginTop:"12px"}}><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>  */}
            <input name="date" type="date" id="birthday" placeholder='Date of Birth' required value={date}
            onChange={(e)=>{
              setDate(e.target.value);
            }}/>
            </div>
            <div style={{display:'flex'}}>
            <div className="input-field" style={{width:"190px"}}>
              <i className="fas fa-lock"></i>
              <input name="height" type="number" placeholder="Height(in cm)" value={height}
              onChange={(e)=>{
                setHeight(e.target.value);
              }}/>
            </div>
            <div className="input-field" style={{width:"190px"}}>
              <i className="fas fa-lock"></i>
              <input name="weight" type="number" placeholder="Weight(in kg)" value={weight}
              onChange={(e)=>{
                setWeight(e.target.value);
              }}/>
            </div>
            </div>
            <div style={{display:'flex'}}>
            <div className="input-field" style={{width:"190px"}}>
              <i className="fas fa-lock"></i>
              <input name="age" type="text" placeholder="Age" value={age}
              onChange={(e)=>{
                setAge(e.target.value);
              }}/>
            </div>
            <div className="input-field" style={{width:"190px"}}>
              <i className="fas fa-lock"></i>
              <input name="bloodgroup" type="text" placeholder="Blood Group" value={bloodgroup}
              onChange={(e)=>{
                setBloodgroup(e.target.value);
              }}/>
            </div>
            </div>
            
            <input type="submit" className="btn" value="Sign up" />
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
        <div className="panel right-panel" style={{marginTop:"-90px"}}>
          <div className="content" style={{marginLeft:"13%"}}>
            <h1 style={{marginLeft:"15%"}} >Already Registered ?</h1>
            <img src={one} alt="sign-up-image" style={{width:"80%",height:"90%",marginLeft:"20%"}}/>
            <p style={{marginLeft:"15%", marginTop:"-50px", width:"100%",fontSize:'25px'}}>
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
