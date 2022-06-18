import classes from "./Forecast.module.css";

function ForecastTables(props) {
  const newForecast = [];
  for (let index = 1; index < 4; index++) {
    newForecast.push(props.forecasts[index]);
  }
  return (
    <div className={classes.forecastSection}>
      {newForecast.map((forecast, index) => (
        <table className={classes.table} key={index}>
          <tbody>
            <tr>
              <td>Data</td>
              <td>{forecast.date}</td>
            </tr>
            <tr>
              <td>Dia</td>
              <td>{forecast.weekday}</td>
            </tr>
            <tr>
              <td>Descricao</td>
              <td>{forecast.description}</td>
            </tr>
            <tr>
              <td>Maxima</td>
              <td>{forecast.max}°</td>
            </tr>
            <tr>
              <td>Minima</td>
              <td>{forecast.min}°</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default ForecastTables;
