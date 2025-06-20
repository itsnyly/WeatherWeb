import React from 'react'
import Title from './TitleCard';
import Temperature from './TemperatureCard';
import WeatherDescription from './WeatherDescriptionCard';
import useTodayWeather from '../hooks/useTodayWeather';
import { useTemperatureUnit } from '../context/TemperatureUnitContext';

function WeatherPanelCard({ city, last_update, temp_c, temp_f, condition, condition_icon }) {
  
  const { unit, toggleUnit} = useTemperatureUnit();  
  const { data, loading, error } = useTodayWeather('Girona');

  if (loading) return <p>Carregant...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Title title={city} last_update={last_update} />
        
        <div className="flex items-center gap-2">
          <span className={`w-6 text-sm font-medium transition-opacity duration-200 
            ${unit === 'C' ? 'opacity-100' : 'opacity-0'}`}>
            ºC
          </span>
          
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={unit === 'F'}
              onChange={toggleUnit}
            />
            <span className="slider"></span>
          </label>
          
          <span className={`w-6 text-sm font-medium transition-opacity duration-200 
            ${unit === 'F' ? 'opacity-100' : 'opacity-0'}`}>
            ºF
          </span>
        </div>
      </div>
      <Temperature temperature_c={temp_c} temperature_f={temp_f}
        max_temp_c={data.day.maxtemp_c}
        max_temp_f={data.day.maxtemp_f}
        min_temp_c={data.day.mintemp_c}
        min_temp_f={data.day.mintemp_f}>
      </Temperature>
      <WeatherDescription condition={condition} condition_icon={condition_icon}></WeatherDescription>
  </div>
  )
}

export default WeatherPanelCard