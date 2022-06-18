import axios from "axios";
const getWeather = async (cityName) => {
  if (cityName === null || cityName === "") {
    return;
  } else {
    const weather = await axios.get("/weather", {
      params: {
        cityName: cityName,
      },
    });
    return weather.data;
  }
};

const useWeather = (cityName) => {
  return getWeather;
};
export default useWeather;
