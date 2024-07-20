import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';
import TravelAlert from './TravelAlert'; 
import './WeatherApp.css';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Gujrat",
    feelsLike: 36.56,
    humidity: 66,
    temp: 31.05,
    tempMax: 31.05,
    tempMin: 31.05,
    weather: "broken clouds",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox  updateInfo={updateInfo} />
      <TravelAlert weather={weatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
