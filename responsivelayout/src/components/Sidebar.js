import React from "react";
import "./Sidebar.css"; // Import sidebar-specific styles

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
          <li>
            <a href="#">Link 5</a>
          </li>
        </ul>
      </nav>
      <button className="close-sidebar-btn" onClick={toggleSidebar}>
        Close Sidebar
      </button>
    </aside>
  );
};

export default Sidebar;
