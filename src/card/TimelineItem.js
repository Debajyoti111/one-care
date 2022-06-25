   import react from 'react';
   import './style.css'
   const TimelineItem=({data})=>(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" 
            style={({background:data.category.color})}
            >
                {data.category.tag}
            </span>
            <time>
                {data.time}
            </time>
            <p>{data.text}</p>
            <h6>Diagnosis For</h6>
            <p>{data.diagnosisText}</p>
            <h6>Medicines</h6>
            <p>{data.medicineText}</p>
            <h6>Key points</h6>
            <p>{data.keyPoints}</p>
            {/* {data.link && <a href={data.link.url} target='_blank' rel='noopener noreferrer'>{data.link.text}</a>} */}
            <span className="circle"></span>
        </div>
    </div>
)           

export default TimelineItem;