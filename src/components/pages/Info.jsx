import React from 'react'
import { FcGraduationCap } from "react-icons/fc";
import "./info.css"
function Info() {
  return (
    <div className='info'>
      <div className="container">
        <div className="line">
            <p className='words'> <FcGraduationCap className="logo" />Build . Grow . Learn</p>
        </div>
        <h1>Your CS Journey starts Here</h1>
        <p>
            Explore different computer science specializations
            and follow structured roadmaps with curated resources,
            videos and courses.</p>
      </div>
    </div>
  )
}

export default Info
