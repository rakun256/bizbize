import React from 'react';
import './teamBox.css';

const TeamMember = ({ member }) => {

  return (
    <div className="team-member-container">
      <div className="member-photo-container">
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <img
            src={member.photo.photoUrl}
            alt={member.firstName + member.lastName}
            className="member-photo"
          />
        </a>
      </div>
      <div className='member-title-cover'>
        <h3 className="member-name">{member.firstName}  {member.lastName}</h3>
      <p className="member-department">{member.department}</p>
      </div>
      
    </div>
  );
};

export default TeamMember;
