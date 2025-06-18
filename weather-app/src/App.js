import './App.css';
import  Humidity from './components/HumidityCard';
import useCurrentWeather from './hooks/useCurrentWeather';

function App() {

  const { data, loading, error } = useCurrentWeather("Girona");

  if(loading) return <p>Carregant....</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div className="App">
      <header className="App-header">
        <Humidity humidity={data.current.humidity}></Humidity>
      </header>
    </div>
  );
}

export default App;
