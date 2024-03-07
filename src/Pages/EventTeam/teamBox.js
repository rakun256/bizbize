import React from 'react';
import './teamBox.css';

const TeamMember = ({ member }) => {
  const handleImageClick = () => {
    window.location.href = member.linkedin;
  };

  return (
    <div className="team-member-container">
      <div className="member-photo-container">
        <img
          src={member.photo.photoUrl}
          alt={member.firstName + member.lastName}
          onClick={handleImageClick}
          className="member-photo"
        />
      </div>
      <h3 className="member-name">{member.firstName}  {member.lastName}</h3>
      <p className="member-department">{member.department}</p>
    </div>
  );
};

export default TeamMember;
