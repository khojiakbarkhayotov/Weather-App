"use strict";
import "./style/main.scss";
import { UpperBlock } from "./main.js";
import { Forecast } from "./forecast.js";
import { DOM } from "./DOMfunctions.js";

const APIKEY = "26f8c0fbf35b930b34088adc6c05be8b";
let countOfExecution = 0;
let lastCity;

// Get location of the client using Geolocation API
const getLocation = async function (units = "standard") {
  const location = await navigator.geolocation.getCurrentPosition(
    (success) => {
      const { latitude, longitude } = success.coords;
      const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&units=${units}&exclude=minutely,alerts&lon=${longitude}&appid=${APIKEY}`;
      getWeatherData(URL);
    },
    (error) => {
      getCityData("tashkent");
    }
  );
  return location;
  // return location.coords;
};

const getCityData = async function (city, units = "standard") {
  try {
    countOfExecution++;
    const query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`;
    const data = await fetch(query);
    const dataJSON = await data.json();
    const { lon, lat } = dataJSON.coord;
    const newQuery = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&units=${units}&exclude=minutely,alerts&lon=${lon}&appid=${APIKEY}`;
    getWeatherData(newQuery);
  } catch {
    document.querySelector(".error-msg").classList.remove("hidden");
    document.querySelector(".search-box__input").value = "";
  }
};
// const CurrentWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.lat}&lon=${position.lon}&appid=${APIKEY}`;
// Create main container

// Get data synchronously from openweather API
// method 1 and old school way
// const request = XMLHttpRequest();
async function getWeatherData(url) {
  const data = await fetch(url);
  const dataJSON = await data.json();
  const upperBlock = new UpperBlock(dataJSON);
  const bottom = new Forecast(dataJSON);
  document.body.textContent = "";
  document.body.appendChild(upperBlock);
  document.body.appendChild(bottom);
  const manipulate = new DOM(dataJSON);
  manipulateUpper();
}

function manipulateUpper() {
  const displayBtn = document.querySelector(".weather-info__display");
  const search = document.querySelector(".search-box");
  const searchBtn = document.querySelector(".search-box__image");
  const errorMsg = document.querySelector(".error-msg");

  displayBtn.addEventListener("click", function () {
    if (this.classList.contains("standard")) {
      if (countOfExecution >= 1) {
        getCityData(lastCity, "imperial");
      } else getLocation("imperial");
    }
    if (this.classList.contains("imperial")) {
      if (countOfExecution > 1) {
        getCityData(lastCity);
      } else getLocation();
    }
  });

  if (!errorMsg.classList.contains("hidden")) errorMsg.classList.add("hidden");

  search.addEventListener("submit", searchCity.bind(search));
  searchBtn.addEventListener("click", searchCity.bind(search));

  function searchCity(e) {
    e.preventDefault();
    const cityName = this.city.value;
    lastCity = cityName;
    getCityData(cityName);
  }
}

// initial load to identify your location
getLocation();
