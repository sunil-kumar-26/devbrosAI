import React from 'react';
import './hero.css'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const Hero = () => {
  return (<>
 
    <div className='hero-container'>
    <div className='meet-ai-model'>
      <div className='info'>
      <p className='p1'>Meet AI Model</p>
     <p className='p2'>By DEVbros</p>
    </div>
    </div>
    <img className='company-logo' src="/logo.png" alt="company" />
    </div></>
  )
}

export default Hero;