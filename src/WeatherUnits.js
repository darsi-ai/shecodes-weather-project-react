import React, {useState} from "react";

import "./WeatherUnits.css";


// not used anywhere but i wanted to save the code pattern

export default function WeatherUnits(props) {
    const [unit, setUnit] = useState("celsius");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFarenheit(event) {
        event.preventDefault();
        setUnit("farenheit");
    }

    if (unit === "celsius") {
        return ( 
            <div className="WeatherUnits" >
                {Math.round(props.celsius)}
                {" "}° C | <a href="/" onClick={showFarenheit}>F</a>
            </div>
        )
    } else {
        return ( 
            <div className="WeatherUnits" >
                {Math.round((props.celsius * 9 / 5) + 32)}
                {" "}° <a href="/" onClick={showCelsius}>C</a> | F
            </div>
        )
    }
}