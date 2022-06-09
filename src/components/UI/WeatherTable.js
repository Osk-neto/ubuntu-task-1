import classes from "./WeatherTable.module.css";
function WeatherTable(props) {
  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <td>Cidade</td>
          <td>{props.city}</td>
        </tr>
        <tr>
          <td>Data</td>
          <td>{props.date}</td>
        </tr>
        <tr>
          <td>Hora</td>
          <td>{props.time}</td>
        </tr>
        <tr>
          <td>Temperatura</td>
          <td>{props.temperature}</td>
        </tr>
        <tr>
          <td>Descricao</td>
          <td>{props.description}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default WeatherTable;
