import React, { useState, useEffect } from "react";
import "./countdown.css";

const CountDown: React.FC = () => {
  const [minutes, setMinutes] = useState(21);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <>
      <div className="timer">
        {minutes}: {seconds}
      </div>
    </>
  );
};

export default CountDown;
