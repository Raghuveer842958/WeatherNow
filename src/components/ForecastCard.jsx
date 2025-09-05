// import { Sun } from "lucide-react";

// function ForecastCard() {
//   return (
//     <div className="bg-white/10 rounded-xl p-4 text-center shadow-md">
//       <p className="font-semibold">Mon</p>
//       <Sun className="mx-auto text-yellow-300 my-2" size={40} />
//       <p className="text-lg">28°C</p>
//     </div>
//   );
// }

// export default ForecastCard;

// function ForecastCard({ date, max, min }) {
//   const day = new Date(date).toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" });

//   return (
//     <div className="bg-white/10 rounded-xl p-4 text-center shadow-md">
//       <p className="font-semibold">{day}</p>
//       <div className="my-2">
//         <span className="block text-lg font-bold">{max}°C</span>
//         <span className="block text-sm text-gray-200">Min {min}°C</span>
//       </div>
//     </div>
//   );
// }

// export default ForecastCard;

import { Sun, Cloud, CloudRain, Snowflake, CloudDrizzle, CloudLightning, CloudFog } from "lucide-react";

function getWeatherIcon(code) {
  // Mapping Open-Meteo weather codes to Lucide icons
  if ([0].includes(code)) return <Sun className="mx-auto text-yellow-300 my-2" size={40} />; // Clear sky
  if ([1, 2].includes(code)) return <Cloud className="mx-auto text-gray-200 my-2" size={40} />; // Partly cloudy
  if ([3].includes(code)) return <Cloud className="mx-auto text-gray-400 my-2" size={40} />; // Overcast
  if ([45, 48].includes(code)) return <CloudFog className="mx-auto text-slate-300 my-2" size={40} />; // Fog
  if ([51, 53, 55, 56, 57].includes(code)) return <CloudDrizzle className="mx-auto text-blue-300 my-2" size={40} />; // Drizzle
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return <CloudRain className="mx-auto text-blue-400 my-2" size={40} />; // Rain
  if ([71, 73, 75, 77, 85, 86].includes(code)) return <Snowflake className="mx-auto text-cyan-200 my-2" size={40} />; // Snow
  if ([95, 96, 99].includes(code)) return <CloudLightning className="mx-auto text-yellow-400 my-2" size={40} />; // Thunderstorm

  return <Cloud className="mx-auto text-gray-200 my-2" size={40} />; // Default
}

function ForecastCard({ date, max, min, code }) {
  const day = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center shadow-md hover:scale-105 transition">
      <p className="font-semibold text-white">{day}</p>
      {getWeatherIcon(code)}
      <p className="text-lg font-bold text-white">{max}°C</p>
      <p className="text-sm text-slate-200">Min {min}°C</p>
    </div>
  );
}

export default ForecastCard;


