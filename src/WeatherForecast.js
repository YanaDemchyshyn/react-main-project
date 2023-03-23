import React, {useState} from "react";
import axios from "axios";
import "./weatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleForecast(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
    return (
        <div className=" WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast,index) {
                    if (index < 5) {
                        return ( 
                        <div className="col-md" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                    </div>
                        );
                    }
                    else {
                        return (null)
                     }
                })}
                </div>
            </div>
    )
    }

    else {
        let apiKey=`14b37c21t13746dfa0b52a2b355co69b`
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleForecast);

    return null;
    }
}