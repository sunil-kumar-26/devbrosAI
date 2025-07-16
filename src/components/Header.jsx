import React from 'react';
import './header.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
const Header=()=>{
    return(
        
        <div>
            <header className='header-container'>
             <h3 className='logo'><FaCode className='facode'/><p className='devbros'>DEVbros AI</p></h3>
             <div className='neviagtion'>
                <ul className='list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                </ul>
                  <FaRegCircleUser className='users'   />
             </div>
 
                 
                

            </header>

        </div>
       
    )
}

export default Header;
