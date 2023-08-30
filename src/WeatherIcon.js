import React, {useState, useEffect, useMemo} from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const [iconColor, setIconColor] = useState("#48484a");
    const icons = useMemo(() => {
        return {
        "01d" : "CLEAR_DAY",
        "01n" : "CLEAR_NIGHT",
        "02d" : "PARTLY_CLOUDY_DAY",
        "02n" : "PARTLY_CLOUDY_NIGHT",
        "03d" : "PARTLY_CLOUDY_DAY",
        "03n" : "PARTLY_CLOUDY_NIGHT",
        "04d" : "CLOUDY",
        "04n" : "CLOUDY",
        "09d" : "RAIN",
        "09n" : "RAIN",
        "10d" : "RAIN",
        "10n" : "RAIN",
        "11d" : "RAIN",
        "11n" : "RAIN",
        "13d" : "SNOW",
        "13n" : "SNOW",
        "50d" : "FOG",
        "50n" : "FOG",
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
        size={54}
        animate={true}
    />
    )
}