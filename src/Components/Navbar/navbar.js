import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [click, setClick] = useState(false)

  return (
    <div className='navbar-container'>
        <Link to='main-page'smooth={true} offset={50} duration={500}><img alt='logo' src='Images/bizbize.png'/></Link>
        <div className='links'>
        <Link to='next-event' smooth={true} offset={50} duration={500}>
          SIRADAKİ ETKİNLİK
        </Link>
        <Link to='prevent' smooth={true} offset={50} duration={500}>
          ETKİNLİKLERİMİZ
        </Link>
        <Link to='event-team' smooth={true} offset={50} duration={500}>
          EKİBİMİZ
        </Link>
        </div>
    </div>
  )
}

export default Navbar