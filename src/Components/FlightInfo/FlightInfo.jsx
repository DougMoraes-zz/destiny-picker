import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import FlightsApi from "../../APIs/FlightsApi";

const FlightInfo = props => {
  const [idToCity, setIdToCity] = useState("");
  const [idFromCity, setIdFromCity] = useState("");
  const [flights, setFlights] = useState([]);
  const [avgPrice, setAvgPrice] = useState(0);

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
          setFlights(resp.data.data);
          CalculateAveragePrice(resp.data.data);
        })
        .catch(err => console.log(err));
    };

    const CalculateAveragePrice = list => {
      const sumPrices = list.reduce((result, item) => {
        return (result += parseFloat(item.price));
      }, 0);

      const averagePrice = sumPrices / list.length;

      setAvgPrice(averagePrice);

      return averagePrice;
    };

    getCityId(props.toCity, setIdToCity);
    getCityId(props.fromCity, setIdFromCity);

    getFlights(idFromCity, idToCity, props.fromDate, props.toDate);
  }, [props.toCity, props.fromCity]);

  return (
    <div>
      <Typography>{`Average Price: ${avgPrice} `}</Typography>
    </div>
  );
};

export default FlightInfo;
