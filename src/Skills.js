import React from 'react'
import './Skills.scss'

import html from './assets/icons/html.png';
import css from './assets/icons/css.png';
import js1 from './assets/icons/js1.png';
import  react from './assets/icons/react.png';
import nodejs from './assets/icons/nodejs.png';
import mongodb from './assets/icons/mongodb.png';
import git from './assets/icons/git.png';
import tailwind from './assets/icons/tailwindcss.png';
import scss from './assets/icons/scss.png';
const Skills = () => {
  return (
    <div className='skills'>
    <h1 className="skills-heading">Skills</h1>

    <div className="skillset">
    <div className="skill-container"><img src={html} alt="" className="skill-img" /></div>
    <div className="skill-container"><img src={css} alt="" className="skill-img" /></div>
    <div className="skill-container"><img src={js1} alt="" className="skill-img"/></div>
    <div className="skill-container"><img src={react} alt=""  className="skill-img"/></div>
    <div className="skill-container"><img src={nodejs} alt=""  className="skill-img"/></div>
    <div className="skill-container"><img src={mongodb} alt=""  className="skill-img"/></div>
    <div className="skill-container"><img src={git} alt=""  className="skill-img"/></div>
    <div className="skill-container"><img src={tailwind} alt=""  className="skill-img" /></div>
    <div className="skill-container"><img src={scss} alt=""  className="skill-img" /></div>


    </div>
    </div>
  )
}

export default Skills
