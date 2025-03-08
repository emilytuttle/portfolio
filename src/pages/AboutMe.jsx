import React, {useState, useEffect} from 'react'
import backdrop from '../images/backdrop.jpg'
import portrait from '../images/portrait.jpeg'
import alaska from '../images/alaska.jpeg'
import climb from '../images/climb.JPG'
import Slider from "react-slick";

const AboutMe = () => {
  const [weather, setWeather] = useState(null);
  let forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.7608&lon=-111.8910&appid=53778186298c1e2280bfff587895ed1d&units=imperial'
  
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const response = await fetch(forecastUrl);
          if (response.ok) {
            const data = await response.json();
            const forecast = data.list[10];
            let messageBlock;
  
            if (forecast.main.temp_min < 34) {
              messageBlock = "Brrr, that's way too cold! I should be inside playing piano!";
            } else if (forecast.main.temp_min > 35 && forecast.main.temp_min < 60) {
              messageBlock = "That's cold, I should definitely consider a jacket and go for a hike";
            } else if (forecast.main.temp_max > 60) {
              messageBlock = "That's warm enough, I'm going on climbing!";
            }
  
            // Set weather data to state
            setWeather({
              city: data.city.name,
              population: data.city.population,
              dateTime: forecast.dt_txt,
              description: forecast.weather[0].description,
              tempMin: forecast.main.temp_min,
              tempMax: forecast.main.temp_max,
              humidity: forecast.main.humidity,
              windDeg: forecast.wind.deg,
              messageBlock: messageBlock,
            });
          } else {
            throw new Error('Failed to fetch weather data');
          }
        } catch (error) {
          console.error('Error fetching weather:', error);
        }
      };
  
      fetchWeather();
    }, []);
  
  

  
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
      <img src={backdrop} alt="hero" className="hero-image num2"/>
      
      <div className="aboutContainer">
      <Slider {...settings} >
        <div className='slider-pic'><img src={portrait} alt="portrait" id="portrait" /></div>
        <div className='slider-pic'><img src={alaska} alt="portrait" id="portrait" /></div>
        <div className='slider-pic'><img src={climb} alt="portrait" id="portrait" /></div>
        
      
      </Slider>
      
      <div className="about-details">
      
        <h2> I'm Emily!</h2>
        <p>I am currently on online student at BYU-Idaho! I love rock climbing, hiking, photography, writing music, and of course, writing code!</p>
      </div>
      {weather && (
        <div id="weatherBox">
          <div id="forecastBox">
            <h1 id="weatherHeader">Weather</h1>
            <div id="flex">
              <p id="weather-message">
                Everyone knows that the weather can play a role what we do! Check out tomorrow's forecast in Salt Lake City to see what I might be up to!
              </p>
              <div id="weather-container">
                <p>City: {weather.city}</p>
                <p>Date & Time: {weather.dateTime}</p>
                <p>General Description: {weather.description}</p>
                <p>Temperature: {weather.tempMin}°F - {weather.tempMax}°F</p>
              
              </div>
              <p id="content">{weather.messageBlock}</p>
            </div>
          </div>
        </div>
      )}
      </div>
      
    </div>
    
  )
}

export default AboutMe