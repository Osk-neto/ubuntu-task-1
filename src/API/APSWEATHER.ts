// import axios from "axios";
const axios = require("axios");

class APSWEATHER {
  public async getWeather(cityName: string) {
    var weather = await axios.get("/weather", {
      params: {
        cityName: cityName,
      },
    });
    return weather.data;
  }
}
export const apsWEATHER = new APSWEATHER();
