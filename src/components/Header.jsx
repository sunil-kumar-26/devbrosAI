import React, { useState } from 'react';
import './header.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import { Link } from 'react-router';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div id='my-header'> 
      <header className='header-container'>
        <h3 className='logo'>
          <FaCode className='facode' />
          <p className='devbros' id='small-logo'>DEVbros AI</p>
        </h3>
        <div className='neviagtion'>
          <ul className='list'>
            {/* <Link to={'/'}> <li>Home</li> </Link> */}
            <a href="#my-header"><li>Home</li></a>
           <a href="#information-container"> <li>About</li></a>
            {/* <Link to={'/about'}>About</Link> */}
            <li>Features</li>
          </ul>
          <FaRegCircleUser 
            className='users mydesktop' 
            id='desktop-user' 
            onClick={() => setSidebar(true)} 
          />
          <FontAwesomeIcon 
            className='users myphone' 
            id='desktop-user'  
            icon={faBars} 
            onClick={() => setSidebar(true)}
          />
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebar} onClose={() => setSidebar(false)} />
    </div>
  )
}
export default Header;
