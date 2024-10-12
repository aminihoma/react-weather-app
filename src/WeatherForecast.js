import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
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
