import React from 'react';
import './Features.css';
import { LuLanguages } from "react-icons/lu";
import { MdOutlineStorage } from "react-icons/md";
import { TbFileCode } from "react-icons/tb";
import { CgSmartphoneChip } from "react-icons/cg";

const Features = () => {
  return (
    <>
    <div className="footer-container">
    
        <div className="feature">
            <h2 className='heading2'> Our Main Features </h2>
            <ol className="feature-list">
                <div className='box1'>
                    <div className='lili'>
                        <img src="/Multiple-Languages-1024x640.jpg" alt="" id='fonts-icon'/>
                        <p>Multilingual Support</p>
                        </div>
                <div className='lili'> 
                      <img src="/computer-program-coding-screen.jpg" alt="" id='fonts-icon'/>
                    <p>Chat Memory</p>
                    </div>
                </div>
                <div className="box2">
                    <div className='lili' >
                <img src="/Multiple-Languages-1024x640.jpg" alt="" id='fonts-icon'/>
                     <p>Project-Specific Responses</p>
                    </div> 
                <div className='lili'>
                    <img src="/39285-O1YZDQ.jpg" alt="" id='fonts-icon'/>
                   <p> Smart Code Assistant</p>
                   </div>
                </div>
                
            </ol>
        </div>
    </div>
    </>
  )
}

export default Features;