import React from "react";
import "./App.css"; // Import CSS file for styling
import AnimatedButton from "./components/Button";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Animation Demo</h1>
        <div className="button-container">
          <AnimatedButton text="Rotate" animationType="rotate" />
          <AnimatedButton text="Bounce" animationType="bounce" />
          <AnimatedButton text="Fade Up" animationType="fade-up" />
        </div>
      </header>
      <main className="App-main">
        <div className="content-container">
          <div className="animated-content fade-in">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sed accumsan elit.
            </p>
          </div>
          <div className="animated-content slide-in-left">
            <h2>Services</h2>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="animated-content zoom-in">
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
