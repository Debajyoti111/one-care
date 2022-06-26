import React from 'react'
import './Contactus.css'
import Logo_page from '../assets/Logo_page.png'
import design from '../assets/blackspots.png'

function Contactus() {
  return (
    <div>
       <nav className='patient__nav'>
          <div>
            <img src={Logo_page} className='landing_logo' alt="" /> 
          </div>
        <ul className='patient__list'>
          <li className='patient__li'><a href="/" style={{color:"white",underline:"none"}}>HOME</a></li>
          <li className='patient__li'><a href="/aboutus" style={{color:"white",underline:"none"}}>ABOUT US</a></li>
        </ul>
        <div>
        </div>
        </nav>
        <div className="contactus">
            <div className="first-col">
                <div className="heading">
                    Contact <span style={{color:'#6766FE'}}>Us</span>
                </div>
                <div className="para">
            <img className="designs" src={design} alt="" style={{marginTop:"250px",marginLeft:"-200px"
        }} />
                    If you have any query , you can contact us anytime !
                    We promise to get back to you as soon as possible.
                </div>
            </div>
            <div className="second-col" >
                <h3>Phone Number</h3>
                <span style={{color:"grey"}}>+917008********</span>
                <h3>Mail Us at:</h3>
                <span style={{color:"grey"}}>abc@gmail.com</span>
            </div>
        </div>
        {/* <div className="designs"> */}
        {/* </div> */}
    </div>
  )
}

export default Contactus