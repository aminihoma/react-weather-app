import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  function day(data) {
    let day = data.getDay();
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return week[day];
  }
  function handleresponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }
  console.log("forecast is...");
  console.log(forecast);
  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatgerForecast-day">
              {day(new Date(forecast[0].dt * 1000))}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
              alt={forecast[0].weather[0].description}
            ></img>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {Math.round(forecast[0].temp.max)}°
              </span>
              <span className="WeatherForecast-temp-min">
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatgerForecast-day">
              {day(new Date(forecast[1].dt * 1000))}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[1].weather[0].icon}@2x.png`}
              alt={forecast[1].weather[0].description}
            ></img>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {Math.round(forecast[1].temp.max)}°
              </span>
              <span className="WeatherForecast-temp-min">
                {Math.round(forecast[1].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatgerForecast-day">
              {day(new Date(forecast[2].dt * 1000))}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[2].weather[0].icon}@2x.png`}
              alt={forecast[2].weather[0].description}
            ></img>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {Math.round(forecast[2].temp.max)}°
              </span>
              <span className="WeatherForecast-temp-min">
                {Math.round(forecast[2].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatgerForecast-day">
              {day(new Date(forecast[3].dt * 1000))}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[3].weather[0].icon}@2x.png`}
              alt={forecast[3].weather[0].description}
            ></img>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {Math.round(forecast[3].temp.max)}°
              </span>
              <span className="WeatherForecast-temp-min">
                {Math.round(forecast[3].temp.min)}°
              </span>
            </div>
          </div>
          <div className="col">
            <div className="WeatgerForecast-day">
              {day(new Date(forecast[4].dt * 1000))}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[4].weather[0].icon}@2x.png`}
              alt={forecast[4].weather[0].description}
            ></img>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {Math.round(forecast[4].temp.max)}°
              </span>
              <span className="WeatherForecast-temp-min">
                {Math.round(forecast[4].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apikey = "5201594abea9f3e38b70e65b11a80c24";
    let lon = props.data.coord.lon;
    let lat = props.data.coord.lat;
    let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(handleresponse);
    console.log("the forecast url is:....");
    console.log(apiurl);
    console.log(props.data.coord);

    return null;
  }
}
