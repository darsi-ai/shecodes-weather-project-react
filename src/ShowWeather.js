import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits"

import "./ShowWeather.css"

export default function ShowWeather(props) {
    const weather = props.info;
    return (
        <div className = "ShowWeather">
            <h1>{weather.city}</h1>
            <ul className="text-capitalize">
              <li><FormattedDate date = {weather.date} /></li>
              <li>{weather.clouds}</li>
            </ul>
            <div className="row">
              <div className="col-7 row">
                <div className="float-left col-2">
                  <WeatherIcon code = {props.info.icon} time = {weather.date} id = "icon"/>
                </div>
                <div className="col-4" id="degrees-value"> <WeatherUnits celsius = {Math.round(weather.temperature)}/></div> 
              </div>
              <div className="col-5">
                <ul>
                  <li>feels like: {Math.round(weather.feelsLike)}°C</li>
                  <li>humidity: {weather.humidity}%</li>
                  <li>wind: {Math.round(weather.windSpeed)} km/h</li>
                </ul>
              </div>
            </div>
        </div>
    )
}