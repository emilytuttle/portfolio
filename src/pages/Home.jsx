import React, {useState} from 'react'
import heroImage from '../images/work.jpg'

const Home = () => {
  const [name, setName] = useState(true);
  
  const updateName = (event) => {
    setName(event.target.value);
  }

  

  return (
    <div>
      <img src={heroImage} alt="hero" className="hero-image"/>
      
      <div>What is your name?</div>
      <input
        type="text" value={name} onChange={updateName}placeholder="Enter your name"
      />
      {name && <h2>Welcome, {name}!</h2>}
      <p id="welcome-box">Welcome to portfolio page! Follow the links to learn more about me, my projects, and my work history! Or, use the button in the bottom right to get my contact information.</p>

      
    </div>
  )
}

export default Home