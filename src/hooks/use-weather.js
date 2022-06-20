import axios from "axios";
const getWeather = async (cityName) => {
  if (cityName === null || cityName === "") {
    return;
  }
  try {
    const weather = await axios.get("/weather", {
      params: {
        cityName: cityName,
      },
    });
    return weather.data;
  } catch (err) {
    return err.message;
  }
};

const useWeather = (cityName) => {
  return getWeather;
};
export default useWeather;
