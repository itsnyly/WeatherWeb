import './App.css';
import Humidity from './components/HumidityCard';
import Title from './components/TitleCard';
import Wind from './components/WindCard';
import useCurrentWeather from './hooks/useCurrentWeather';

function App() {

  const { data, loading, error } = useCurrentWeather("Girona");

  if(loading) return <p>Carregant....</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div class="text-center flex">
      <nav class="bg-blue-400 min-h-screen max-w-sm p-3">
        <ul>
          <li>
            <Title city={data.location.name} last_update={data.current.last_updated}></Title>
          </li>
        </ul>
      </nav>
      <main>
        <div class="mr-3 grid-rows-2">
          <Humidity humidity={data.current.humidity}></Humidity>
          <Wind wind={data.current.wind_mph}></Wind>
        </div>
      </main>
      
    </div>
  );
}

export default App;
