import React, { useState } from "react";
import axios from "axios"
import './App.css';
import Search from "./Search"
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const key = "7fd5430a29oa8949b4d239de06t9a3d4"

export default function App() {
  let [weather, setWeather] = useState(null);
  let [forecast, setForecast] = useState([])
  let [errorMessage, setErrorMessage] = useState("")
  let [loading, setLoading] =useState(false)
  
  async function handleSearch(city) {
    setLoading(true);
    setErrorMessage("");
    setWeather(null);
    setForecast([]);

    try {
      const currentWeatherURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`
      const forecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`
      
      let [{data: currentWeather}, {data: forecastData}] = await Promise.all([
        axios.get(currentWeatherURL),
        axios.get(forecastURL)
      ]);

      console.log("[current weather]", currentWeather)
      console.log("[forecast daily]", forecastData.daily)

      setWeather(currentWeather);
      setForecast(forecastData.daily || [].slice(0, 5));
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setErrorMessage("Could not fetch weather. try again")
    }
  }

  return (
    <div className="App">
      <h1>Weather App </h1>
      <Search onSearch={handleSearch} />
      {loading === "loading" && <p>Loading…</p>}
      {errorMessage === "error" && <p style={{ color: "#b00020" }}>{errorMessage}</p>}

      {weather && <CurrentWeather data={weather} />}
      {forecast.length > 0 && <Forecast days={forecast} />}    </div>
  );
}


