import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import ForecastTables from "../components/UI/ForecastTables";
import WeatherTable from "../components/UI/WeatherTable";
import { ReactComponent as Loading } from "../assets/Loading.svg";

function useWeather() {
  const [city, setCity] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (city === null) {
      return;
    }
    setContent(<Loading />);
    axios
      .get("/weather", {
        params: {
          cityName: city,
        },
      })
      .then((response) => {
        setContent(
          <Fragment>
            <WeatherTable
              city={response.data.city_name}
              date={response.data.date}
              time={response.data.time}
              temperature={response.data.temp}
              description={response.data.description}
            />
            <ForecastTables forecasts={response.data.forecast} />
          </Fragment>
        );
      })
      .catch((err) => {
        setContent(err.message);
      });
  }, [city]);
  return { weather: content, setCity };
}

export default useWeather;
