import React from "react";
import {
  faBriefcase,
  faCartShopping,
  faCloud,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import CallToAction from "./CallToAction";

function ActionButtons() {
  const ctas = [
    {
      id: 0,
      title: "buy",
      text: "buy an arduino",
      icon: faCartShopping,
      backgroundColor: "#e67e22",
    },
    {
      id: 1,
      title: "learn",
      text: "learn arduino",
      icon: faLightbulb,
      backgroundColor: "#00979d",
    },
    {
      id: 2,
      title: "donate",
      text: "donate",
      icon: faHeart,
      backgroundColor: "#bcac99",
    },
    {
      id: 3,
      title: "cloud",
      text: "arduino in the cloud",
      icon: faCloud,
      backgroundColor: "#008184",
    },
    {
      id: 4,
      title: "careers",
      text: "careers",
      icon: faBriefcase,
      backgroundColor: "#95a5a6",
    },
  ];
  return (
    <div className="action-buttons">
      {ctas.map((item) => (
        <CallToAction data={item} key={item.id} />
      ))}
    </div>
  );
}

export default ActionButtons;
