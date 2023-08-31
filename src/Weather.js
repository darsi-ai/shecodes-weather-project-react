import React, {useState} from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";

import "./Weather.css"

export default function Weather(props) {
    const apiKey = "64e797c428bddfb60f42d1075443623c";
    const [weather, setWeather] = useState({ready: false});
    const [cityInput, setCityInput] = useState(props.defaultCity);

    function handleResponse(response) {
         console.log(response.data);
        setWeather({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            clouds: response.data.weather[0].description,
            windSpeed: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon
        });
    }

    function search() {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return("loading...");
    }

    function searchGeo(position){
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityInput(event) {
        setCityInput(event.target.value);
    }

    function handleCurrent(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchGeo);
    }

    if(weather.ready) {
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-7">
                            <input type="search" className="form-control" placeholder="type a city" autoFocus="on" autoComplete="off"  onChange={handleCityInput}/>
                        </div>
                        <div className="col-2">
                            <input type="submit" value="search" className="btn btn-light" />
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-secondary" id="current-button" onClick={handleCurrent}>current</button>
                        </div>
                    </div>
                </form>
            <ShowWeather info = {weather}/>
        </div>
        )
    } else {
        search();
    }

    
}