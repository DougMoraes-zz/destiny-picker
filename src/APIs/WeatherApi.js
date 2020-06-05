import axios from "axios";

const WeatherApi = axios.create({
  baseURL: "http://dataservice.accuweather.com/locations/v1/cities/"
});

export default WeatherApi;
