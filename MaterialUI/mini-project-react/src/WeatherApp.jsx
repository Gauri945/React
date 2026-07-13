import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const API_KEY = "4e1fa65544f06f3eb6cfeee17744d073";

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 32,
    temp: 30,
    tempMin: 28,
    tempMax: 34,
    humidity: 60,
    weather: "Clear Sky",
  });

  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();
//     let jsonResponse = await response.json();
// console.log(jsonResponse);
// console.log(jsonResponse.message);
// console.log(jsonResponse.cod);

      let result = {
        city: jsonResponse.name,
        feelsLike: jsonResponse.main.feels_like,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };

      setWeatherInfo(result);
    } catch (err) {
      alert("City not found!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox searchWeather={getWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}