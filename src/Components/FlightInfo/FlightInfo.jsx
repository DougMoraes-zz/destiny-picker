import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Typography } from "@material-ui/core";
import FlightsApi from "../../APIs/FlightsApi";
import aiprlaneIcon from "./travel.png";
import "./FlightInfo.scss";

const FlightInfo = props => {
  const [cheapestFlight, setCheapestFlight] = useState({});
  const [mostExpensiveFlight, setMostExpensiveFlight] = useState({});

  useEffect(() => {
    const getCityId = cityName => {
      return FlightsApi.get(`locations?term=${cityName}`);
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
      setMostExpensiveFlight(mostExpensive);
    };

    if (props.toCity !== "" && props.fromCity !== "") {
      axios
        .all([getCityId(props.toCity), getCityId(props.fromCity)])
        .then(
          axios.spread((...responses) => {
            const idToCity = responses[0].data.locations[0].id;
            const idFromCity = responses[1].data.locations[0].id;

            getFlights(idFromCity, idToCity, props.fromDate, props.toDate);
          })
        )
        .catch(errors => {
          console.log(errors);
        });
    }
  }, [props.toCity, props.fromCity]);

  return cheapestFlight.price && mostExpensiveFlight.price ? (
    <div className="flightinfo-container">
      <div className={`${props.className} flightinfo-item`}>
        <img className="airplane-icon" src={aiprlaneIcon} />
        <Typography className="cheap-flight-description">{`Cheapest Flight: ${cheapestFlight.price}€`}</Typography>
        <Typography className="cheap-flight-description">{`Flight Duration: ${mostExpensiveFlight.fly_duration}`}</Typography>
      </div>
      <div className={`${props.className} flightinfo-item`}>
        <img className="airplane-icon" src={aiprlaneIcon} />
        <Typography className="expensive-flight-description">{`Most Expensive Flight: ${cheapestFlight.price}€`}</Typography>
        <Typography className="expensive-flight-description">{`Flight Duration: ${mostExpensiveFlight.fly_duration}`}</Typography>
      </div>
    </div>
  ) : null;
};

export default FlightInfo;

FlightInfo.propTypes = {
  toCity: PropTypes.string.isRequired,
  fromCity: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired
};
