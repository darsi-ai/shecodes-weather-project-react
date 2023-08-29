import React, {useState} from "react";
import axios from "axios";

import "./Weather.css"

export default function Weather(props) {
    const [weather, setWeather] = useState({ready: false});

    function handleResponse(response) {
        console.log(response.data);
        setWeather({
            ready: true,
            date: "wednesday 12:04",
            city: response.data.name,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.humidity,
            clouds: response.data.weather[0].description,
            icon: "http://openweathermap.org/img/wn/04d@2x.png"
        });
    }

    if(weather.ready) {
        return(
            <div className="Weather">
                <form action="" id="input-form">
                <div class="row">
                    <div class="col-7">
                        <input type="search" class="form-control" id="city-input" placeholder="type a city" autofocus="on" autocomplete="off" />
                    </div>
                    <div class="col-2">
                        <input type="submit" value="search" class="btn btn-light" />
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-secondary" id="current-button" >current</button>
                    </div>
                </div>
            </form>
                <h1>{weather.city}</h1>
            <ul className="text-capitalize">
              <li>{weather.date}</li>
              <li>{weather.clouds}</li>
            </ul>
            <div className="row">
              <div className="col-7">
                <img src={weather.icon} alt = {weather.clouds}></img>
                <span id="degrees-value">{Math.round(weather.temperature)}°C</span>
              </div>
              <div className="col-5">
                <ul>
                  <li>feels like: {weather.feelsLike}°C</li>
                  <li>humidity: {weather.humidity}%</li>
                  <li>wind: {weather.windSpeed} km/h</li>
                </ul>
              </div>
            </div>
            </div>
        )
    } else {
        const apiKey = "64e797c428bddfb60f42d1075443623c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return("loading...");
    }

    
}