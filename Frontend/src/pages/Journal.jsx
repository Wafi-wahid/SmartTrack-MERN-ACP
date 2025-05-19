<<<<<<< HEAD
import React from "react";
import {
  FaTachometerAlt,
  FaClock,
  FaTasks,
  FaBook,
  FaSpa,
  FaCog,
} from "react-icons/fa";
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTachometerAlt, FaClock, FaTasks, FaBook, FaSpa, FaCog } from "react-icons/fa";
>>>>>>> a0f4318d072cc230e8fbb100aee74cf608b1ba0a

// Sidebar component
const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">SmartTrack</div>
    <div className="nav-links">
      <div className="nav-btn">
        <FaTachometerAlt className="nav-icon" />
        <span>DashBoard</span>
      </div>
      <div className="nav-btn">
        <FaClock className="nav-icon" />
        <span>Timeline</span>
      </div>
      <div className="nav-btn">
        <FaTasks className="nav-icon" />
        <span>Tasks</span>
      </div>
      <div className="nav-btn">
        <FaBook className="nav-icon" />
        <span>Journaling</span>
      </div>
      <div className="nav-btn">
        <FaSpa className="nav-icon" />
        <span>Meditation</span>
      </div>
      <div className="nav-btn">
        <FaCog className="nav-icon" />
        <span>Settings</span>
      </div>
    </div>
  </div>
);

// Header component
const Header = () => (
  <header className="header">
    <h1>📘 Journaling</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Journal</a>
    </nav>
  </header>
);

// Hero section
const HeroSection = () => (
  <section className="hero">
    <h2>Track your thoughts and crush your goals!</h2>
  </section>
);

// Main journal component
const Journal = () => {
  const [entry, setEntry] = useState("");
  const [title, setTitle] = useState("");
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch journal entries
  const fetchEntries = async () => {
    const res = await axios.get("http://localhost:5000/api/journals");
    setEntries(res.data);
  };

<<<<<<< HEAD
// Journal entries
const JournalEntries = () => (
  <div className="journal-entries">
    <h3>Journal Entries</h3>
    <ul>
      <li>
        <strong>Coding</strong>
        <p>learning Mongodb...</p>
      </li>
      <li>
        <strong>Revision</strong>
        <p>Reviwing lectures before final...</p>
      </li>
      <li>
        <strong>Quiz Retake</strong>
        <p>Reviwing lectures before quiz...</p>
      </li>
    </ul>
  </div>
);

const GoalList = () => (
  <div className="goal-list">
    <h3>Goals</h3>
    <div className="goal-item">
      <p>
        <strong>Nunc pharetra odio nec</strong>
        <br />
        by 04/25/2024
      </p>
      <button>Done</button>
    </div>
    <div className="goal-item">
      <p>
        <strong>Nunc pharetra odio nec</strong>
        <br />
        by 04/25/2024
      </p>
      <button>Done</button>
=======
  useEffect(() => {
    fetchEntries();
  }, []);

  // Save new or edited journal
  const handleSave = async () => {
    if (!title || !entry) return alert("Title and Entry required");

    if (editingId) {
      await axios.put(`http://localhost:5000/api/journals/${editingId}`, { title, entry });
      setEditingId(null);
    } else {
      await axios.post("http://localhost:5000/api/journals", { title, entry });
    }

    setTitle("");
    setEntry("");
    fetchEntries();
  };

  // Delete journal entry
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/journals/${id}`);
    fetchEntries();
  };

  // Edit journal entry
  const handleEdit = (entry) => {
    setTitle(entry.title);
    setEntry(entry.entry);
    setEditingId(entry._id);
  };

  return (
    <div className="app-wrapper">
      <div className="main-layout" style={{ display: "flex" }}>
        <Sidebar />
        <div className="container" style={{ flex: 1 }}>
          <Header />
          <HeroSection />
          <main className="main-content">
            <div className="journal">
              <h3>{editingId ? "Edit Journal" : "New Journal Entry"}</h3>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Write your thoughts..."
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
              <button onClick={handleSave}>{editingId ? "Update" : "Save"}</button>
            </div>
          </main>

          <section className="journal-entries">
            <h3>Journal Entries</h3>
            <ul>
              {entries.map((j) => (
                <li key={j._id} style={{ marginBottom: "1rem" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div>
      <strong>{j.title}</strong>
      <p>{j.entry}</p>
    </div>
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={() => handleEdit(j)}>Edit</button>
      <button onClick={() => handleDelete(j._id)}>Delete</button>
>>>>>>> a0f4318d072cc230e8fbb100aee74cf608b1ba0a
    </div>
  </div>
</li>

              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Journal;
