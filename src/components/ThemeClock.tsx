import { useState, useEffect } from "react";

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

  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  const hoursForClock =
    time.getHours() >= 13 ? time.getHours() % 12 : time.getHours();
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  return (
    <>
      <button className="toggle"></button>
      <main className="container">
        <div className="container__clock">
          <div className="needle hour"></div>
          <div className="needle minute"></div>
          <div className="needle second"></div>
          <div className="center-point"></div>
        </div>
        <div className="container__time">{`${hoursForClock}:${
          time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
        } ${ampm}`}</div>
        <div className="container__date">{`${days[time.getDay()]}, ${
          months[time.getMonth()]
        } <span class="circle">${time.getDate()}</span>`}</div>{" "}
      </main>
    </>
  );
};

export default ThemeClock;
