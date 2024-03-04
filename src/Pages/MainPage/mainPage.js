import React from 'react'
import './mainPage.css'

const MainPage = () => {
  return (
    <div className='main-cover'>
        <img className='bizbize-logo' src={'Images/bizbize.png'} alt='logo'/>

        <div className='container'>
          <h1>Kariyerini Zirveye Taşımaya Hazır Mısın?</h1>
          <button>Kayıt Ol!</button>
        </div>
        
    </div>
  )
}

export default MainPage