import React, { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

import useFutureWeather from "../hooks/useFutureWeather";

const PAGE_SIZE = 7;

export default function WeatherChart({city}) {
    const { data, loading, error } = useFutureWeather({city});
    const [page, setPage] = useState(0);
    const start = page * PAGE_SIZE;
    const [param, setParam] = useState("chance_of_rain");
   

    if(loading) return <p>Carregant....</p>
    if(error) return <p>Error: {error}</p>

    const allDays = data.forecast.forecastday;
    const allHours = allDays.flatMap(day => day.hour);
    const paginated = allHours.slice(start, start + PAGE_SIZE);

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="bg-white p-2 border rounded shadow text-sm">
            <p>{payload[0].value}</p>
          </div>
        );
      }
      return null;
    };

    return (
      <div className="rounded-xl bg-white p-4 shadow-md max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Upcoming hours</h2>
          <select name="paramOptions" id="paramOptions" onChange={(e) => setParam(e.target.value)}>
            <option value="chance_of_rain"> Chance of rain </option>
            <option value="feelslike_c"> Feels like temperature </option>
            <option value="chance_of_snow"> Chance of snow </option>
            <option value="wind_kph"> Wind </option>
          </select>
          <button
            onClick={() => setPage(p => (p + 1) % Math.ceil(allHours.length / PAGE_SIZE))}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={paginated}>
            <XAxis dataKey={(d) => d.time.split(" ")[1]} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip></CustomTooltip>} />
            <Area
              type="monotone"
              dataKey={param}
              stroke="#3b82f6"
              fill="#93c5fd"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-7 text-center mt-2 text-sm text-gray-600">
          {paginated.map((d, i) => (
            <div key={i}>
              <img src={d.condition.icon} alt="day condition"></img>
              <div className="text-black text-lg font-semibold">{d.temp_c}°</div>
              <div>{d.chance_of_rain}%</div>
            </div>
          ))}
        </div>
      </div>
    );
}
