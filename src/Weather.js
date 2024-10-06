import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  /*let [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(props.city);
  let [icon, setIcon] = useState(null);*/
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleresponse(response) {
    /*setCity(response.data.name);
    setTemperature(Math.round(response.data.main.temp));
    
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );*/

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: response.data.timezone,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Saturday 04:00{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.icon} alt={weatherData.description}></img>

              <span className="temperature">{weatherData.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apikey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric`;
    console.log(apiurl);

    axios.get(apiurl).then(handleresponse);
    return "Loading..";
  }
}
