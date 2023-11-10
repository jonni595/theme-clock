interface ClockProps {
  date: string;
  day: number;
  format: string;
  hour: string | number;
}

const Clock: React.FC<ClockProps> = ({ hour, day, format, date }) => {
  return (
    <>
      <div className="container__time">
        <h1>{hour}</h1>
        <span>{format}</span>
      </div>
      <div className="container__date">
        <span>{date}</span>
        <span className="circle">{day}</span>
      </div>
    </>
  );
};

export default Clock;
