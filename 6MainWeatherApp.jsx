import { colors } from '@mui/material';
import SearchBox from './2SearchBox'
import InfoBox from './4InfoBox'
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Bhopal",
         feelslike : 24.84,
         temp : 25.05,
         tempMin: 25.05,
         tempMax:25.05,
         humidity:47,
         weather:"haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}