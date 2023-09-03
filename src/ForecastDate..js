import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function ForecastDate(props) {
    function maxTemp() {
        return Math.round(props.data.temperature.maximum);
    }

    function minTemp() {
        return Math.round(props.data.temperature.minimum);
    }

    function day() {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let date = new Date(props.data.time*1000);
        return days[date.getDay()];
    }

    return (
        <div className="ForecastDate">
            <div className="forecast-day">{day()}</div>
            <ForecastIcon className="forecast-icon" code = {props.data.condition.icon} size = {45} />
            <div className="forecast-temps">
                <span className="forecast-temp-max">{maxTemp()}°</span> { " "}
                <span className="forecast-temp-min">{minTemp()}°</span>
            </div>
        </div>
    )
}