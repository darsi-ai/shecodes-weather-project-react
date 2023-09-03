import React, {useState, useEffect} from "react";
import axios from "axios";
import ForecastDate from "./ForecastDate.";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const apiKey = "54f4e84co6ada7d203t0b3f5104308c0";

    const [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false)/* instruction that is being  done when conditions met*/;
    },[props.lat, props.lon /* <- if statement here, the condition */]);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true); 
    }

    if(loaded) {
        return (<div className="WeatherForecast row"> 
            {forecast.map(function(dailyForecast, index){
                if (index < 5){
                    return(
                    <div className="col" key="index">
                        <ForecastDate data = {dailyForecast} />
                    </div>
                )} else {
                    return null
                }
            })}
        </div>)
    } else {
        let lat = props.lat;
        let lon = props.lon;
        let url = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);

        return "Loading forecast...";
    }

}