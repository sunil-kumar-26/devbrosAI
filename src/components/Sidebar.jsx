    // import React, { useState } from "react";
    // import "./sidebar.css";
    // import { FaCog, FaShareAlt, FaUser, FaUsers, FaSignInAlt } from "react-icons/fa";

    // const Sidebar = () => {
    //   const [darkMode, setDarkMode] = useState(false);

    //   return (
    //     <div className="sidebar">
    //       <h3 className="sidebar-title">Sidebar</h3>

    //       <ul className="sidebar-list">
    //         <li className="sidebar-item">
    //           <span>Settings</span>
    //           <FaCog className="sidebar-icon" />
    //         </li>

    //         <li className="sidebar-item toggle-item">
    //           <span>Dark Mode</span>
    //           <label className="switch">
    //             <input
    //               type="checkbox"
    //               checked={darkMode}
    //               onChange={() => setDarkMode(!darkMode)}
    //             />
    //             <span className="slider round"></span>
    //           </label>
    //         </li>

    //         <li className="sidebar-item">
    //           <span>Share Site</span>
    //           <FaShareAlt className="sidebar-icon" />
    //         </li>

    //         <li className="sidebar-item">
    //           <span>Users Info</span>
    //           <FaUser className="sidebar-icon" />
    //         </li>

    //         <li className="sidebar-item">
    //           <span>About Us</span>
    //           <FaUsers className="sidebar-icon" />
    //         </li>

    //         <li className="sidebar-item">
    //           <span>Login</span>
    //           <FaSignInAlt className="sidebar-icon" />
    //         </li>
    //       </ul>
    //     </div>
    //   );
    // };

    // export default Sidebar;

// sidebar.jsx
import React from "react";
import "./sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay blur */}
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>

      {/* Sidebar container */}
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <div className="sidebar">
          <button className="close-btn" onClick={onClose}>×</button>
          <ul>
            <li className="sidebar-li">⚙️ Settings</li>
            <li className="sidebar-li" >🌙 Dark Mode</li>
            <li className="sidebar-li">🔗 Share Site</li>
            <li className="sidebar-li">👤 Users Info</li>
            <li  className="sidebar-li">ℹ️ About Us</li>
            <li className="sidebar-li">➡️ Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
