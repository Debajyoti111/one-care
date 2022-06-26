import React,  {useEffect, useState} from 'react';
import './style.css';
// import timelineData from './data.js';
import TimelineItem from './TimelineItem';
import {useLocation} from "react-router-dom";
import axios from "axios";


function Timeline(){
    const search = useLocation().search;
    const email = new URLSearchParams(search).get('q');
    const [timelineData, setTimelineData] = useState([]);
    useEffect(()=>{
        axios({
            method:"get",
            withCredentials: true,
            url:"http://localhost:3001/patient_profile",
            params:{
              email: email.toString()
            }
              }).then((data)=>{
                setTimelineData(data.data.medicalHistory);
              })
    })
    return (<div className="parent-container">
    <div className="timeline-container">
        {timelineData.map((data,idx)=>{
            return <TimelineItem data={data} key={idx}/>
        })}
    </div>
    </div>)
}
export default Timeline;