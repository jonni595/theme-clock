import { useState, useEffect, useContext } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { days, months } from "../utils/calendar";
import Clock from "./Clock";
import { ThemeContext } from "../utils/ThemeContext";

const ThemeClock = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hoursForClock = time.getHours() % 12 || 12;
  const formattedHours = hoursForClock.toString().padStart(2, "0");

  const formatAmPm = time.getHours() >= 12 ? "PM" : "AM";
  const minutesForClock =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  const date = `${days[time.getDay()]}, ${months[time.getMonth()]}`;

  const buttonClass = theme === "light" ? "dark" : "light";
  const buttonText = theme === "light" ? "dark mode" : "light mode";
  const buttonIcon =
    theme === "light" ? (
      <BsMoonFill className="icon" />
    ) : (
      <BsSunFill className="icon" />
    );

  return (
    <main className={`container ${theme}`}>
      <button className={`toggle ${buttonClass}`} onClick={toggleTheme}>
        {buttonText}
        {buttonIcon}
      </button>
      <Clock
        hour={`${formattedHours}:${minutesForClock}`}
        format={formatAmPm}
        date={date}
        day={time.getDate()}
      />
    </main>
  );
};

export default ThemeClock;
