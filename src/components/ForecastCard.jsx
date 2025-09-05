import { Sun, Cloud, CloudRain, Snowflake, CloudDrizzle, CloudLightning, CloudFog } from "lucide-react";

function getWeatherIcon(code) {
  if ([0].includes(code)) return <Sun className="mx-auto text-yellow-300 my-2" size={40} />; 
  if ([1, 2].includes(code)) return <Cloud className="mx-auto text-gray-200 my-2" size={40} />; 
  if ([3].includes(code)) return <Cloud className="mx-auto text-gray-400 my-2" size={40} />; 
  if ([45, 48].includes(code)) return <CloudFog className="mx-auto text-slate-300 my-2" size={40} />;
  if ([51, 53, 55, 56, 57].includes(code)) return <CloudDrizzle className="mx-auto text-blue-300 my-2" size={40} />; 
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return <CloudRain className="mx-auto text-blue-400 my-2" size={40} />; // Rain
  if ([71, 73, 75, 77, 85, 86].includes(code)) return <Snowflake className="mx-auto text-cyan-200 my-2" size={40} />; 
  if ([95, 96, 99].includes(code)) return <CloudLightning className="mx-auto text-yellow-400 my-2" size={40} />; 

  return <Cloud className="mx-auto text-gray-200 my-2" size={40} />;
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


