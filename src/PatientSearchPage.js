import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AnimationWrapper } from "react-hover-animation";
import FadeIn from "react-fade-in";
import hosimage from "./img/8.png";
import "./PatientSearchPage.css";
import Logo_page from "./img/10.png";
import axios from "axios"
import {useNavigate, useLocation} from "react-router-dom";
export default function PatientSearchPage() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('q');
  const [hospitalData, setHospitalData] = useState({});
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
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
    useEffect(()=>{
      axios({
        method: "get",
        withCredentials: true,
        url: "http://localhost:3001/getPatients",
      }).then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setPatients(res.data);
        } else {
          console.log("Server errror");
        }
      });
      },[])

  
  const [i, CHANGE] = useState(0);
  const [searchPatient, setsearch] = useState("");
  const patientsmap = (patients) =>
    patients.map((e) => {
      return <div key={e.id}> {patient(e)}</div>;
    });
  const handleSearchChange = () => {
    CHANGE(0);
    patientsmap(
      patients
        .filter((p) => {
          if (p.name.toLowerCase().includes(searchPatient.toLowerCase())) return p;
        })
        .slice(i, i + 10)
    );
  };
  ///patient_profile
  function handleClick(e){
    e.preventDefault();
    console.log(e.target.value);
    axios({
      method:"get",
      withCredentials: true,
      url:"http://localhost:3001/patient_profile",
      params:{
        id: e.target.value
      }
    }).then((data)=>{
      console.log(data.data.email);
      navigate("/patient_profile?q="+data.data.email);
    })
  }

  const patient = (e) => {
    return (
      <FadeIn>
        <AnimationWrapper>
          <Card
            border="primary"
            style={{ width: "18rem", marginBottom: "50px" }}
          >
            {/* <Card.Img variant="top" src={e.avatar} style={{borderRadius:"100px"}}/> */}
            <Card.Body className="cardly">
              <Card.Title style={{ fontWeight: "bold" }}>{e.name}</Card.Title>
              <Card.Text style={{}}>
              <div>Patient Id: {e._id}</div>
                <div>Age: {e.age}</div>
                <div>Gender: {e.gender}</div>
                <div>Bloodgroup: {e.bloodgroup}</div>
                <div>Height: {e.height}</div>
                <div>Weight: {e.weight}</div>
              </Card.Text>
              <Button value={e._id} onClick={handleClick} variant="light">Go to profile</Button>
            </Card.Body>
          </Card>
        </AnimationWrapper>
      </FadeIn>
    );
  };
  return (
    <FadeIn>
      <div className="Parent">
        <div className="profile-container">
          <nav className="patient__nav">
            <div>
              <img src={Logo_page} className="landing_logo" alt="" />
            </div>
            <ul className="patient__list">
              <li className="patient__li">HOME</li>
              <li className="patient__li">ABOUT US</li>
              <li className="patient__li">LOGOUT</li>
            </ul>
            <h3>Logged in as: {hospitalData.hospitalname}</h3>
          </nav>
          <div className="profile__about">
            <div className="profile_pic">
              <img src={hosimage} alt="" style={{ height: "350px" }} />
            </div>
            <div className="patient__details">
              <div className="patient__name">Hospital Name</div>
              <div className="patient__bloodgroup">Hospital Address</div>
            </div>
          </div>
        </div>
        <div className="Search-Area">
          <h1 style={{ fontWeight: "600", marginTop: "-100px" }}>
            Search for Patient
          </h1>
          <div className="border">
            <input
              className="Search Bar"
              value={searchPatient}
              placeholder="Type Patient Name...."
              onChange={(e) => {
                setsearch(e.target.value);
                handleSearchChange();
              }}
              style={{
                width: "600px",
                height: "50px",
                borderRadius: "50px",
                padding: "20px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {(!searchPatient.length && patientsmap(patients.slice(i, i + 10))) ||
              (searchPatient.length &&
                patientsmap(
                  patients
                    .filter((p) => {
                      if (p.name.toLowerCase().includes(searchPatient.toLowerCase()))
                        return p;
                    })
                    .slice(i, i + 10)
                ))}
          </div>
          <button
            style={{ margin: "15px" }}
            onClick={() => {
              i && CHANGE(i - 10);
            }}
            className="btn btn-outline-dark"
          >
            PREVIOUS
          </button>
          <button
            onClick={() => {
              i + 10 < patients.length && CHANGE(i + 10);
            }}
            className="btn btn-outline-dark"
          >
            NEXT
          </button>
        </div>
      </div>
    </FadeIn>
  );
}