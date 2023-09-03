import React, {useState, useMemo, useEffect} from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastIcon(props) {
    const [iconColor, setIconColor] = useState("#48484a");
    const icons = useMemo(() => {
        return {
            "clear-sky-day" : "CLEAR_DAY",
            "clear-sky-night" : "CLEAR_NIGHT",
            "few-clouds-day" : "PARTLY_CLOUDY_DAY",
            "few-clouds-night" : "PARTLY_CLOUDY_NIGHT",
            "scattered-clouds-day" : "PARTLY_CLOUDY_DAY",
            "scattered-clouds-night" : "PARTLY_CLOUDY_NIGHT",
            "broken-clouds-day" : "CLOUDY",
            "broken-clouds-night" : "CLOUDY",
            "shower-rain-day" : "RAIN",
            "shower-rain-night" : "RAIN",
            "rain-day" : "RAIN",
            "rain-night" : "RAIN",
            "thunderstorm-day" : "RAIN",
            "thunderstorm-night" : "RAIN",
            "snow-day" : "SNOW",
            "snow-night" : "SNOW",
            "mist-day" : "FOG",
            "mist-night" : "FOG",
        };
    }, []);
useEffect(() => {
    if (icons[props.code] === "CLEAR_DAY" || icons[props.code] === "PARTLY_CLOUDY_DAY") {
        setIconColor("#ec6e4c");
    } else {
        setIconColor("#48484a");
    }
}, [props.code, icons]);

return(
    <ReactAnimatedWeather
    icon = {icons[props.code]}
    color = {iconColor}
    size={props.size}
    animate={true}
/>
)
}