import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";
import { colors } from "@mui/material";
export default function SearchBox({updateInfo}) {
  let [city, setcity] = useState("");
  let [error, setError] = useState("false");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b1262824f94792e4beac5c5b950c1f93";

  let getWeatherInfo = async () => {
    try{
      
      let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city:city,
          temp:jsonResponse.main.temp,
          tempMin:jsonResponse.main.temp_min,
          tempMax:jsonResponse.main.temp_max,
          humidity:jsonResponse.main.humidity,
          feelsLike:jsonResponse.main.feels_like,
          weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    }
     catch(err){
      throw err;
      
     }
  };

  let handleChange = (evt) => {
    setcity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try{
      evt.preventDefault();
      console.log(city);
      setcity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    }
    catch(err){
      setError(true);
    }
  };
  return (
    <div className ="searchbar">
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {/* {error && <p style={{color:"red"}}>No such place exists!</p>} */}
      </form>
      </div>
    </div>
  );
}
