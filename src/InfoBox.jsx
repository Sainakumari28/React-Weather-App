import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
     
    let COLD_URL =
    "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=600&q=80";

    let HOT_URL =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80";

    let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=600&q=80";
    return (
        <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= { info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL } 
        title="green iguana"/>
      <CardContent>
        <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}> 
         <h1>{info.city }
          { info.humidity > 80 
          ? <ThunderstormIcon />
          : info.temp > 15 
          ? <WbSunnyIcon />
          : <AcUnitIcon />} </h1> 
         
        <div>Temperature = {info.temp}&deg;C</div>
        <div>Humidity = {info.humidity}</div>

        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>

      <p>
        The weather can be described as <i>{info.weather}</i>
        and feels like {info.feelsLike}&deg;C
      </p>
     </Typography>
      </CardContent>
    </Card>
    </div>
   </div>
  );
}