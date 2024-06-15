import React from "react";
import "./Button.css";

const AnimatedButton = ({ text, animationType }) => {
  return <button className={`animated-button ${animationType}`}>{text}</button>;
};

export default AnimatedButton;
