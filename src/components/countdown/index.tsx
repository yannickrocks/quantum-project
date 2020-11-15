import moment from "moment";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./countdown.css";

const CountDown: React.FC = () => {
  const [hours, setHours] = useState("22");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [endCookie, setEndCookie] = useCookies(["CountDownCrumble"]);

  const addNewCookieOrSetTimer = () => {
    if (Object.keys(endCookie).length !== 0) {
      const cookieEnd = moment(endCookie["CountDownCrumble"]);
      const timeRemaining = moment.duration(cookieEnd.diff(moment()));

      timeRemaining.hours() < 10
        ? setHours(timeRemaining.hours().toString().padStart(2, "0"))
        : setHours(timeRemaining.hours().toString());

      timeRemaining.minutes() < 10
        ? setMinutes(timeRemaining.minutes().toString().padStart(2, "0"))
        : setMinutes(timeRemaining.minutes().toString());

      timeRemaining.seconds() < 10
        ? setSeconds(timeRemaining.seconds().toString().padStart(2, "0"))
        : setSeconds(timeRemaining.seconds().toString());
    } else {
      const cookieExpires = moment().add(22, "h");

      setEndCookie("CountDownCrumble", cookieExpires, {
        path: "/finalvoyage",
        expires: cookieExpires.toDate(),
      });
    }
  };

  useEffect(addNewCookieOrSetTimer, []);

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
        const hoursInNumber = parseInt(hours);
        if (minutesInNumber === 0 && hoursInNumber === 0) {
          clearInterval(timer);
        } else {
          if (minutesInNumber === 0 && hoursInNumber > 0) {
            setMinutes("59");
            setHours((hoursInNumber - 1).toString().padStart(2, "0"));
          } else if (minutesInNumber < 11) {
            setMinutes((minutesInNumber - 1).toString().padStart(2, "0"));
          } else {
            setMinutes((minutesInNumber - 1).toString());
          }
          setSeconds("59");
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <>
      <div className="timer">
        {hours}:{minutes}:{seconds}
      </div>
    </>
  );
};

export default CountDown;
