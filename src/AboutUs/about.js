import React from 'react'
import g from './icons/g.svg';
import l from './icons/l.svg';
import data from './dataSlider'
export default function Aboutsar() {
    const cards=()=>{
        data.map((e)=>{
            return(<h1>BJSIADS</h1>)
        })
    }
    return (
        <div style={{overflow:"hidden",padding:"11.8%",display:"flex", backgroundImage:" linear-gradient(to bottom, #87b7ff, #6ea3f7, #558eee, #3b7ae4, #1b66da)"}}>
           <h1 style={{color:"white",top:"40px", left:"45%",position:"absolute", marginRight:"4%",fontWeight:"900"}}>Our Team</h1>
           <div classname="Box" style={{border:"5px white", width:"350px"}}>
            <img src={data[0].src} style={{height:"300px"}}/>
            <br/>
            <span>Aaroh Srivastava</span>
            <br/>
            <a href={data[0].git}>
                <img src={g}/>
            </a>
            <a href={data[0].din}>
                <img src={l}/>
            </a>
           </div>
           <div classname="Box" style={{border:"5px white", width:"350px"}}>
            <img src={data[1].src} style={{height:"300px"}}/>
            <br/>
            <span>{data[1].name}</span>
            <br/>
            <a href={data[1].git}>
                <img src={g}/>
            </a>
            <a href={data[1].din}>
                <img src={l}/>
            </a>
           </div>
           <div classname="Box" style={{border:"5px white", width:"350px"}}>
            <img src={data[2].src} style={{height:"300px"}}/>
            <br/>
            <span>{data[2].name}</span>
            <br/>
            <a href={data[2].git}>
                <img src={g}/>
            </a>
            <a href={data[2].din}>
                <img src={l}/>
            </a>
           </div>
           <div classname="Box" style={{border:"5px white", width:"350px"}}>
            <img src={data[3].src} style={{height:"300px"}}/>
            <br/>
            <span>{data[3].name}</span>
            <br/>
            <a href={data[3].git}>
                <img src={g}/>
            </a>
            <a href={data[3].din}>
                <img src={l}/>
            </a>
           </div>
        </div>
            )

    }
