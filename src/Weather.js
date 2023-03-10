import React, {useState} from "react";
import "./weather.css"
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity)

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
            iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAUhJREFUeNrt230NgzAQh2GkIAUJyJgMJCABCZNQKcxBHdyOpFkyEkYGV9oL75Lff2Rwz8pXe2tEpLlzGgAAAAAAAAAAYHsDg4+8Hp1m0ATNrJGNzGmbZdvOZN+lAFLRkyb+KHgvMX1H5wYgFR5OFL2VcATiMgA9uFbzzFD4Oss+2qoA9ID6k0P9yKnRVwGgBzJeWPg6Y1GAdIGSwpmKAFRS/C5CFoDCw/6v08EcIF3wpNL0WQHSrS5WDBDXt0hrgGfFxX+eE7IApCc8cZIuB0BwBBBMAZz9+l+jwApgcggwWQJEhwDRBMDp8P+cBhYAg2OAwQIgOAYIFgCzY4DZAkBcB4C7AywvcIwAAADgNsiDEI/CvAzxOsyECFNiTIoyLc7CCEtjLI6yPE6DBC0yNEnRJkejJK2yNEvTLs8fJgAAAAAAAADg1nkDlR7XfJiH1ggAAAAASUVORK5CYII="
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        
    }
    function search(){
        let apiKey = "14b37c21t13746dfa0b52a2b355co69b";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
        search();
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
</div>);
 }
 else {
    search();
    return "Loading..."
}
}
