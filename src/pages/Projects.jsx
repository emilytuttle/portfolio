import React, {useState} from 'react'
import Slider from "react-slick";
import carMaintenance1 from "../images/projects/car1.jpeg"
import carMaintenance2 from "../images/projects/car2.jpeg"
import yoga1 from "../images/projects/yoga1.png"
import yoga2 from "../images/projects/yoga2.jpeg"
import journal from "../images/projects/journal.png"
import map1 from "../images/projects/map1.png"
import map2 from "../images/projects/map2.png"
import toDo1 from "../images/projects/toDo1.png"
import toDo2 from "../images/projects/toDo2.png"

import codeHero from "../images/code.jpg"

const Projects = () => {
  // Set the state. Make a new item and a function to change it, set the original state.
  const [color, setColor] = useState('white');
    // function to change the color state when something is typed
    const updateColor = (event) => {
      setColor(event.target.value);
    }
  
    // settings for the carousel
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <img src={codeHero} alt="hero" className="hero-image"/>
      <div id="proj-container" style={{backgroundColor: color}}>
      <div>What is your favorite color?</div>
      <input
        type="text" value={color} onChange={updateColor}placeholder="Enter your color"
      />
        <Slider {...settings} >
          <div className="project">
            <div className='format-fix'>
              <div className="imagesContainer">
              <img src={carMaintenance1} className="projimg" alt="projectImage"/>
              <img src={carMaintenance2} className="projimg"alt="projectImage"/>
            </div>
        
            <div className="info">
            <h3 className="title">Car Maintenance Log</h3>
            <p className="language">Made using: Javascript, HTML, CSS, and PostgresSQL</p>
            <p className="specialties">Uses authentication to allow individual users to login and save their own car maintenance information without seeing someone elses without the username and password</p>
            </div></div>
            
          </div>
          
          <div className="project">
          <div className='format-fix'>
            <div className="imagesContainer">
              <img src={map1} className="projimg" alt="projectImage"/>
              <img src={map2} className="projimg"alt="projectImage" />
            </div>
        
            <div className="info">
            <h3 className="title">GIS Mapping Project</h3>
            <p className="language">Made using: Javascript, HTML, CSS, ArcGIS</p>
            <p className="specialties">Allows users to view things in the area, such as hospitals, schools, climbing gyms, and golf courses. User can click the buttons to show only specific items.</p>
            <div className='links'>
            <a href="https://youtu.be/4dloPI_I89g" target="_blank" rel="noreferrer">Video Link</a>
            <a href="https://github.com/emilytuttle/arcgisMapping" target="_blank"rel="noreferrer" >GitHub Repo</a>
            </div>
            </div>
            
            </div>
          </div>

          <div className="project">
            <div className='format-fix'>
              <div className="imagesContainer">
                <img src={journal} className="projimg" alt="projectImage"/>
                
              </div>
          
              <div className="info">
                <h3 className="title">Daily Journal</h3>
                <p className="language">Made using: C#</p>
                <p className="specialties">Allows users to write journal entries, and view previous entries</p>
                <div className='links'>
                  <a href="https://youtu.be/VEh74li5ruY" target="_blank" rel="noreferrer">Video Link</a>
                  <a href="https://github.com/emilytuttle/dailyJournal" target="_blank" rel="noreferrer">GitHub Repo</a>
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <div className='format-fix'>
              <div className="imagesContainer">
                <img src={toDo1} className="projimg" alt="projectImage"/>
                <img src={toDo2} className="projimg"alt="projectImage" />
              </div>
          
              <div className="info">
                <h3 className="title">To Do List</h3>
                <p className="language">Made using: Javascript, HTML, CSS</p>
                <p className="specialties">Allows users to add, remove, and cross of items for a daily to-do list</p>
                <div className='links'>
                  <a href="https://youtu.be/x6sgfTuQEbo" target="_blank" rel="noreferrer">Video Link</a>
                  <a href="https://github.com/emilytuttle/toDoList" target="_blank" rel="noreferrer">GitHub Repo</a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="project">
          <div className='format-fix'>
            <div className="imagesContainer">
              <img src={yoga1} className="projimg" alt="projectImage"/>
              <img src={yoga2} className="projimg"alt="projectImage" />
            </div>
        
            <div className="info">
            <h3 className="title">Yoga Studio</h3>
            <p className="language">Made using: Javascript, HTML, CSS, and PostgresSQL</p>
            <p className="specialties">Included access for employees, separate from user view</p>
            </div>
            </div>
          </div>
          
        </Slider>
      </div>
    </div>
  )
}

export default Projects