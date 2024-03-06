import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import './previousEventBox.css'

const PreviousEventBox = () => {
  return (
    <div className='prevent-box'>
      <div className='guest-info'>
        <div classname='guest-name-container'>
          <div className='guest-name'>Duygu Çolak</div>
          <a href="https://www.linkedin.com/in/duygusenguler/"><FaLinkedin className='linkedin-logo'/></a>
        </div>
        <div className='guest-title'>Scrum Master</div>
        <div className='guest-corp'>@Vodafone</div>
      </div>
      
      <div className='date'> 4 Mart 2024 </div>
      <img className='guest-photo' src={'Images/duygu_colak.png'} alt='Guest'/>
      
    </div>
  )
}

export default PreviousEventBox;