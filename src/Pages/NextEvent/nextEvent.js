import React, { useState, useEffect } from "react";
import "./nextEvent.css";
import Countdown from "../../Components/Countdown/countdown";
import axios from "axios";

const NextEvent = () => {
  const [eventData, setEventData] = useState(null);
  const [countdownTarget, setCountdownTarget] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.bin.net.tr:8080/api/events/getActiveEvent?isActive=1");
        setEventData(response.data.data); 
        setCountdownTarget(new Date(response.data.data.date));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <div className="event-poster">
              <img alt="event-poster" src={eventData.photos[0].photoUrl} />
            </div>
            <div className="event-title">
              <p className="guest-name">{eventData.guestName}</p>
              <p className="guest-pos">{eventData.title}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NextEvent;
