import React from 'react'
import './Acheive.scss';
import img1 from './assets/icons/img1.png';
import react from './assets/icons/react.png'
const Acheive = () => {
  return (

   <div className="acheivement">
   <h1 className="acheivement-heading">Acheivements</h1>
     <div className='acheive'>



<img src={img1} className='acheive-image' alt="" />
     
   
      <div className="Badge"><p className="web"> 🏆Top design Badge</p></div>
      <div className="Contributer"><p className="web"> 🎉Top 12 contributer</p></div>
      <div className="mlsa-lead"><p className="web">🏅Beta MLSA</p></div>
      
    </div>
   </div>
  )
}

export default Acheive
