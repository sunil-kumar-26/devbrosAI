import react from 'react';
import './info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToCircle, faCalculator, faCode, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
function Info(){
    return(
        <>
      
        <div  className='information-container ' id='information-container'>
          <p className='para1'>DEVbros AI is a lightweight AI model</p>
          <p className='para2'>delivering fast, accurate results in text generation</p>
          <p className='para3'>And helps you to get out of the problems</p>
          <button className='try'>Get Try</button>
          <img src="/font.png" className='company-symbol' alt="company" />
        </div>
        <div className='brain-container'>
          <div className='inside-brain-container'>
            <h2 className='ask'>Ask Your</h2>
            <div className='small-container'>   
              <h2>Query</h2>
         <FontAwesomeIcon icon={faCode} bounce  size='xl' className='font'/>
         </div>
          <h5 className='heading5'> & Get your resolution fast</h5>
          </div>
         
        </div>
        </>
    )
}

export default Info;