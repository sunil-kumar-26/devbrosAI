import { IoSettingsSharp } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { FaShareNodes } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";   
import { BsExclamationCircleFill } from "react-icons/bs";
import { IoLogInSharp } from "react-icons/io5";
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
            <li className="sidebar-li"> <p className="sidebar-items">Settings</p><IoSettingsSharp className="sidebar-icons"/></li>
            <li className="sidebar-li" > <p className="sidebar-items">Dark Mode</p><MdLightMode className="sidebar-icons" size={'27px'} /></li>
            <li className="sidebar-li"><p className="sidebar-items">Share Site</p><FaShareNodes className="sidebar-icons" /></li>
            <li className="sidebar-li"><p className="sidebar-items"> Users Info</p><FaUser className="sidebar-icons" /></li>
            <li  className="sidebar-li"> <p className="sidebar-items">About Us</p><BsExclamationCircleFill className="sidebar-icons"  /></li>
            <li className="sidebar-li"><p className="sidebar-items">Login</p><IoLogInSharp className="sidebar-icons" size={'27px'}/></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
