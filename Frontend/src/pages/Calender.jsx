import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "../styles/calender.css";
import Sidebar from "../components/Sidebar";

function Calender() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");

  const BASE_URL = "http://localhost:5000/calender";

  const fetchEvents = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setEvents(res.data);

      const filtered = res.data.filter(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );
      setSelectedDateEvents(filtered);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const filtered = events.filter(
      (event) =>
        new Date(event.date).toDateString() === selectedDate.toDateString()
    );
    setSelectedDateEvents(filtered);
  };

  const handleAdd = async () => {
    if (!newEvent.trim()) return;

    try {
      await axios.post(BASE_URL, {
        date: date.toISOString(),
        title: newEvent.trim(),
      });
      setNewEvent("");
      await fetchEvents();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      await fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="calendar-wrapper">
      <Sidebar />
      <div className="calendar-content">
        <h1 className="calendar-heading">🗓️ Smart Calendar</h1>
        <p className="calendar-description">
          Click a date to view or add events to your personalized calendar.
        </p>
        <Calendar onChange={handleDateChange} value={date} />
        <div className="calendar-events">
          <h3>Events on {date.toDateString()}</h3>
          <ul>
            {selectedDateEvents.length === 0 && <p>No events for this date.</p>}
            {selectedDateEvents.map((event) => (
              <li key={event._id}>
                {event.title}
                <button onClick={() => handleDelete(event._id)}>🗑️</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="New event"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
          <button onClick={handleAdd}>Add Event</button>
        </div>
      </div>
    </div>
  );
}

export default Calender;
