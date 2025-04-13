import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarCard() {
  return (
    <div className="card calendar-card">
      <div className="card-body">
        <Calendar />
      </div>
    </div>
  );
}

export default CalendarCard;
