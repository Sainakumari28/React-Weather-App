import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 34.93,
        humidity: 62,
        temp: 31.27,
        tempMax: 31.27,
        tempMin: 31.27,
        weather: "scattered clouds"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App by Saina</h1>

            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}