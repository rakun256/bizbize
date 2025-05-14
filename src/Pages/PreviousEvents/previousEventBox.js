import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./previousEventBox.css";

// Helper function to parse date from either format
const parseEventDate = (dateString) => {
  // Check if the date is in the new format: "DD-MM-YYYY HH:mm"
  if (dateString.includes('-') && !dateString.includes('T')) {
    const dateParts = dateString.split(/[\s-:]/);
    return new Date(
      parseInt(dateParts[2]), // year
      parseInt(dateParts[1]) - 1, // month (0-based)
      parseInt(dateParts[0]), // day
      parseInt(dateParts[3] || 0), // hour
      parseInt(dateParts[4] || 0)  // minute
    );
  } 
  // Old format: ISO string "YYYY-MM-DDThh:mm:ss.sssZ"
  else {
    return new Date(dateString);
  }
};

const PreviousEventBox = ({ event }) => {
  let eventDate = parseEventDate(event.date);
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
