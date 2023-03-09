import React, {useState} from "react";
import "./weather.css"
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            temperature:response.data.temperature.current,
            humidity:response.data.temperature.humidity,
            pressure:response.data.temperature.pressure,
            wind:response.data.wind.speed,
            description:response.data.condition.description,
            city:response.data.city,
            date:"Wednesday, 7:00",
            iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAUhJREFUeNrt230NgzAQh2GkIAUJyJgMJCABCZNQKcxBHdyOpFkyEkYGV9oL75Lff2Rwz8pXe2tEpLlzGgAAAAAAAAAAYHsDg4+8Hp1m0ATNrJGNzGmbZdvOZN+lAFLRkyb+KHgvMX1H5wYgFR5OFL2VcATiMgA9uFbzzFD4Oss+2qoA9ID6k0P9yKnRVwGgBzJeWPg6Y1GAdIGSwpmKAFRS/C5CFoDCw/6v08EcIF3wpNL0WQHSrS5WDBDXt0hrgGfFxX+eE7IApCc8cZIuB0BwBBBMAZz9+l+jwApgcggwWQJEhwDRBMDp8P+cBhYAg2OAwQIgOAYIFgCzY4DZAkBcB4C7AywvcIwAAADgNsiDEI/CvAzxOsyECFNiTIoyLc7CCEtjLI6yPE6DBC0yNEnRJkejJK2yNEvTLs8fJgAAAAAAAADg1nkDlR7XfJiH1ggAAAAASUVORK5CYII="
        });
    }
    if (weatherData.ready) { 
        return(<div className="Weather">
    <form>
    <div className="row">
        <div className="col-9">
            <input type="search"
            placeholder="Enter a city..."
            className="form-control" 
            autoFocus="on"
            />
            </div>
        <div className="col-3">
            <input type="submit"
            value="search"
            className="btn btn-primary w-100" />
        </div>
    </div>
    </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <img src={weatherData.iconUrl}
            alt={weatherData.description} />
            <span className="temp">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
            </span>
        </div>
        <div className="col-6">
            <ul>
                <li>Pressure: {weatherData.pressure}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
            </ul>
        </div>
    </div>
</div>)
    }

    else {
    let apiKey = "14b37c21t13746dfa0b52a2b355co69b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
    }
}