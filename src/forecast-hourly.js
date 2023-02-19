// this file is responsible for creating hourly forecast
import helper from "./helper.js";

export class HourlyForecast {
  #hourlyForecast = document.createElement("div");
  #data;

  constructor(data) {
    this.#data = data.hourly;
    this.#hourlyForecast.classList.add("weather-forecast-hourly");
    this.#hourlyForecast.classList.add("general-forecast");
  }

  createHourlyElement(weatherData) {
    const item = document.createElement("div");
    item.classList.add("weather-forecast-hourly__item");

    const data = helper.getDataHourly(weatherData);
    const hour = document.createElement("span");
    hour.classList.add("weather-forecast-hourly__hour");
    hour.textContent = data.hour;
    const temp = document.createElement("span");
    temp.classList.add("weather-forecast-hourly__temp");
    temp.textContent = data.temp;
    const icon = document.createElement("span");
    icon.classList.add("weather-forecast-hourly__icon");
    icon.innerHTML = helper.getIcon(data.icon);

    item.appendChild(hour);
    item.appendChild(temp);
    item.appendChild(icon);
    return item;
  }

  createHourlyForecast(order = 1) {
    for (let i = 8 * (order - 1); i < 8 * order; i++) {
      const item = this.createHourlyElement(this.#data[i + 1]);
      this.#hourlyForecast.appendChild(item);
    }

    return this.#hourlyForecast;
  }
}
