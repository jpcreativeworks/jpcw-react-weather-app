import React from "react"

export default function CurrentWeather({ data, units }) {
  let unitSymbol = units === "metric" ? "°C" : "°F";
  let windUnit = units === "metric" ? "m/s" : "mph";

  let temp = Math.round(data.temperature.current);
  let feels = Math.round(data.temperature.feels_like);
  let humidity = data.temperature.humidity;
  let wind = data.wind.speed;
  let description = data.condition.description;

  return (
    <div className="card current">
      <div>
      <h2 className="city">{data.city}, {data.country}</h2>
      <div className="temp">
        <span className="value" style={{ fontSize: "2rem", margin: "6px 0" }}>{temp}{unitSymbol}</span>
        <span className="desc" style={{ textTransform: "capitalize" }}>{description}</span>
      </div>

      <div className="meta">
        <span>Feels like {feels}{unitSymbol}</span>
        <span>Humidity {humidity}%</span>
        <span>Wind {wind} {windUnit}</span>
      </div>
      </div>
      <img className="icon-lg" src={data.condition.icon_url} alt={description} />
    </div>
  );
}