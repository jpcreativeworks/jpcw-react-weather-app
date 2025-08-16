import React, { useState } from "react"

export default function Search({ onSearch }) {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() === "") {
    alert("Please enter a city");
    } else {
    alert(`You searched for ${city}`);
    }
    /*onSearch(city);*/
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter City..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
        aria-label="City"
        />
      <button type="submit">Search</button>
    </form>
  )
}
