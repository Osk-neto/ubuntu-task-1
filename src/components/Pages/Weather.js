import { Fragment, useRef } from "react";
import useWeather from "../../hooks/use-weather";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ForecastTables from "../UI/ForecastTables";
import WeatherTable from "../UI/WeatherTable";
import { ReactComponent as Loading } from "../../assets/Loading.svg";
import classes from "./Weather.module.css";

const Weather = () => {
  const selectedCity = useRef();
  const { weather, isLoading, error, setCity } = useWeather();

  const City = require("country-state-city").City;
  const brazilianCities = City.getCitiesOfCountry("BR");
  const cityHandler = () => setCity(selectedCity.current.value);
  let content;
  if (weather) {
    content = (
      <Fragment>
        <WeatherTable
          city={weather.city_name}
          date={weather.date}
          time={weather.time}
          temperature={weather.temp}
          description={weather.description}
        />
        <ForecastTables forecasts={weather.forecast} />
      </Fragment>
    );
  }
  if (isLoading) {
    content = <Loading />;
  }
  if (error) content = <h2>{error}</h2>;

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
        <div className={classes.previsao}>{content}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Weather;
