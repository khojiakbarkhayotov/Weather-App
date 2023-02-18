"use strict";
import "./style/main.scss";
import { UpperBlock } from "./main.js";
import { Forecast } from "./forecast.js";

const APIKEY = "26f8c0fbf35b930b34088adc6c05be8b";

// Get location of the client using Geolocation API
const getLocation = async function (units = "standard") {
  const location = await navigator.geolocation.getCurrentPosition(
    (success) => {
      const { latitude, longitude } = success.coords;
      const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&units=${units}&exclude=minutely,alerts&lon=${longitude}&appid=${APIKEY}`;
      getWeatherData(URL);
    },
    (error) => {
      console.log(error);
    }
  );
  return location;
  // return location.coords;
};

const getCityData = async function () {};
// const CurrentWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.lat}&lon=${position.lon}&appid=${APIKEY}`;
// Create main container

// Get data synchronously from openweather API
// method 1 and old school way
// const request = XMLHttpRequest();
async function getWeatherData(url) {
  const data = await fetch(url);
  const dataJSON = await data.json();
  console.log(dataJSON);
  const upperBlock = new UpperBlock(dataJSON);
  const bottom = new Forecast(dataJSON);
  document.body.textContent = "";
  document.body.appendChild(upperBlock);
  document.body.appendChild(bottom);

  const displayBtn = upperBlock.querySelector(".weather-info__display");
  displayBtn.addEventListener("click", function () {
    if (this.classList.contains("standard")) {
      getLocation("imperial");
    }
    if (this.classList.contains("imperial")) {
      getLocation();
    }
  });
}

getLocation();
