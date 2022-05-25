import React from 'react';
import './App.css';
import Locationinput from './Location_input.jsx'
import LoadNews from './LoadNews.js'

const api_key = 'a1ff59fe7bfbac4b4a1bbc981c33e490';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      lon: '',
      lat: '',
      temp: '',
      current: '',
      weather: []
    };
  }


  getInformation = async(e) => {
    e.preventDefault();
    const cityname = e.target.elements.city.value;
    const zipcode = e.target.elements.zipcode.value;

    const api_call_location = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityname},${zipcode}&limit=1&appid=${api_key}`
      );
    const loc_response = await api_call_location.json();
    
    const api_call_weather = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${loc_response[0].lat}&lon=${loc_response[0].lon}&exclude=alerts&appid=${api_key}&units=imperial`
      );
      const weth_response = await api_call_weather.json();

    this.setState({
      city:  `${loc_response[0].name}`,
      lon: `${loc_response[0].lon}`,
      lat: `${loc_response[0].lat}`,
      temp: `${weth_response.current.temp}º F`,
      current: `${weth_response.current.weather[0].description}`,
      weather: [[weth_response.current], weth_response.daily, weth_response.hourly]
    });

    console.log(loc_response);
    console.log(weth_response);

    
  };
   

  render(){
    return (
      <div className = "App">
        <h1>Weather</h1>
        
        <Locationinput loadInformation = {this.getInformation}/>

        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lon}</p>
        <p>Temperature: {this.state.temp}</p>
        <p>Current Weather: {this.state.current}</p>

        <h1>News</h1>
        <LoadNews></LoadNews>
        
      </div>
    );
  }
}

export default App;

//{this.state.weather.map((time) => <WeatherDisp timeFrame={time}/>)}
