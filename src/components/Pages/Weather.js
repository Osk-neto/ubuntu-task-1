import { useState } from "react";
import { apsWEATHER } from "../../API/APSWEATHER.ts";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ForecastTables from "../UI/ForecastTables";
import WeatherTable from "../UI/WeatherTable";

import classes from "./Weather.module.css";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const weatherHandler = async (event) => {
    setWeather(await apsWEATHER.getWeather(event.target.value));
  };
  const City = require("country-state-city").City;
  const brazilianCities = City.getCitiesOfCountry("BR");

  return (
    <div>
      <Navbar />
      <div className={classes.previsaoSection}>
        <h1>Escolha a Cidade para checar previsão do tempo</h1>
        <select onChange={weatherHandler}>
          <option>Escolha a cidade:</option>
          {brazilianCities.map((city) => (
            <option>{city.name}</option>
          ))}
        </select>
        <div className={classes.previsao}>
          <WeatherTable
            city={weather.city_name}
            date={weather.date}
            time={weather.time}
            temperature={weather.temp}
            description={weather.description}
          />

          {weather && <ForecastTables forecasts={weather.forecast} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Weather;
