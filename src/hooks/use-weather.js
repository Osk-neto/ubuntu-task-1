import axios from "axios";
import { useEffect, useState } from "react";

function useWeather() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city === null) {
      return;
    }
    setIsLoading(true);
    axios
      .get("/weather", {
        params: {
          cityName: city,
        },
      })
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city]);
  return { weather, isLoading, error, setCity };
}

export default useWeather;
