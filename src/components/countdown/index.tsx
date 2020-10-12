import React, { useState, useEffect } from "react";
import "./countdown.css";

const CountDown: React.FC = () => {
  const [minutes, setMinutes] = useState("22");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const timer = setInterval(() => {
      const secondsInNumber = parseInt(seconds);
      if (secondsInNumber > 0) {
        if (secondsInNumber < 11) {
          const allowZeroLead = (secondsInNumber - 1)
            .toString()
            .padStart(2, "0");
          setSeconds(allowZeroLead);
        } else {
          setSeconds((secondsInNumber - 1).toString());
        }
      }

      if (secondsInNumber === 0) {
        const minutesInNumber = parseInt(minutes);
        if (minutesInNumber === 0) {
          clearInterval(timer);
        } else {
          if (minutesInNumber < 11) {
            setMinutes((minutesInNumber - 1).toString().padStart(2, "0"));
          } else {
            setMinutes((minutesInNumber - 1).toString());
          }
          setSeconds("59");
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
