import React, { useState, useEffect } from "react";
import WeatherApi from "../../APIs/WeatherApi";

const WeatherInfo = props => {
  const [cityId, setCityId] = useState("");

  useEffect(() => {
    getCityId("amsterdam");
  }, []);

  const getCityId = cityName => {
    WeatherApi.get(
      `search?apikey=G5jhNzZpn0iWknOJM3pZzf4mrGFdzDzI&q=${cityName}`
    )
      .then(resp => resp.data[0].Key)
      .then(key => setCityId(key))
      .catch(err => console.log(err));
  };

  return <div>{cityId}</div>;
};

export default WeatherInfo;
