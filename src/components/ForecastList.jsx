// import ForecastCard from "./ForecastCard";

// function ForecastList({ daily }) {
//   return (
//     <div className="mt-10 w-full max-w-5xl">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Last 7 Days & Next 7 Days</h2>
      
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
//         {daily.time.map((date, i) => (
//           <ForecastCard
//             key={date}
//             date={date}
//             max={daily.temperature_2m_max[i]}
//             min={daily.temperature_2m_min[i]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ForecastList;


import ForecastCard from "./ForecastCard";

function ForecastList({ daily }) {
  if (!daily || !daily.time) return null; // ⛔️ prevent crash

  return (
    <div className="mt-4 w-full max-w-5xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Last 7 Days & Next 7 Days
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {daily.time.map((date, i) => (
          <ForecastCard
            key={date}
            date={date}
            max={daily.temperature_2m_max[i]}
            min={daily.temperature_2m_min[i]}
            code={daily.weathercode[i]} // ✅ so we can show correct icon
          />
        ))}
      </div>
    </div>
  );
}

export default ForecastList;

