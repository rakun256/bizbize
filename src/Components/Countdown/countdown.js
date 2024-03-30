import React, { useState, useEffect } from "react";
import "./countdown.css";

const Countdown = ({ target }) => {
  const getTimeLeft = () => {
    const totalTimeLeft = target - new Date();
    if (totalTimeLeft <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(((totalTimeLeft / (1000 * 60 * 60)) % 24));
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [target]);

  const labels = {
    days: "Gün",
    hours: "Saat",
    minutes: "Dakika",
    seconds: "Saniye",
  };

  if (timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
    return null; // If time left is below or equal to 0, return nothing
  }

  return (
    <div className="countdown">
      <div className="content">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label"> {labels[label]} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
