import { useState, useEffect } from "react";
import "./UnbanTimer.css";

const UnbanTimer = () => {
  const [newTime, setNewTime] = useState(new Date());
  const unban = new Date("July 6, 2024 20:12:00 GMT+00:00");

  const getTime = () => {
    const timeDiff = unban - newTime;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d - ${hours}h - ${minutes}min - ${seconds}s`;
  };

  useEffect(() => {
    let timer = setInterval(() => setNewTime(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  });

  return (unban - newTime > 0) ? (
    <small className="unban-timer">Unban de FireDroX dans : {getTime()}</small>
  ) : undefined;
};

export default UnbanTimer;
