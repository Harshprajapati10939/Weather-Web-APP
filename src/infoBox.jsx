import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1582485565167-75055e5e6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let HOT_URL = "https://media.istockphoto.com/id/1591840334/photo/hot-winter-sun.webp?b=1&s=170667a&w=0&k=20&c=hlYpwanh2c1e16z-e_YyaHEB5Awti3Hx8tUF54nGg0Y=";
  let COLD_URL = "https://images.unsplash.com/photo-1514632595-4944383f2737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 650 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <div>Temperature ={info.temp}&deg;C</div>
              <div>Humiduty ={info.humidity}</div>
              <div>Min Temp ={info.tempMin}&deg;C</div>
              <div>Max Temp ={info.tempMax}&deg;C</div>
              <div>The weather can be described as <i>{info.weather}</i> </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
