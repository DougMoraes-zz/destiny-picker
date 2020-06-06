import React, { useState, useEffect } from "react";
import WeatherApi from "../../APIs/WeatherApi";

const WeatherInfo = props => {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    const getForecasts = cityKey => {
      WeatherApi.forecasts
        .get(`${cityKey}?apikey=G5jhNzZpn0iWknOJM3pZzf4mrGFdzDzI`)
        .then(resp => resp.data.DailyForecasts)
        .then(forecasts => setForecasts(forecasts))
        .catch(err => console.log(err));
    };

    const getCityId = cityName => {
      WeatherApi.locations
        .get(`search?apikey=G5jhNzZpn0iWknOJM3pZzf4mrGFdzDzI&q=${cityName}`)
        .then(resp => resp.data[0].Key)
        .then(key => getForecasts(key))
        .catch(err => console.log(err));
    };

    getCityId(props.cityName);
  }, []);

  return <div>WeatherInfo</div>;
};

export default WeatherInfo;
