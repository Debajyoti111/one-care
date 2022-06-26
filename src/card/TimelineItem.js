   import react from 'react';
   import './style.css'
   const TimelineItem=({data})=>(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h6>Added By</h6>
            <p>{data.hospitalName} on {data.date}</p>
            <time>
                {data.time}
            </time>
            <p>{data.text}</p>
            <h6>Diagnosis For</h6>
            <p>{data.patientName}</p>
            <h6>Diagnosis</h6>
            <p>{data.diagnosis}</p>
            <h6>Medicines</h6>
            <p>{data.medicineText}</p>
            {/* {data.link && <a href={data.link.url} target='_blank' rel='noopener noreferrer'>{data.link.text}</a>} */}
            <span className="circle"></span>
        </div>
    </div>
)           

export default TimelineItem;