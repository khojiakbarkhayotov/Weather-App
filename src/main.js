// This module is to represent data about weather for today
import searchIcon from "./assets/search-icon.png";
import thermometer from "./assets/SVG/thermo.svg";
import humidity from "./assets/SVG/humidity.svg";
import wind from "./assets/SVG/wind.svg";
import rainy from "./assets/SVG/rainy.svg";

import helper from "./helper";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class Main {
  #main = document.createElement("div");
  #data;
  constructor(data) {
    this.#data = data;
    this.#main.classList.add("weather-info");
  }

  get #generateData() {
    const data = {};
    data.description = this.#data.current.weather[0].description;
    data.temperature =
      this.#data.current.temp > 200
        ? Math.round(this.#data.current.temp - 273.15) + " °C"
        : Math.round(this.#data.current.temp) + "  °F";
    data.city = this.#data.timezone.split("/")[1];

    // fixing date
    const { timezone } = this.#data;
    const currentTime = new Date().toLocaleString("en-US", {
      timeZone: timezone,
    });
    const [date, time] = currentTime.split(", ");
    const partOfDay = time.split("").splice(-3, 3).join("").trim();
    const [month, day, year] = date.split("/");
    const dateGlobal = new Date(Date.UTC(year, month - 1, day));
    const lastDigit = +day % 10;
    let suffix;
    if (lastDigit === 1) suffix = "st";
    else if (lastDigit === 2) suffix = "nd";
    else if (lastDigit === 3) suffix = "rd";
    else suffix = "th";
    data.date = `${helper.dayNames[dateGlobal.getDay()]}, ${day}${suffix} ${
      months[month - 1]
    } \`${year.slice(-2)}`;

    const [hour, minute] = time.split(":");

    data.time = `${hour}:${minute} ${partOfDay.toLowerCase()}`;

    data.icon = helper.getIcon(this.#data.current.weather[0].icon);
    return data;
  }

  #makeTemplate() {
    const data = this.#generateData;
    const standard = this.#data.current.temp > 200;
    return `
          <span class="weather-info__description">${data.description}</span>
          <span class="weather-info__city">${data.city}</span>
          <div class="weather-info__date">
            <span>${data.date}</span>
            <p>${data.time}</p>
          </div>
          <span class="weather-info__temperature">${data.temperature}</span>
          <span class="weather-info__display ${
            standard ? "standard" : "imperial"
          }">Display ${standard ? "°F" : "°C"}</span>
          <div class="weather-info__icon"> 
            ${data.icon}
          </div>
          <form action="" class="search-box">
            <input
              class="search-box__input"
              type="text"
              name="city"
              placeholder="Search Location..."
            />
            <img class="search-box__image" src=${searchIcon} alt="search" type="submit" />
          </form>
          <div class="error-msg hidden">
            <span>Location not found!</span>
            <span>Search must be in the form of "City", "City, State" or "City, Country".</span>
          </div>
    `;
  }

  get main() {
    this.#main.innerHTML = this.#makeTemplate();
    return this.#main;
  }
}

// Right side block of information about current weather
class RightAsside {
  #asside = document.createElement("div");
  #data;

  constructor(data) {
    this.#data = data;
    this.#asside.classList.add("weather-details");
  }

  generateElement(icon, text, title) {
    const container = document.createElement("div");
    container.classList.add("weather-details-element");

    const weatherIcon = document.createElement("img");
    weatherIcon.src = icon;
    weatherIcon.classList.add("weather-details-icon");

    const miniContainer = document.createElement("div");
    miniContainer.classList.add("weather-details-mini-cont");
    const divTitle = document.createElement("span");
    divTitle.classList.add("weather-details-label");
    divTitle.innerHTML = title;
    const divText = document.createElement("span");
    divText.classList.add("weather-details-text");
    divText.innerHTML = text;
    miniContainer.appendChild(divTitle);
    miniContainer.appendChild(divText);

    container.appendChild(weatherIcon);
    container.appendChild(miniContainer);

    return container;
  }

  generateData() {
    const data = {};
    const standard = this.#data.current.feels_like > 200;
    const feels_like = standard
      ? Math.round(this.#data.current.feels_like - 273.15) + " °C"
      : Math.round(this.#data.current.feels_like) + " °F";
    data.feels_like = feels_like;
    data.humidity = `${Math.round(this.#data.current.humidity)} %`;
    const speed = this.#data.current.wind_speed;
    let windSpeed;
    if (standard) {
      windSpeed = speed * 3.6;
    } else windSpeed = speed;
    data.windSpeed = `${windSpeed.toFixed(1)} ${standard ? "km/h" : "mph"}`;
    data.chanceOfRain = `${Math.round(this.#data.daily[0].pop * 100)} %`;
    return data;
  }

  get main() {
    const data = this.generateData();
    this.#asside.appendChild(
      this.generateElement(thermometer, data.feels_like, "Feels Like")
    );
    this.#asside.appendChild(
      this.generateElement(humidity, data.humidity, "Humidity")
    );
    this.#asside.appendChild(
      this.generateElement(rainy, data.chanceOfRain, "Chance of Rain")
    );
    this.#asside.appendChild(
      this.generateElement(wind, data.windSpeed, "Wind Speed")
    );
    return this.#asside;
  }
}

export class UpperBlock {
  #container = document.createElement("div");
  constructor(data) {
    this.#container.classList.add("upper");
    const left = new Main(data);
    const right = new RightAsside(data);
    this.#container.appendChild(left.main);
    this.#container.appendChild(right.main);
    return this.#container;
  }
}
