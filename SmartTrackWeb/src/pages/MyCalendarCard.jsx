import React from 'react';

function MyCalendarCard() {
  return (
    <div className="card">
      <div className="card-header">
        <span>My Calendar</span>
      </div>
      <div className="card-body">
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Daily Tasks</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Daily Tasks</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Daily Tasks</span>
        </label>
      </div>
    </div>
  );
}

export default MyCalendarCard;
