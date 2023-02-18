// this file is used to construct bottom forecast of the weather
import helper from "./helper.js";
import left from "./assets/SVG/arrow_left.svg";
import right from "./assets/SVG/arrow_right.svg";
import dotCircle from "./assets/SVG/dot_circle.svg";

class ChangeForecast {
  #changeForecast = document.createElement("div");

  constructor() {
    this.#changeForecast.classList.add("change-forecast");
    const dailyButton = this.generateButton("change-forecast-daily", "Daily");
    const changeHours = this.changeHours();
    const hourlyButton = this.generateButton(
      "change-forecast-hourly",
      "Hourly"
    );

    // activate border at initial load
    dailyButton.classList.add("change-forecast-active-btn");

    // Add Event Listeners to buttons
    dailyButton.addEventListener(
      "click",
      this.activeDaily.bind(
        dailyButton,
        hourlyButton,
        changeHours,
        this.#changeForecast
      )
    );

    hourlyButton.addEventListener(
      "click",
      this.activeHourly.bind(
        hourlyButton,
        dailyButton,
        changeHours,
        this.#changeForecast
      )
    );
    this.#changeForecast.appendChild(dailyButton);
    this.#changeForecast.appendChild(hourlyButton);

    return this.#changeForecast;
  }

  createIcon(icon, clas) {
    const uiIcon = document.createElement("img");
    uiIcon.src = icon;
    uiIcon.classList.add(clas);
    if (clas.match(/(dot)/g)) {
      uiIcon.classList.add("change-hours-dot");
    }
    if (clas.match(/(left)/g)) {
      // uiIcon.classList.add()
      // here I can add event listener to left arrow
    }
    return uiIcon;
  }

  changeHours() {
    const container = document.createElement("div");
    container.classList.add("change-hours");
    container.appendChild(this.createIcon(left, "change-hours-left"));
    for (let i = 1; i <= 3; i++) {
      container.appendChild(this.createIcon(dotCircle, `dot${i}`));
    }
    container.appendChild(this.createIcon(right, "change-hours-right"));
    return container;
  }

  /** activates daily mode */
  activeDaily(hourly, changeHours, parent) {
    this.classList.add("change-forecast-active-btn");
    if (hourly.classList.contains("change-forecast-active-btn"))
      hourly.classList.remove("change-forecast-active-btn");
    if (parent.lastChild == changeHours) {
      parent.removeChild(changeHours);
    }
  }

  /** activates hourly mode */
  activeHourly(daily, changeHours, parent) {
    this.classList.add("change-forecast-active-btn");
    if (daily.classList.contains("change-forecast-active-btn"))
      daily.classList.remove("change-forecast-active-btn");
    parent.appendChild(changeHours);
  }

  /** Generate buttons in order to switch mode between hourly and daily */
  generateButton(btnClass, text) {
    const button = document.createElement("button");
    button.classList.add(btnClass);
    button.classList.add("change-forecast-button");
    button.textContent = text;

    return button;
  }
}

class DailyForecast {
  #data;
  #daily_block = document.createElement("div");

  constructor(data) {
    this.#data = data;
    this.#daily_block.classList.add("weather-forecast-daily");
  }

  createForecast(weatherData) {
    // transform data
    const data = helper.getData(weatherData);
    const dailyContainer = document.createElement("div");
    dailyContainer.classList.add("weather-forecast-daily-item");

    const day = document.createElement("span");
    day.classList.add("weather-forecast-daily-day");
    day.innerHTML = data.day;

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("weather-forecast-daily-temp");
    const tempHigh = document.createElement("span");
    tempHigh.classList.add("weather-forecast-daily-high");
    tempHigh.innerHTML = data.highTemp;
    const tempLow = document.createElement("span");
    tempLow.classList.add("weather-forecast-daily-low");
    tempLow.innerHTML = data.lowTemp;
    tempDiv.appendChild(tempHigh);
    tempDiv.appendChild(tempLow);
    const weatherIcon = document.createElement("span");
    weatherIcon.classList.add("weather-forecast-daily-icon");
    weatherIcon.innerHTML = helper.getIcon(data.icon);

    dailyContainer.appendChild(day);
    dailyContainer.appendChild(tempDiv);
    dailyContainer.appendChild(weatherIcon);

    return dailyContainer;
  }

  get createContainer() {
    const arrayData = this.#data.daily;
    for (let i = 1; i < 8; i++) {
      const dailyForecast = this.createForecast(arrayData[i]);
      this.#daily_block.appendChild(dailyForecast);
    }
    return this.#daily_block;
  }
}

export class Forecast {
  #forecastDiv = document.createElement("div");
  constructor(data) {
    this.#forecastDiv.classList.add("forecast");
    const changeForecast = new ChangeForecast();
    const dailyForecast = new DailyForecast(data);
    this.#forecastDiv.appendChild(changeForecast);
    this.#forecastDiv.appendChild(dailyForecast.createContainer);
    return this.#forecastDiv;
  }
}

// export default { Forecast };
