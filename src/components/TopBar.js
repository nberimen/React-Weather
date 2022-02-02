import { useState } from "react";
import { useWeather } from "../context/WeatherContext";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const { city, setCity } = useWeather();
  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (search === "") return false;
    setCity(search);
  };
  return (
    <div>
      <nav>
        <div>
          <form onSubmit={onSubmit}>
            <input
              className="searchInput"
              type="search"
              placeholder="Search"
              name="search"
              value={search}
              onChange={onChangeInput}
            />
            <div className="btn">
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
