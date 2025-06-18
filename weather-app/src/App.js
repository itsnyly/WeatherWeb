import './App.css';
import Humidity from './components/HumidityCard';
import Temperature from './components/TemperatureCard';
import useCurrentWeather from './hooks/useCurrentWeather';

function App() {

  const { data, loading, error } = useCurrentWeather("Girona");

  if(loading) return <p>Carregant....</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div className="App">
      <header className="App-header">
        <Temperature temperature_c={data.current.temp_c} 
        temperature_f={data.current.temp_f} 
        sensation_c={data.current.feelslike_c} 
        sensation_f={data.current.feelslike_f}></Temperature>
        <Humidity humidity={data.current.humidity}></Humidity>
      </header>
    </div>
  );
}

export default App;
