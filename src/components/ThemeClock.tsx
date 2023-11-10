import { useState, useEffect } from "react";
import { days, months } from "../utils/calendar";
import Clock from "./Clock";

const ThemeClock = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hoursForClock =
    time.getHours() >= 13 ? time.getHours() % 12 : time.getHours();
  const formatAmPm = time.getHours() >= 12 ? "PM" : "AM";
  const minutesForClock =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  const date = `${days[time.getDay()]}, ${months[time.getMonth()]}`;

  return (
    <main className="container">
      <button className="toggle">Button</button>
      <Clock
        hour={`${hoursForClock}:${minutesForClock}`}
        format={formatAmPm}
        date={date}
        day={time.getDate()}
      />
    </main>
  );
};

export default ThemeClock;
