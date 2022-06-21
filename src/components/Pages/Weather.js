import { useRef } from "react";
import useWeather from "../../hooks/useWeather";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import classes from "./Weather.module.css";

const Weather = () => {
  const selectedCity = useRef();
  const { weather, setCity } = useWeather();

  const City = require("country-state-city").City;
  const brazilianCities = City.getCitiesOfCountry("BR");
  const cityHandler = () => setCity(selectedCity.current.value);

  return (
    <div>
      <Navbar />
      <div className={classes.previsaoSection}>
        <h1>Escolha a Cidade para checar previsão do tempo</h1>
        <select onChange={cityHandler} ref={selectedCity}>
          <option>Escolha a cidade:</option>
          {brazilianCities.map((city, index) => (
            <option key={index}>{city.name}</option>
          ))}
        </select>
        <div className={classes.previsao}>{weather}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Weather;
