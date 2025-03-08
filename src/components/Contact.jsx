import React, { useState } from 'react';
import contactImage from '../images/contact.png';


const Contact = () => {
    // Set the state. Make a new item and a function to change it, set the original state.
    const [isShown, setIsShown] = useState(false);
   
    // Make the function to change the shown to the opposite boolen of what it currently is
    const toggleContactBox = () => {
        setIsShown(!isShown);
      };
  return (
    <div className="contact-info">
        {/* Only show the box if the value is true */}
        {isShown && (
        <div id="contact-box">
            <h1>Emily Tuttle</h1>
            <p>Email: tut20001@byui.edu</p>
            <p><a href="https://www.linkedin.com/in/emily-tuttle-7124a121a/" target="_blank"rel="noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/emilytuttle" target="_blank"rel="noreferrer">GitHub</a></p>
        </div> )}
        {/* Event listener to change the state of if the button is clicked or not */}
        <div id="contact-btn" onClick={toggleContactBox}>
            <img src={contactImage} alt="contact-icon" className="contact-icon"/>
        </div>
    </div>
  )
}

export default Contact