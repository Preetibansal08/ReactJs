import React, { useState } from 'react'

import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
const WeatherApp = () => {
  const [weatherInfo , setWeatherInfo]  = useState({
    city: "Delhi",
    feelsLike: 33.34,
    humidity: 62,
    temp: 30.05,
    tempMax: 30.05,
    tempMin: 30.05,
    weather: "haze",
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo)

  }
  return (
    <div style={{textAlign: "center"}}>
        <h1>WeatherApp</h1>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp