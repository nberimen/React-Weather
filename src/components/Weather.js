import { useWeather } from "../context/WeatherContext";

const Weather = () => {
  const { weatherData } = useWeather();
  const forecast = weatherData.result;
  return (
    <>
      {weatherData.city && (
        <h1 className="title">{weatherData.city.toUpperCase()}</h1>
      )}
      <div className="weatherBox">
        {forecast &&
          forecast.map((i, index) => {
            return (
              <div
                key={i.day}
                className={index == 0 ? "weatherDay" : "weather"}
              >
                <span className="dayName">{i.day}</span>
                <br />
                <div className="weatherImg">
                  <img src={i.icon} alt={i.day} />
                </div>
                <br />
                <div className="status">
                  <span className="min">{Math.round(i.min)}°</span>
                  <span className="max">{Math.round(i.max)}°</span>
                </div>
                <hr />
                <div className="dayDate">{i.date}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Weather;
