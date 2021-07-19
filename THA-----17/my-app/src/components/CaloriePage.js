import React from "react";
import "../styles/CaloriePage.css";
import CalorieBox from "./CalorieBox";

const calorieArr = [
  {
    title: "Pizza",
    calories: 40
  },
  {
    title: "Burger",
    calories: 30
  },
  {
    title: "MacAlooTikki",
    calories: 20
  },
  {
    title: "Fries",
    calories: 60
  },
  {
    title: "Pasta",
    calories: 70
  },
];

function CaloriePage() {
  return (
    <div className="page">
      <div className="container">
        {calorieArr.map(element => (
          <CalorieBox title={element.title} calories={element.calories} />
        ))}
      </div>
    </div>
  );
}

export default CaloriePage;