import React, {useState} from "react";
import "./weather.css"
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            temperature:response.data.temperature.current,
            humidity:response.data.temperature.humidity,
            pressure:response.data.temperature.pressure,
            wind:response.data.wind.speed,
            description:response.data.condition.description,
            city:response.data.city,
            date: new Date (response.data.time * 1000),
            iconUrl:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
        });
    }
    
    function search(){
        let apiKey = "14b37c21t13746dfa0b52a2b355co69b";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }


    if (weatherData.ready) { 
        return(<div className="Weather">
    <form onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-9">
            <input type="search"
            placeholder="Enter a city..."
            className="form-control" 
            autoFocus="on"
            onChange={handleCityChange}
            />
            </div>
        <div className="col-3">
            <input type="submit"
            value="search"
            className="btn btn-primary w-100" 
            />
        </div>
    </div>
    </form>
    <WeatherInfo data={weatherData}/>
    <WeatherForecast enteredCity={city}/>
</div>);
 }
 else {
    search();
    return "Loading..."
}
}
