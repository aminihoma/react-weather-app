import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleresponse(response) {
    console.log(response.data);
  }
  let apikey = "be81f193e065bf5feb2d944c7336968b";
  let lon = props.data.coord.lon;
  let lat = props.data.coord.lat;
  let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
  axios.get(apiurl).then(handleresponse);
  console.log(apiurl);
  console.log(props.data.coord);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatgerForecast-day">Thu</div>
          <img src={props.data.icon} alt={props.data.description}></img>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">29°</span>
            <span className="WeatherForecast-temp-min">17°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatgerForecast-day">Thu</div>
          <img src={props.data.icon} alt={props.data.description}></img>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">29°</span>
            <span className="WeatherForecast-temp-min">17°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatgerForecast-day">Thu</div>
          <img src={props.data.icon} alt={props.data.description}></img>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">29°</span>
            <span className="WeatherForecast-temp-min">17°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatgerForecast-day">Thu</div>
          <img src={props.data.icon} alt={props.data.description}></img>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">29°</span>
            <span className="WeatherForecast-temp-min">17°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatgerForecast-day">Thu</div>
          <img src={props.data.icon} alt={props.data.description}></img>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">29°</span>
            <span className="WeatherForecast-temp-min">17°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
