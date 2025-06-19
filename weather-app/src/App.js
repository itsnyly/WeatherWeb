import './App.css';
import FeelsLike from './components/FeelsLikeCard';
import Humidity from './components/HumidityCard';
import Title from './components/TitleCard';
import UVIndex from './components/UVIndexCard';
import Wind from './components/WindCard';
import useCurrentWeather from './hooks/useCurrentWeather';
import WeatherChart from './components/WeatherChart';
import { useState } from 'react';

function App() {

  const [city, setCity] = useState("Girona");
  const { data, loading, error } = useCurrentWeather(city);


  if(loading) return <p>Carregant....</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div class="text-center flex bg-blue-200">
      <nav class="bg-blue-400 min-h-screen max-w-sm p-3">
        <ul>
          <li>
            <Title city={data.location.name} last_update={data.current.last_updated}></Title>
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
          <Wind wind={data.current.wind_mph}></Wind>
          <FeelsLike sensation_c={data.current.feelslike_c} sensation_f={data.current.feelslike_f}></FeelsLike>
          <UVIndex uv_index={data.current.uv}></UVIndex>
        </div>
      </main>
      
    </div>
  );
}

export default App;
