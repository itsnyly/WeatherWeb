import {useEffect, useState } from "react"

function useCurrentWeather(city){
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

        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
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

export default useCurrentWeather