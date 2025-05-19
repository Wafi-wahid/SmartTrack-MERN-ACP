import React from "react";
import "../styles/meditation.css";
import Sidebar from "../components/Sidebar";

const tips = [
  "Close your eyes and take 3 deep breaths. Inhale calm, exhale stress.",
  "Focus on your breath. Let your thoughts pass like clouds.",
  "Be kind to yourself. You're doing the best you can.",
  "Let go of what you can’t control. Focus on your inner peace.",
  "Sit still for 2 minutes. Feel every breath. That’s meditation.",
  "You don’t need to 'clear your mind' — just notice what’s there.",
  "Gratitude grounds you. Think of 1 thing you're thankful for right now.",
];

function Meditation() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="meditation-wrapper">
      <Sidebar />
      <div className="meditation-container">
        <h2>🧘 Meditation Tip of the Moment</h2>
        <p>{randomTip}</p>
      </div>
    </div>
  );
}

export default Meditation;
