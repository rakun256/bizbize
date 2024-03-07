import React, { useState, useEffect } from 'react';
import TeamMember from './teamBox';
import axios from 'axios';
import './eventTeam.css';

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('https://api.bin.net.tr:8080/api/staff/getStaff');
        setTeamData(response.data.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className='event-team'>
      <h2 className='team-title'>EKİBİMİZ</h2>
      <div className='member-grid'>
        {teamData.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
