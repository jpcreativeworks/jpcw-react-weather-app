import React from "react"

export default function CurrentWeather({ data }) {
  let temp = Math.round(data.temperature.current);
  let feels = Math.round(data.temperature.feels_like);
  let humidity = data.temperature.humidity;
  let wind = data.wind.speed;
  let description = data.condition.description;

  return (
    <div style={{ marginTop: 16 }}>
      <h2>{data.city}, {data.country}</h2>
      <p style={{ fontSize: "2rem", margin: "6px 0" }}>{temp}°C</p>
      <p style={{ textTransform: "capitalize" }}>{description}</p>
      <img src={data.condition.icon_url} alt={description} width={80} height={80} />
      <p style={{ color: "#666" }}>
        Feels like {feels}° • Humidity {humidity}% • Wind {wind} m/s
      </p>
    </div>
  );
}