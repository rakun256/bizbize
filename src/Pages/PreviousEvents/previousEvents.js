import React from 'react'
import './previousEvents.css'
import PreviousEventBox from './previousEventBox'

const PreviousEvents = () => {
  return (
    <div className='previous-events' id='prevent'>
      <h1 className='prevent-title'>ETKİNLİKLERİMİZ</h1>
      <div className='prevent-container'>
      <PreviousEventBox/>
      <PreviousEventBox/>
      <PreviousEventBox/>
    </div>
    </div>
    
  )
}

export default PreviousEvents