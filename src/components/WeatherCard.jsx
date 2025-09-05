import { Wind, ThermometerSun } from "lucide-react";

function WeatherCard({ weather, city, country }) {
  if (!weather) {
    return (
      <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-3 w-80 md:w-96 text-center text-white">
        <p>Loading weather...</p>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-4 w-80 md:w-96 text-center text-white">
      <h2 className="text-2xl font-semibold mb-1">
        {city || "Unknown City"}
        {country ? `, ${country}` : ""}
      </h2>
      <p className="text-sm opacity-80 mb-3">
        Updated: {weather.time || "N/A"}
      </p>

      <h3 className="text-6xl font-bold mt-2">
        {weather.temperature}°C
      </h3>

      <div className="flex justify-around mt-6">
        <div className="flex flex-col items-center">
          <ThermometerSun size={28} />
          <span className="text-sm mt-1">
            Feels: {weather.temperature ?? "--"}°C
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Wind size={28} />
          <span className="text-sm mt-1">
            {weather.windspeed ?? "--"} km/h
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;



