import React from "react";

export default function WeatherForecastDay(props) {

    function maxTemp(){
        let temperature = Math.round(props.data.temperature.maximum);
        return(temperature);
    }

    function minTemp(){
        let temperature = Math.round(props.data.temperature.minimum);
        return(temperature);
    }
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];

    }

    function icon() {
        let iconCode = props.data.condition.icon;
        let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconCode}.png`
        return iconUrl;
    }

    return (<div className="WeatherForecastDay">
        <div className="WeatherForecast-day">{day()}</div>
        <div className="icon"><img
        src={icon()}
        width="100px"
        className="Icon"
        alt="weather-icon"
      /></div>
        <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemp()} /</span>
        <span className="WeatherForecast-temperature-min">{minTemp()}</span>
        </div>
        </div>
        )
}