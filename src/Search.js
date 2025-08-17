import React, { useState } from "react"

export default function Search({ onSearch }) {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let trimmed = city.trim();
    if (!trimmed) {
      return alert("Please enter a city");
    } onSearch(trimmed);
      setCity("")
  }
  return(
    <form onSubmit={handleSubmit} className="search">
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
