import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
