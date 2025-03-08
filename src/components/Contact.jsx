import React, { useState } from 'react';
import contactImage from '../images/contact.png';


const Contact = () => {
    const [isShown, setIsShown] = useState(false);
   
    const toggleContactBox = () => {
        setIsShown(!isShown);
      };
  return (
    <div className="contact-info">
        {isShown && (
        <div id="contact-box">
            <h1>Emily Tuttle</h1>
            <p>Email: tut20001@byui.edu</p>
            <p><a href="https://www.linkedin.com/in/emily-tuttle-7124a121a/" target="_blank"rel="noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/emilytuttle" target="_blank"rel="noreferrer">GitHub</a></p>
        </div> )}
        <div id="contact-btn" onClick={toggleContactBox}>
            <img src={contactImage} alt="contact-icon" className="contact-icon"/>
        </div>
    </div>
  )
}

export default Contact