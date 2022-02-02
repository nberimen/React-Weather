import { createContext, useContext, useState, useEffect } from "react";

import { getWeather } from "../api/apiCalls";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Elazığ");

  useEffect(() => {
    loadWeather();
  }, [city]);

  const loadWeather = async () => {
    try {
      const response = await getWeather(city);
      setWeatherData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const values = { city, setCity, weatherData, setWeatherData };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);
export { useWeather, WeatherProvider };
