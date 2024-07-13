import React from 'react'
import './About.scss'
import img2 from './assets/icons/img2.png'
const About = () => {
  return (
    <div className='about-me'>
    <h1 className="about-heading">About Me</h1>
    <div className="about-container">
        <div className="about-left"><img src={img2} alt=""  className='about-image' /></div>
        <div className="about-right"><p className="about-description">

      
      As a frontend developer, I have a strong knowledge of React.js and JavaScript. My passion lies in React.js, and I've contributed extensively to open source projects within the React ecosystem. Additionally, I'm a beta MLSA with Microsoft Learn Student Ambassadors, where I engage in public speaking and share my expertise with others. I take pride in crafting responsive websites with a focus on effective design and functionality.
        </p></div>
    </div>
      
    </div>
  )
}

export default About
