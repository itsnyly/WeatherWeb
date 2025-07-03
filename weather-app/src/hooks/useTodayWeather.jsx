import useFutureWeather from './useFutureWeather';

function useTodayWeather(city) {
  const { data, loading, error } = useFutureWeather(city);

  const todayForecast = data?.forecast?.forecastday?.[0] ?? null;

  return {
    data: todayForecast,
    loading,
    error,
  };
}

export default useTodayWeather;