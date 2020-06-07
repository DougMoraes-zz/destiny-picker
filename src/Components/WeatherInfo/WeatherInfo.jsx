import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import WeatherApi from "../../APIs/WeatherApi";

const WeatherInfo = props => {
  const [forecasts, setForecasts] = useState([]);
  const [avgTemperatures, setAvgTemperatures] = useState({
    minimumAvg: 0,
    maximumAvg: 0
  });

  useEffect(() => {
    const CalculateAverageTemperature = list => {
      const temperatures = list.reduce(
        (result, item) => {
          result.minimumAvg += item.Temperature.Minimum.Value;
          result.maximumAvg += item.Temperature.Maximum.Value;

          return result;
        },
        { minimumAvg: 0, maximumAvg: 0 }
      );

      temperatures.minimumAvg = temperatures.minimumAvg / list.length;
      temperatures.maximumAvg = temperatures.maximumAvg / list.length;

      return temperatures;
    };

    const getForecasts = cityKey => {
      WeatherApi.forecasts
        .get(`${cityKey}?apikey=G5jhNzZpn0iWknOJM3pZzf4mrGFdzDzI&metric=true`)
        .then(resp => resp.data.DailyForecasts)
        .then(forecasts => {
          setForecasts(forecasts);
          setAvgTemperatures(CalculateAverageTemperature(forecasts));
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
    <div>
      <Typography>{` Maximum Average Temperature: ${avgTemperatures.maximumAvg} Minimum Average Temperature: ${avgTemperatures.minimumAvg}`}</Typography>
    </div>
  );
};

export default WeatherInfo;

WeatherInfo.propTypes = {
  cityName: PropTypes.string.isRequired
};
