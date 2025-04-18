
import React from "react";
import { FaTachometerAlt, FaClock, FaTasks, FaBook, FaSpa, FaCog } from "react-icons/fa";

// Sidebar component
const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">SmartTrack</div>
    <div className="nav-links">
      <div className="nav-btn"><FaTachometerAlt className="nav-icon" /><span>DashBoard</span></div>
      <div className="nav-btn"><FaClock className="nav-icon" /><span>Timeline</span></div>
      <div className="nav-btn"><FaTasks className="nav-icon" /><span>Tasks</span></div>
      <div className="nav-btn"><FaBook className="nav-icon" /><span>Journaling</span></div>
      <div className="nav-btn"><FaSpa className="nav-icon" /><span>Meditation</span></div>
      <div className="nav-btn"><FaCog className="nav-icon" /><span>Settings</span></div>
    </div>
  </div>
);

// Header component
const Header = () => (
  <header className="header">
    <h1>📘 Journaling & Goal-Setting</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Journal</a>
      <a href="#">Goals</a>
    </nav>
  </header>
);

// Hero section
const HeroSection = () => (
  <section className="hero">
    <h2>Track your thoughts and crush your goals!</h2>
  </section>
);

// Journal form
const JournalForm = () => (
  <div className="journal">
    <h3>Journal</h3>
    <textarea placeholder="Write your thoughts..." />
    <button>Save</button>
  </div>
);

// Goals form
const GoalsForm = () => (
  <div className="goals">
    <h3>Goals</h3>
    <input type="text" placeholder="Enter your goal" />
    <input type="date" />
    <button>Submit</button>
  </div>
);

// Journal entries
const JournalEntries = () => (
  <div className="journal-entries">
    <h3>Journal Entries</h3>
    <ul>
      <li><strong>Coding</strong><p>learning Mongodb...</p></li>
      <li><strong>Revision</strong><p>Reviwing lectures before final...</p></li>
      <li><strong>Quiz Retake</strong><p>Reviwing lectures before quiz...</p></li>
    </ul>
  </div>
);


const GoalList = () => (
  <div className="goal-list">
    <h3>Goals</h3>
    <div className="goal-item">
      <p>
        <strong>Nunc pharetra odio nec</strong><br />
        by 04/25/2024
      </p>
      <button>Done</button>
    </div>
    <div className="goal-item">
      <p>
        <strong>Nunc pharetra odio nec</strong><br />
        by 04/25/2024
      </p>
      <button>Done</button>
    </div>
  </div>
);

// Final combined component
const Journal = () => (
  <div className="app-wrapper">
    <div className="main-layout" style={{ display: "flex" }}>
      <Sidebar />
      <div className="container" style={{ flex: 1 }}>
        <Header />
        <HeroSection />
        <main className="main-content">
          <JournalForm />
          <GoalsForm />
        </main>
        <section className="lists">
          <JournalEntries />
          <GoalList />
        </section>
      </div>
    </div>
  </div>
);

export default Journal;

