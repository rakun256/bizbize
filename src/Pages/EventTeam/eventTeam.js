import React from 'react';
import TeamMember from './teamBox'; // Assuming TeamMember component is in the same directory
import './eventTeam.css'

const OurTeam = () => {
  return (
    <div className='event-team'>
      <h2 className='team-title'>EKİBİMİZ</h2>
      <div className='member-grid'>
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      </div>
    </div>
  );
};

export default OurTeam;