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

  const mountDate = dateStr => {
    const dateObj = new Date(dateStr);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className={`weather-info-container ${props.className}`}>
      {forecasts.length > 0 && (
        <Typography variant="subtitle2">
          <p>{mountDate(forecasts[0].Date)}</p>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${
              forecasts[0].Day.Icon < 10
                ? "0" + forecasts[0].Day.Icon
                : forecasts[0].Day.Icon
            }-s.png`}
          />
          <p className={`temperature-description`}>
            {`${forecasts[0].Day.IconPhrase}`}
          </p>
          <p className={`temperature-description`}>
            {`${forecasts[0].Temperature.Maximum.Value}°C / ${forecasts[0].Temperature.Minimum.Value}°C`}
          </p>
        </Typography>
      )}
    </div>
  );
};

export default WeatherInfo;

WeatherInfo.propTypes = {
  cityName: PropTypes.string.isRequired
};
