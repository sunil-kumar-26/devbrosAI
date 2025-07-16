import React from 'react';
import './footer.css';
import { FaGithub, FaPhone } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md"; 
const Footer = () => {
  return (
    <>

    <div className='footer-card'>
        <div className='card-1'>
          <h2>Contact-Us</h2>
         <ul className='contact-us'>
         <li className='contact-list'> Call | +918534853275</li>
         <li className='contact-list' >Mail | suniels794@gmail.com</li>
         <li className='contact-list' >Address | khandari, Agra 282005</li>
         {/* <li className='contact-list' > </li> */}
         </ul>
        </div>
        <div className='card-2'>
        <h2> Legal & Policies</h2>
         <ul className='contact-us'>
         <li className='contact-list'>Privacy Policy</li>
         <li className='contact-list' >Terms & Conditions</li>
         <li className='contact-list' >Cookie Policy</li>
         <li className='contact-list' >License</li>
         </ul>
        </div>
        <div className='card-22'>
        <h2  className='product-services' >Product/Service</h2>
         <ul className='social-media-2' style={{textDecoration:'none'}}>
          <li className='contact-list' style={{padding:'0px 10px',textDecoration:'none',padding:'5px'}} >API Documentation </li>
          <li className='contact-list' style={{padding:'0px 10px',textDecoration:'none',padding:'5px'}} >Developer Docs </li>
          <li className='contact-list' style={{padding:'0px 10px',textDecoration:'none',padding:'5px'}} >Support Portal </li>
          <li className='contact-list' style={{padding:'0px 10px',textDecoration:'none',padding:'5px'}} >Feedback Page </li>
         </ul>
        </div>
        <div className='card-2'>
        <h2 style={{textAlign:'center'}} >Social Media</h2>
         <ul className='social-media' style={{textDecoration:'none'}}>
         <li className='contact-list' style={{padding:'0px 10px',textDecoration:'none'}} ><a href="https://github.com/sunil-kumar-26 " style={{textDecoration:'none'}}><FaGithub size={'40px'} color='black' /></a> </li>
         <li className='contact-list' style={{padding:'0px 10px',textDecoration:'none'}}  ><a href="sunilworld1234ss@gmail.com " style={{textDecoration:'none'}}> <img src="/icons8-gmail-48.png" alt="gmail" className='mail'/> </a></li>
         <li className='contact-list' style={{padding:'0px 10px',textDecoration:'none'}}  ><a href="https://www.instagram.com/suniel_singh_84000/?hl=en " style={{textDecoration:'none'}}><img src="/2227.jpg" alt="gmail" className='mail'/> </a></li>
         <li className='contact-list' style={{padding:'0px 10px',textDecoration:'none'}}  >< FaSquareXTwitter  color='black' size={'40px'}/></li>
         </ul>
        </div>
 
        </div>
         <div className="reserved">© 2025-2028 DEVbros.com</div>
    </>
  )
}

export default Footer