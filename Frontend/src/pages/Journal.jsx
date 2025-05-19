import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import "../styles/journal.css";

// Header component
const Header = () => (
  <header className="header">
    <h1>📘 Journaling</h1>
    <nav>
      <Link to="/">DashBoard</Link>
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
    const res = await axios.get("http://localhost:5000/journal");
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Save new or edited journal
  const handleSave = async () => {
    if (!title || !entry) return alert("Title and Entry required");

    if (editingId) {
      await axios.put(`http://localhost:5000/journal/${editingId}`, {
        title,
        entry,
      });
      setEditingId(null);
    } else {
      await axios.post("http://localhost:5000/journal", { title, entry });
    }

    setTitle("");
    setEntry("");
    fetchEntries();
  };

  // Delete journal entry
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/journal/${id}`);
      fetchEntries();
    } catch (error) {
      console.error("Failed to delete entry:", error);
      alert("Something went wrong while deleting the entry.");
    }
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
              <button onClick={handleSave}>
                {editingId ? "Update" : "Save"}
              </button>
            </div>
          </main>

          <section className="journal-entries">
            <h3>Journal Entries</h3>
            <ul>
              {entries.map((j) => (
                <li key={j._id} style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <strong>{j.title}</strong>
                      <p>{j.entry}</p>
                      <p>
                        <small>{new Date(j.date).toLocaleString()}</small>
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button onClick={() => handleEdit(j)}>Edit</button>
                      <button onClick={() => handleDelete(j._id)}>
                        Delete
                      </button>
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
