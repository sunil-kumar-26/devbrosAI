import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Hero from './pages/Hero.jsx';
import Info from './pages/Info.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx';

function App() {


  return (
    <>
    <div className='App'>
     <Header/>
     <Hero/>
     <Info/>
   <Footer/>
     </div>
    </>
  )
}

export default App
