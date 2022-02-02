import axios from "axios";

const API_KEY = "apikey 1oj5G3IM40eqkBg3tBfTbY:4pKYE1RWEnshkqZ0n5JuAt";

export const getWeather = (city) => {
  return axios.get(
    `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
    {
      headers: {
        authorization: API_KEY,
        "content-type": "application/json",
      },
    }
  );
};
