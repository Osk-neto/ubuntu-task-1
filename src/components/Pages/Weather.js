import { useRef, useState } from "react";
import useWeather from "../../hooks/use-weather";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ForecastTables from "../UI/ForecastTables";
import WeatherTable from "../UI/WeatherTable";
import { ReactComponent as Loading } from "../../assets/Loading.svg";
import classes from "./Weather.module.css";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getWeather = useWeather();
  const selectedCity = useRef();
  const City = require("country-state-city").City;
  const brazilianCities = City.getCitiesOfCountry("BR");

  const weatherHandler = async () => {
    setIsLoading(false);
    setWeather(await getWeather(selectedCity.current.value));
    setIsLoading(true);
  };

  return (
    <div>
      <Navbar />
      <div className={classes.previsaoSection}>
        <h1>Escolha a Cidade para checar previsão do tempo</h1>
        <select onChange={weatherHandler} ref={selectedCity}>
          <option>Escolha a cidade:</option>
          {brazilianCities.map((city, index) => (
            <option key={index}>{city.name}</option>
          ))}
        </select>

        {isLoading ? (
          <div className={classes.previsao}>
            <WeatherTable
              city={weather.city_name}
              date={weather.date}
              time={weather.time}
              temperature={weather.temp}
              description={weather.description}
            />
            <ForecastTables forecasts={weather.forecast} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Weather;
