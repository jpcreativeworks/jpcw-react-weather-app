import React from "react"

function weekdayLabel(tsSeconds) {
  const date = new Date(tsSeconds * 1000)
  return date.toLocaleDateString(undefined, {weekday: "short"});
}

export default function CurrentWeather({ days, units }) {
  let unitSymbol = units === "metric" ? "°C" : "°F";

  return(
    <div style={{ marginTop: 16 }}>
      <h3>5-Day Forecast</h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 12
      }}>
        {days.map((day) => (
          <div key={day.time} style={{
            textAlign: "center",
            border: "1px solid #eee",
            borderRadius: 10,
            padding: 10,
            background: "#fafafa"
          }}>
            <div style={{ fontWeight: 600 }}>{weekdayLabel(day.time)}</div>
            <img
              src={day.condition.icon_url}
              alt={day.condition.description}
              width={48}
              height={48}
            />
            <div style={{ marginTop: 6 }}>
              <strong>{Math.round(day.temperature.maximum)}{unitSymbol}</strong>{" / "}
              <span style={{ color: "#666" }}>
                {Math.round(day.temperature.minimum)}{unitSymbol}
              </span>
            </div>
            <div style={{ textTransform: "capitalize", color: "#555", marginTop: 4 }}>
              {day.condition.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}