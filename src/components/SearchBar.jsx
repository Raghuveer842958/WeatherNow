import { useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";

function SearchBar({ setWeather, setError, setLoading }) {
  const [city, setCity] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );

      if (!geoRes.data.results || geoRes.data.results.length === 0) {
        setError("City not found.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoRes.data.results[0];

      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&past_days=7&forecast_days=7`
      );

      const weatherData = {
        city: name,
        country,
        current: weatherRes.data.current_weather,
        daily: weatherRes.data.daily,
      };

      setWeather(weatherData);
    } catch (err) {
      setError("Failed to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden w-80 md:w-96"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="flex-1 px-4 py-2 text-gray-700 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 p-3 hover:bg-blue-700 transition"
      >
        <Search size={22} className="text-white" />
      </button>
    </form>
  );
}

export default SearchBar;


