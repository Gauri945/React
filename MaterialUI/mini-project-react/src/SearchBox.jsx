import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";

export default function SearchBox({ searchWeather }) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city.trim() === "") return;

    searchWeather(city);
    setCity("");
  };

  return (
    <div className="searchBox">
      <h2>Search for the Weather</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />

        <Button
          variant="contained"
          type="submit"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </form>
    </div>
  );
}