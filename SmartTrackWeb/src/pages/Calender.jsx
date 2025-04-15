import "../styles/calender.css";
import React from "react";
import CalendarCard from "../../components/CalendarCard";
import CategoriesCard from "../../components/CategoriesCard";
import FavouritesCard from "../../components/FavouritesCard";
import MyCalendarCard from "../../components/MyCalendarCard";

function Calender() {
  return (
    <>
      <CalendarCard></CalendarCard>
      <CategoriesCard></CategoriesCard>
      <FavouritesCard></FavouritesCard>
      <MyCalendarCard></MyCalendarCard>
    </>
  );
}

export default Calender;
