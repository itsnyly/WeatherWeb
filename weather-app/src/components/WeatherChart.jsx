import React, { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

import useFutureWeather from "../hooks/useFutureWeather";

const PAGE_SIZE = 7;

export default function WeatherChart() {
    const { data, loading, error } = useFutureWeather("Girona");
    const [page, setPage] = useState(0);
    const start = page * PAGE_SIZE;
   

    if(loading) return <p>Carregant....</p>
    if(error) return <p>Error: {error}</p>

    const allDays = data.forecast.forecastday;
    const allHours = allDays.flatMap(day => day.hour);
    const paginated = allHours.slice(start, start + PAGE_SIZE);
    return (
      <div className="rounded-xl bg-white p-4 shadow-md max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Upcoming hours</h2>
          <button
            onClick={() => setPage(p => (p + 1) % Math.ceil(allHours.length / PAGE_SIZE))}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={paginated}>
            <XAxis dataKey={(d) => d.time.split(" ")[1]} />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="chance_of_rain"
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
