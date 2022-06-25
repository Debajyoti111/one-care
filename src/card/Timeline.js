import React from 'react';
import './style.css';
import timelineData from './data.js';
// import data from './data.js';
import TimelineItem from './TimelineItem';

const Timeline=()=>timelineData.length>0 && (
    <div className="parent-container">
    <div className="timeline-container">
        {timelineData.map((data,idx)=>{
            return <TimelineItem data={data} key={idx}/>
        })}
    </div>
    </div>
)
export default Timeline;