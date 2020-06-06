import React, { useEffect, useState } from "react";
import FlightsApi from "../../APIs/FlightsApi";

const FlightInfo = props => {
  const [idToCity, setIdToCity] = useState([]);
  const [idFromCity, setIdFromCity] = useState([]);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getCityId = (cityName, updateState) => {
      FlightsApi.get(`locations?term=${cityName}`)
        .then(resp => updateState(resp.data.locations[0].id))
        .catch(err => console.log(err));
    };

    const getFlights = (fromCity, toCity, fromDate, toDate) => {
      FlightsApi.get(
        `flights?partner=picky&fly_from=${fromCity}&fly_to=${toCity}&date_from=${fromDate}&date_to=${toDate}`
      )
        .then(resp => setFlights(resp.data.data))
        .catch(err => console.log(err));
    };

    getCityId(props.toCity, setIdToCity);
    getCityId(props.fromCity, setIdFromCity);
  }, [props.toCity, props.fromCity]);

  console.log(idToCity);
  console.log(idFromCity);

  return <div>FlightInfo</div>;
};

export default FlightInfo;
