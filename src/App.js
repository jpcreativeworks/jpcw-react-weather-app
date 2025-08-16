import React, { useState } from "react";
import './App.css';
import Search from "./Search"

export default function App() {
  let [lastQuery, setLastQuery] = useState("");
  function handleSearch(city) {
    setLastQuery(city);
    console.log("Searching for: ", city);
  }

  return (
    <div className="App">
      <h1>Weather App </h1>
      <Search onSearch={handleSearch} />
      {lastQuery && <p>You Searched: {lastQuery}</p>}
    </div>
  );
}


