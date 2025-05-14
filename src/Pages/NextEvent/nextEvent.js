import React, { useState, useEffect } from "react";
import "./nextEvent.css";
import Countdown from "../../Components/Countdown/countdown";
import axios from "axios";

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

const NextEvent = () => {
  const [eventData, setEventData] = useState(null);
  const [countdownTarget, setCountdownTarget] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.yildizskylab.com/api/events/getAllBizbizeEvents");
        
        // Filter for active events
        const activeEvents = response.data.data.filter(event => event.isActive === true);
        
        if (activeEvents.length > 0) {
          // Find the next upcoming event
          const today = new Date();
          const upcomingEvents = activeEvents.filter(event => {
            const eventDate = parseEventDate(event.date);
            return eventDate > today;
          });
          
          // Sort by date (closest future date first)
          upcomingEvents.sort((a, b) => {
            const dateA = parseEventDate(a.date);
            const dateB = parseEventDate(b.date);
            return dateA - dateB;
          });
          
          if (upcomingEvents.length > 0) {
            const nextEvent = upcomingEvents[0];
            setEventData(nextEvent);
            setCountdownTarget(parseEventDate(nextEvent.date));
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  /*const formattedDate = countdownTarget.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }); */

  return (
    <div className="next-event" id="next-event">
      <div className="next-left">
        <h1 className="next-title">
          SIRADAKİ <br /> ETKİNLİĞİMİZ
        </h1>
        {countdownTarget && <Countdown target={countdownTarget} />}
         
      </div>
      <div className="event-cover">
        {eventData && (
          <>
            <a href={eventData.linkedin} target="_blank" rel="noopener noreferrer"><div className="event-poster">
              <img alt="event-poster" src={eventData.photos[0].photoUrl} />
            </div></a>
            <div className="event-title">
              <p className="next-guest-name">{eventData.guestName}</p>
              <p className="next-guest-pos">{eventData.title}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NextEvent;
