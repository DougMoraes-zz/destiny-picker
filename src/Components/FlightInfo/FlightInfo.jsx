import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import FlightsApi from "../../APIs/FlightsApi";
import aiprlaneIcon from "./travel.png";
import "./FlightInfo.scss";

const FlightInfo = props => {
  const [idToCity, setIdToCity] = useState("");
  const [idFromCity, setIdFromCity] = useState("");
  const [cheapestFlight, setCheapestFlight] = useState({});
  const [mostExpensivestFlight, setMostExpensivestFlight] = useState({});

  useEffect(() => {
    const getCityId = (cityName, updateState) => {
      FlightsApi.get(`locations?term=${cityName}`)
        .then(resp => updateState(resp.data.locations[0].id))
        .catch(err => console.log(err));
    };

    const getFlights = (fromCity, toCity, fromDate, toDate) => {
      FlightsApi.get(
        `flights?partner=picky&max_stopovers=0&fly_from=${fromCity}&fly_to=${toCity}&date_from=${fromDate}&date_to=${toDate}`
      )
        .then(resp => {
          getCheapestAndExpensivestFlights(resp.data.data);
        })
        .catch(err => console.log(err));
    };

    const getCheapestAndExpensivestFlights = list => {
      const cheapest = list.reduce((result, item) => {
        return result.price < parseFloat(item.price) ? result : item;
      }, {});

      const mostExpensive = list.reduce((result, item) => {
        return result.price > parseFloat(item.price) ? result : item;
      }, {});

      setCheapestFlight(cheapest);
      setMostExpensivestFlight(mostExpensive);
    };

    if (props.toCity !== "" && props.fromCity !== "") {
      getCityId(props.toCity, setIdToCity);
      getCityId(props.fromCity, setIdFromCity);

      getFlights(idFromCity, idToCity, props.fromDate, props.toDate);
    }
  }, [props.toCity, props.fromCity]);

  return (
    <div className={`${props.className} flightinfo-container`}>
      {cheapestFlight.price && mostExpensivestFlight.price && (
        <Typography>
          <img className="airplane-icon" src={aiprlaneIcon} />
          <p>{`Cheapest Flight: ${cheapestFlight.price}`}</p>
          <p>{`Most Expensive Flight: ${mostExpensivestFlight.price}`}</p>
        </Typography>
      )}
    </div>
  );
};

export default FlightInfo;

FlightInfo.propTypes = {
  toCity: PropTypes.string.isRequired,
  fromCity: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired
};
