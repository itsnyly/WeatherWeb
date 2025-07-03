import './App.css';
import FeelsLike from './components/FeelsLikeCard';
import Humidity from './components/HumidityCard';
import UVIndex from './components/UVIndexCard';
import Wind from './components/WindCard';
import Pressure from './components/PressureCard';
import Precipitation from './components/PrecipitationCard'; 
import useCurrentWeather from './hooks/useCurrentWeather';
import WeatherChart from './components/WeatherChart';
import WeatherPanel from './components/WeatherPanelCard';
import { useState } from 'react';

function App() {

  const [city, setCity] = useState("Girona");
  const { data, loading, error } = useCurrentWeather(city);


  if(loading) return <p>Carregant....</p>
  if(error) return <p>Error: {error}</p>
  
  return (
    <div class="text-center flex bg-blue-200">
      <nav class="bg-blue-400 min-h-screen max-w-md p-24">
        <ul>
          <li>
            <WeatherPanel city={data.location.name} last_update={data.current.last_updated}
            temp_c={data.current.temp_c} temp_f={data.current.temp_f}condition={data.current.condition.text} 
            condition_icon={data.current.condition.icon}></WeatherPanel>
          </li>
          <li>
            <button onClick={() => setCity("London")}>
              London
            </button>
          </li>
        </ul>
      </nav>
      <main class="w-full flex flex-col min-h-screen justify-between">
        <div class="mt-3 h-3/6 ">
          <WeatherChart city={city}></WeatherChart>
        </div>
        <div class="mr-3 grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-10 p-4">
          <Humidity humidity={data.current.humidity}></Humidity>
          <Wind wind={data.current.wind_kph} wind_dir={data.current.wind_dir} 
          wind_degree={data.current.wind_degree}></Wind>
          <FeelsLike sensation_c={data.current.feelslike_c} sensation_f={data.current.feelslike_f}></FeelsLike>
          <UVIndex uv_index={data.current.uv}></UVIndex>
          <Pressure pressure={data.current.pressure_mb}></Pressure>
          <Precipitation precipitation={data.current.precip_mm}></Precipitation>
        </div>
      </main>
      
    </div>
  );
}

export default App;
