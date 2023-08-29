import React from "react";
import "./Weather.css"

export default function Weather() {
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
            <h1>Florence</h1>
        <ul>
          <li>wednesday 12:04</li>
          <li>broken clouds</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="http://openweathermap.org/img/wn/04d@2x.png" alt = "broken clouds"></img>
            <span id="degrees-value">20°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>feels like: 20°C</li>
              <li>humidity: 79%</li>
              <li>wind: 0.51 km/h</li>
            </ul>
          </div>
        </div>
        </div>
    )
}