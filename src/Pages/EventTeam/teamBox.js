// TeamMember.js

import React from 'react';
import './teamBox.css'; // Import the CSS file

const TeamMember = () => {
  const memberInfo = {
    imageSrc: 'Images/ben.jpg',
    memberName: 'Emre Uslu',
    memberDepartment: 'Matematik Mühendisliği',
    linkedinUrl: 'https://www.linkedin.com/in/emre-uslu-31a042291/',
  };

  const handleImageClick = () => {
    window.location.href = memberInfo.linkedinUrl;
  };

  return (
    <div className="team-member-container">
      <div className="member-photo-container">
        <img
          src={memberInfo.imageSrc}
          alt={memberInfo.memberName}
          onClick={handleImageClick}
          className="member-photo"
        />
      </div>
      <h3 className="member-name">{memberInfo.memberName}</h3>
      <p className="member-department">{memberInfo.memberDepartment}</p>
    </div>
  );
};

export default TeamMember;
