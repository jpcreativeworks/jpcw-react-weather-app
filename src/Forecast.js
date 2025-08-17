import React from "react"

function weekdayLabel(tsSeconds) {
  const date = new Date(tsSeconds * 1000)
  return date.toLocaleDateString(undefined, {weekday: "short"});
}

export default function Forecast({ days, units }) {
  let unitSymbol = units === "metric" ? "°C" : "°F";

  return(
    <div className="card forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {days.map((day) => (
          <div key={day.time} className="forecast-card">
            <div className="forecast-day">{weekdayLabel(day.time)}</div>
            <img
              className="icon-sm"
              src={day.condition.icon_url}
              alt={day.condition.description}
              width={48}
              height={48}
            />
            <div className="temps">
              <span className="hi">{Math.round(day.temperature.maximum)}{unitSymbol}</span>{" / "}
              <span className="lo">
                {Math.round(day.temperature.minimum)}{unitSymbol}
              </span>
            </div>
            <div className="desc">
              {day.condition.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}