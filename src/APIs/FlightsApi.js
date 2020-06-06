import axios from "axios";

const FlightsApi = axios.create({
  baseURL: "https://api.skypicker.com/"
});

export default FlightsApi;
