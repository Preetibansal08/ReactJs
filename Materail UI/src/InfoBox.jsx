import React from "react";
import "./InfoBox.css";
import {  Card, CardContent, CardMedia, Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
const InfoBox = ({info}) => {

  const INIT_URL ="https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


  const HOT_URL = "https://media.istockphoto.com/id/917178010/photo/road-panorama-on-sunny-spring-day.jpg?s=612x612&w=0&k=20&c=Sm1UVjrY0hh1d8lXAcxNaMLupf31Wgo0XVo5FT6Qj2s=";
  const COLD_URL = "https://images.unsplash.com/photo-1670776056086-b48f53505cda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
  const RAINY_URL = "https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
    <div className="cardContainer">
     
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/>  : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature - {info.temp}&deg;C</p>
         <p> Max Temp - {info.tempMax}&deg;C </p>
         <p>Min Temp - {info.tempMin}&deg;C</p>
         <p>Humidity- {info.humidity}</p>
         <p>The weather can be described as {info.weather} and it can feels Like - {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
};

export default InfoBox;
