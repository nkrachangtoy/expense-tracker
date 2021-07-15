import React from "react";

const Calendar = () => {
  const today = new Date().toDateString();

  return (
    <div className="calendar">
      <h3 className="calendar__current-date">{today}</h3>
      <ul className="calendar__weekly">
        <li className="calendar__item">
          <p className="calendar__day">Sun</p>
          <p className="calendar__date">11</p>
        </li>
        <li className="calendar__item">
          <p className="calendar__day">Mon</p>
          <p className="calendar__date">12</p>
        </li>
        <li className="calendar__item">
          <p className="calendar__day">Tue</p>
          <p className="calendar__date">13</p>
        </li>
        <li className="calendar__item">
          <p className="calendar__day">Wed</p>
          <p className="calendar__date">14</p>
        </li>
        <li className="calendar__item">
          <p className="calendar__day">Thu</p>
          <p className="calendar__date">15</p>
        </li>
        <li className="calendar__item">
          <p className="calendar__day">Fri</p>
          <p className="calendar__date">16</p>
        </li>
        <li className="calendar__item">
          <p className="calendar__day">Sat</p>
          <p className="calendar__date">17</p>
        </li>
      </ul>
    </div>
  );
};

export default Calendar;
