import React from "react";
import axios from "axios";
import "./weatherForecast.css";

export default function WeatherForecast(props) {
    let apiKey=`14b37c21t13746dfa0b52a2b355co69b`
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleForecast);

    function handleForecast(response) {
        console.log(response.data);
    }

    return (
        <div className=" WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <div className="icon">icon</div>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19 /</span>
                        <span className="WeatherForecast-temperature-min">10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}