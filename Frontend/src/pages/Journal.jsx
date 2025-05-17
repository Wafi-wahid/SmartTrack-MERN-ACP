import "../styles/journal.css";
import React from "react";

import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import JournalEnteries from "../../components/JournalEntries";
import JournalForm from "../../components/JournalForm";
import GoalList from "../../components/GoalList";
import GoalForm from "../../components/GoalsForm";
import Sidebar from "../../components/Sidebar";
function Journal() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <JournalForm></JournalForm>
      <JournalEnteries></JournalEnteries>
      <GoalForm></GoalForm>
      <GoalList></GoalList>
      <Sidebar></Sidebar>
    </>
  );
}

export default Journal;
