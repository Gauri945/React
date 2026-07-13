import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <Card className="weatherCard">
        <CardContent>

          <Typography variant="h4" gutterBottom>
            📍 {info.city}
          </Typography>

          <Typography variant="h5">
            🌡 Temperature : {info.temp}°C
          </Typography>

          <Typography>
            🤗 Feels Like : {info.feelsLike}°C
          </Typography>

          <Typography>
            💧 Humidity : {info.humidity}%
          </Typography>

          <Typography>
            ⬇ Min Temp : {info.tempMin}°C
          </Typography>

          <Typography>
            ⬆ Max Temp : {info.tempMax}°C
          </Typography>

          <Typography>
            ☁ Weather : {info.weather}
          </Typography>

        </CardContent>
      </Card>
    </div>
  );
}