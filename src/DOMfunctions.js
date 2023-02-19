// This file is for manipulating dom in the way to match queries of users

import bottom from "./forecast.js";
import filledDot from "./assets/SVG/dot-full.svg";
import circleDot from "./assets/SVG/dot_circle.svg";
let count = 1;
export class DOM {
  #data;
  // div elements
  forecastDiv = document.querySelector(".forecast");
  dailyForecastDiv = document.querySelector(".weather-forecast-daily");
  hourlyForecastDiv = document.querySelector(".weather-forecast-hourly");
  changeForecastDiv = document.querySelector(".change-forecast");

  // elements to be added or deleted
  changeForecast = new bottom.ChangeForecast();
  changeHours = this.changeForecast.getChangeHours;
  dailyForecast;
  hourlyForecasts = [];

  // btn elements
  dailyBtn = document.querySelector(".change-forecast-daily");
  hourlyBtn = document.querySelector(".change-forecast-hourly");

  constructor(data) {
    this.#data = data;
    const allDots = this.changeHours.querySelectorAll(".change-hours-dot");
    this.changeHours.querySelector(".dot1").src = filledDot;
    // Construct elements with data received
    this.dailyForecast = new bottom.DailyForecast(data).createContainer;
    for (let i = 1; i <= 3; i++) {
      const hourlyForecast = new bottom.HourlyForecast(
        data
      ).createHourlyForecast(i);
      this.hourlyForecasts.push(hourlyForecast);
    }
    const hourlyForecasts = this.hourlyForecasts;
    // Add event listener to change hours
    this.changeHours.addEventListener("click", function (e) {
      const forecast = document.querySelector(".forecast");
      const element = e.target;
      if (element.classList.contains("right") && count < 3) {
        count++;
        forecast.removeChild(forecast.lastChild);
        forecast.appendChild(hourlyForecasts[count - 1]);
        const targetDot = this.querySelector(`.dot${count}`);
        targetDot.src = filledDot;
        [...allDots].forEach((dot) => {
          if (dot != targetDot) {
            dot.src = circleDot;
          }
        });
      }
      if (element.classList.contains("left") && count > 1) {
        count--;
        forecast.removeChild(forecast.lastChild);
        forecast.appendChild(hourlyForecasts[count - 1]);
        const targetDot = this.querySelector(`.dot${count}`);
        targetDot.src = filledDot;
        [...allDots].forEach((dot) => {
          if (dot != targetDot) {
            dot.src = circleDot;
          }
        });
      }
    });

    const forecast = document.querySelector(".forecast");
    [...allDots].forEach(function (dot) {
      dot.addEventListener("click", function () {
        const className = dot.classList[0];
        const num = className.slice(-1);
        count = +num;
        forecast.removeChild(forecast.lastChild);
        forecast.appendChild(hourlyForecasts[num - 1]);
        dot.src = filledDot;
        [...allDots].forEach((item) => {
          if (item != dot) {
            item.src = circleDot;
          }
        });
      });
    });
    // Add Event Listeners to daily and hourly buttons
    this.dailyBtn.addEventListener(
      "click",
      this.activeDaily.bind(
        this.dailyBtn,
        this.hourlyBtn,
        this.changeHours,
        this.changeForecastDiv,
        this.forecastDiv,
        this.dailyForecast
      )
    );

    this.hourlyBtn.addEventListener(
      "click",
      this.activeHourly.bind(
        this.hourlyBtn,
        this.dailyBtn,
        this.changeHours,
        this.changeForecastDiv,
        this.forecastDiv,
        this.hourlyForecasts[0]
      )
    );
    // console.log(this.dailyForecast);
    // console.log(this.hourlyForecast);
  }

  get getHourlyForecast() {
    return this.hourlyForecasts;
  }

  /** activates daily mode */
  activeDaily(hourly, changeHours, parent, forecast, dailyForecast) {
    this.classList.add("change-forecast-active-btn");
    if (hourly.classList.contains("change-forecast-active-btn"))
      hourly.classList.remove("change-forecast-active-btn");
    if (parent.lastChild == changeHours) {
      parent.removeChild(changeHours);
    }
    const lastChild = forecast.lastChild;
    forecast.removeChild(lastChild);
    forecast.appendChild(dailyForecast);
  }

  /** activates hourly mode */
  activeHourly(daily, changeHours, parent, forecast, hourlyForecast) {
    this.classList.add("change-forecast-active-btn");
    if (daily.classList.contains("change-forecast-active-btn"))
      daily.classList.remove("change-forecast-active-btn");
    parent.appendChild(changeHours);
    const lastChild = forecast.lastChild;
    forecast.removeChild(lastChild);
    forecast.appendChild(hourlyForecast);
  }
}
