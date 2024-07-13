import React from 'react'
import './Home.scss'
import Navbar from './Navbar'
import Main from './Main'
import About from './About'
import Skills from './Skills'

import Acheive from './Acheive'
import Work from './Work'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='container'>
<Navbar/>
   <Main/>
  <About/>
  <Skills/>
<Work/>
 <Acheive/>
 <Footer/>
    </div>
  )
}

export default Home
