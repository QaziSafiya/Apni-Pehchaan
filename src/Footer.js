import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
      <h1 className="footer-heading">Connect with me</h1>
      <div className="social-icons">
        <div className="instagram"><a href="https://www.instagram.com/webyatra_210?utm_source=qr&igsh=YWxkZzg2OHhzZ3N3"><FaInstagram  className='icons' /></a></div>
        <div className="twitter"><a href="https://x.com/Safiya85395?t=7eKHK_Iqya1VfRMU6hcpRw&s=09"><FaTwitter className='icons' /></a></div>
        <div className="github"><a href="https://github.com/QaziSafiya"><FaGithub  className='icons'/></a></div>
        <div className="linkedin"><a href="https://www.linkedin.com/in/safiya-siddiqui-566009214/"><FaLinkedin  className='icons'/></a></div>
       
      </div>
      <h3>Email- siddiquisafiya69@gmail.com</h3>
        <h3>Contact- 6396139911</h3>
    </div>
  )
}

export default Footer
