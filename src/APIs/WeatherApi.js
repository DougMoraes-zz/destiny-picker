import axios from "axios";

const WeatherApi = {
  locations: axios.create({
    baseURL: "http://dataservice.accuweather.com/locations/v1/cities/"
  }),
  forecasts: axios.create({
    baseURL: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
  })
};

export default WeatherApi;
