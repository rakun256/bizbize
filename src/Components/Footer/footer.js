import React from 'react'
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import './footer.css'
import {FaXTwitter} from 'react-icons/fa6';


const Footer = () => {
  return (
    <div className='footer-cover'>
        <div className='footer-top'>
            <div className='footer-logo-container'>
                <img alt='bizbize-logo' src='Images/bizbize.webp'/>
                <img alt='sky-lab-logo' src='Images/skylab1.webp'/>
            </div>
            <div className='footer-links-icon-container'>
            <a href="https://www.instagram.com/ytuskylab"><FaInstagram className='fa-logo-footer'/></a>
            <a href="https://www.youtube.com/channel/UCF_qBKpUnM3X_C3L-gLEO4A"><FaYoutube className='fa-logo-footer'/></a>
            <a href="https://www.linkedin.com/company/ytuskylab/"><FaLinkedin className='fa-logo-footer'/></a>
            <a href="https://discord.com/invite/6jFBjH8y63"><FaDiscord className='fa-logo-footer'/></a>
            <a href="https://x.com/skylabkulubu"><FaXTwitter className='fa-logo-footer'/></a>
            </div>
        </div>
        
        <div className='footer-bottom'>
            <p className='footer-text'>
                SKY LAB Weblab ekip üyeleri <a href='https://github.com/rakun256'>Emre Uslu</a>, <a href='https://github.com/alperkyoruk'>Alper Kaan Yörük</a> ve <a href='https://github.com/kuzeysinay'>Kuzey Sınay</a> tarafından yapıldı.
            </p>
            <p className='footer-year'>2024</p>
        </div>
    </div>
  )
}

export default Footer