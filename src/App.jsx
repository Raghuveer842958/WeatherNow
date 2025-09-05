import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import axios from "axios";
import ForecastList from "./components/ForecastList";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);

  const { tab } = useSelector((state) => state.weather); 

  const fetchWeatherByCoords1 = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");

      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&count=1`
      );

      let city = "Your Location";
      let country = "";
      if (geoRes.data?.results?.length > 0) {
        city = geoRes.data.results[0].name;
        country = geoRes.data.results[0].country;
      }

      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&past_days=7&forecast_days=7`
      );

      const weatherData = {
        city,
        country,
        current: weatherRes.data.current_weather,
        daily: weatherRes.data.daily,
      };

      setWeather(weatherData);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch weather for your location.");
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");

      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&past_days=7&forecast_days=7`
      );

      const weatherData = {
        city: "Your Location",
        country: "",
        current: weatherRes.data.current_weather,
        daily: weatherRes.data.daily,
      };

      setWeather(weatherData);
    } catch (err) {
      console.error("API error:", err);
      setError("Failed to fetch weather for your location.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        () => {
          setError("Location access denied. Please search for a city.");
        }
      );
    } else {
      setError("Geolocation is not supported.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-800 text-white flex flex-col items-center px-4">
      <Header />
      <SearchBar
        setLoading={setLoading}
        setError={setError}
        setWeather={setWeather}
      />

      {loading && <Loader />}
      {error && <p className="mt-4 text-red-300 font-medium">{error}</p>}

      {weather && (
        <>
          <WeatherCard
            weather={weather.current}
            city={weather.city}
            country={weather.country}
          />

          <ForecastList daily={weather.daily} type={tab} />
        </>
      )}
    </div>
  );
}

export default App;
