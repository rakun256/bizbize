import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./previousEventBox.css";

const PreviousEventBox = ({ event }) => {
  let eventDate = new Date(event.date);
  return (
    <div className='prevent-box'>
      <div className='guest-info'>
        <div className='guest-name'>{event.guestName}</div>
        <a href={event.linkedin} target='_blank' rel="noreferrer">
          <FaLinkedin className='linkedin-logo' />
        </a>
        <div className='guest-title'>{event.title.split("@")[0]}</div>
        <div className='guest-corp'>@{event.title.split("@")[1]}</div>
      </div>

      <div className='date'> {eventDate.toLocaleDateString('default', {year:"numeric", day:"numeric", month: 'long' })} </div>
      <img className='guest-photo' src={event.photos[0].photoUrl} alt='Guest' />
    </div>
  );
};

export default PreviousEventBox;
