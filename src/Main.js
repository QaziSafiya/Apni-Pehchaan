import React from 'react'
import './Main.scss'
import img1 from './assets/icons/img1.png'
const Main = () => {
  return (
    <div className='main-section'>
      <div className="left-section">
        <h1 className="heading">Hello ,It's Me</h1>
        <h2 className='heading-name'> Safiya Siddiqui</h2>
        <h2 className="heading-two"> I am a Frontend Developer</h2>
       
        <p className="quote"><code>"Never discourage anyone…who continually makes progress, no matter how slow.”</code></p>

        <button className="btn">More About me</button>
      </div>
      <div className="right-section">
      
      <img src={img1} className='main-image' alt="" />
      <div className="right-right">
      <div className="webdeveloper"><p className="web">👩‍💻Web developer</p></div>
      <div className="Freelancer"><p className="web"> 👧Freelancer</p></div>
      <div className="Designer"><p className="web"> 👩‍🎨 Designer</p></div>
      <div className="Contentcreator"><p className="web">✍️  Content Creator</p></div>

{/* <div className="place-order">The order place  Setting</div>
<div className="friends"> Friends</div>

<div className="clear">Clear-cut</div> */}


{/* <div className="place-order">The order place  Setting</div>
<div className="friends"> Friends</div>

<div className="clear">Clear-cut</div>  */}



 
     
      </div>
      
      
      </div>

      

    

   
    </div>
  )
}

export default Main
