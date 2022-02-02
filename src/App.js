import "./App.css";
import TopBar from "./components/TopBar";
import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";
function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <TopBar/>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
