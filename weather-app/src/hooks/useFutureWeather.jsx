import {useEffect, useState } from "react"

function useFutureWeather(city){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        if(!apiKey){
            setError("Clau Api no trobada");
            setLoading(false);
            return;
        }

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Girona&days=7&aqi=no&alerts=no`)
            .then((res) => {
                if (!res.ok) throw new Error("Error a la crida");
                return res.json();
            })
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));

    }, [city, apiKey]);

    return {data, loading, error};
}

export default useFutureWeather