import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import WeatherApi from "../../APIs/WeatherApi";
import "./WeatherInfo.scss";

const WeatherInfo = props => {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    const getForecasts = cityKey => {
      WeatherApi.forecasts
        .get(`${cityKey}?apikey=G5jhNzZpn0iWknOJM3pZzf4mrGFdzDzI&metric=true`)
        .then(resp => resp.data.DailyForecasts)
        .then(forecasts => {
          console.log(forecasts);
          setForecasts(forecasts);
        })
        .catch(err => console.log(err));
    };

    const getCityId = cityName => {
      WeatherApi.locations
        .get(`search?apikey=G5jhNzZpn0iWknOJM3pZzf4mrGFdzDzI&q=${cityName}`)
        .then(resp => resp.data[0].Key)
        .then(key => getForecasts(key))
        .catch(err => console.log(err));
    };

    props.cityName !== "" && getCityId(props.cityName);
  }, [props.cityName]);

  return (
    <div className={`weather-info-container ${props.className}`}>
      <img src="https://developer.accuweather.com/sites/default/files/01-s.png"></img>
      <Typography variant="subtitle2">
        <p className={`temperature-description`}>
          {forecasts.length > 0
            ? `${forecasts[0].Temperature.Maximum.Value} C / ${forecasts[0].Temperature.Minimum.Value} C`
            : ""}
        </p>
      </Typography>
    </div>
  );
};

export default WeatherInfo;

WeatherInfo.propTypes = {
  cityName: PropTypes.string.isRequired
};
