import React, {useState} from 'react'
import heroImage from '../images/work.jpg'

const Home = () => {
  // Set the state. Make a new item and a function to change it, set the original state.
  const [name, setName] = useState(true);
  
  // make a function to change the name when event listeners notice it when the user starts typing in the box that has an even listener attached
  const updateName = (event) => {
    setName(event.target.value);
  }

  

  return (
    <div>
      <img src={heroImage} alt="hero" className="hero-image"/>
      
      <div>What is your name?</div>
      <input
      // Add event listener
        type="text" value={name} onChange={updateName}placeholder="Enter your name"
      />
      {name && <h2>Welcome, {name}!</h2>}
      <p id="welcome-box">Welcome to portfolio page! Follow the links to learn more about me, my projects, and my work history! Or, use the button in the bottom right to get my contact information.</p>

      
    </div>
  )
}

export default Home