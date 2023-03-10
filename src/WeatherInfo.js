import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
    <ul>
        <li>
            <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <img src={props.data.iconUrl}
            alt={props.data.description} />
            <span className="temp">
            <span className="temperature">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C</span>
            </span>
        </div>
        <div className="col-6">
            <ul>
                <li>Pressure: {props.data.pressure}</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
            </ul>
        </div>
    </div>
        </div>
    )
}