"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/back.jpg */ "./src/assets/back.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n@media (max-width: 1600px) {\n  html {\n    font-size: 56.5%;\n  }\n}\n@media (max-width: 1200px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media (max-width: 750px) {\n  html {\n    font-size: 40%;\n  }\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody {\n  font-family: montserrat, sans-serif;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  min-height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 8rem;\n  color: #f5f5f5;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@media (max-width: 1600px) {\n  body {\n    padding: 7rem;\n  }\n}\n@media (max-width: 1200px) {\n  body {\n    padding: 6rem;\n  }\n}\n@media (max-width: 800px) {\n  body {\n    padding: 4rem;\n  }\n}\n@media (max-width: 380px) {\n  body {\n    padding: 2.5rem;\n  }\n}\n\n.upper {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: calc(100vw - 16rem);\n}\n@media (max-width: 1600px) {\n  .upper {\n    width: calc(100vw - 14rem);\n  }\n}\n@media (max-width: 1200px) {\n  .upper {\n    width: calc(100vw - 12rem);\n  }\n}\n@media (max-width: 800px) {\n  .upper {\n    width: calc(100vw - 8rem);\n  }\n}\n@media (max-width: 380px) {\n  .upper {\n    width: calc(100vw - 5rem);\n  }\n}\n@media (max-width: 550px) {\n  .upper {\n    margin-bottom: 2rem;\n  }\n}\n\n.weather-info {\n  display: flex;\n  gap: 1rem;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.weather-info__description {\n  font-size: 4rem;\n  text-transform: capitalize;\n  font-weight: 500;\n  line-height: 1;\n}\n.weather-info__city {\n  font-weight: 500;\n  font-size: 1.8rem;\n}\n.weather-info__date {\n  font-weight: 600;\n  font-size: 1.4rem;\n}\n.weather-info__temperature {\n  font-size: 6rem;\n  font-weight: bold;\n}\n.weather-info__display {\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-top: -1rem;\n}\n@media (max-width: 750px) {\n  .weather-info__display {\n    font-size: 1.4rem;\n  }\n}\n.weather-info__icon {\n  height: auto;\n  width: 10rem;\n  margin-bottom: 0.5rem;\n}\n\n.search-box {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-bottom: 3px solid #f5f5f5;\n  padding: 7px 14px;\n  max-width: 200px;\n  height: 30px;\n}\n@media (max-width: 750px) {\n  .search-box {\n    max-width: 150px;\n  }\n}\n.search-box__input {\n  outline: none;\n  max-width: 150px;\n  background: transparent;\n  color: #f5f5f5;\n  border: none;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.search-box__input::placeholder {\n  color: #f5f5f5;\n  opacity: 1;\n}\n@media (max-width: 332px) {\n  .search-box__input {\n    max-width: 90px;\n  }\n}\n.search-box__image {\n  cursor: pointer;\n  width: 2rem;\n}\n\n.error-msg {\n  font-size: 1.2rem;\n  font-weight: bold;\n  display: flex;\n  flex-flow: column nowrap;\n  max-width: 400px;\n}\n@media (max-width: 750px) {\n  .error-msg {\n    max-width: 150px;\n  }\n}\n\n.weather-details {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  gap: 3rem;\n}\n.weather-details-element {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n  flex-flow: row nowrap;\n}\n.weather-details-icon {\n  width: 3rem;\n}\n.weather-details-mini-cont {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.8rem;\n}\n.weather-details-label {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.weather-details-text {\n  font-size: 2.6rem;\n  font-weight: 700;\n}\n\n.forecast {\n  display: flex;\n  flex-flow: column;\n  gap: 3.5rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n@media (max-width: 550px) {\n  .forecast {\n    align-items: center;\n    gap: 2.5rem;\n  }\n}\n\n.general-forecast {\n  width: calc(100vw - 16rem);\n}\n@media (max-width: 1600px) {\n  .general-forecast {\n    width: calc(100vw - 14rem);\n  }\n}\n@media (max-width: 1200px) {\n  .general-forecast {\n    width: calc(100vw - 12rem);\n  }\n}\n@media (max-width: 800px) {\n  .general-forecast {\n    width: calc(100vw - 8rem);\n  }\n}\n@media (max-width: 380px) {\n  .general-forecast {\n    width: calc(100vw - 5rem);\n  }\n}\n\n.weather-forecast-daily {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  min-height: 15rem;\n}\n@media (max-width: 550px) {\n  .weather-forecast-daily {\n    flex-flow: column;\n    align-items: space-around;\n    gap: 3rem;\n    max-height: 70rem;\n  }\n}\n.weather-forecast-daily-item {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n}\n@media (max-width: 550px) {\n  .weather-forecast-daily-item {\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    padding: 0 4rem;\n  }\n}\n@media (max-width: 380px) {\n  .weather-forecast-daily-item {\n    padding: 0 3rem;\n  }\n}\n.weather-forecast-daily-day {\n  font-size: 2rem;\n  font-weight: 500;\n}\n@media (max-width: 550px) {\n  .weather-forecast-daily-day {\n    width: 12rem;\n  }\n}\n.weather-forecast-daily-temp {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.5rem;\n}\n.weather-forecast-daily-high {\n  font-size: 2.9rem;\n  font-weight: bold;\n}\n.weather-forecast-daily-low {\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n.weather-forecast-daily-icon {\n  width: 4rem;\n  height: 4rem;\n}\n\n.weather-forecast-hourly {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  min-height: 15rem;\n}\n@media (max-width: 550px) {\n  .weather-forecast-hourly {\n    flex-flow: column;\n    align-items: space-between;\n    gap: 3rem;\n    max-height: 60rem;\n  }\n}\n.weather-forecast-hourly__item {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: column nowrap;\n  gap: 2rem;\n}\n@media (max-width: 550px) {\n  .weather-forecast-hourly__item {\n    flex-flow: row;\n    padding: 0 4rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n@media (max-width: 380px) {\n  .weather-forecast-hourly__item {\n    padding: 0 3rem;\n  }\n}\n.weather-forecast-hourly__hour {\n  width: 8rem;\n  font-size: 2rem;\n  font-weight: 500;\n}\n.weather-forecast-hourly__temp {\n  font-size: 3rem;\n  font-weight: bold;\n}\n.weather-forecast-hourly__icon {\n  width: 4rem;\n  height: 4rem;\n}\n\n.change-forecast {\n  color: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row nowrap;\n  gap: 2rem;\n}\n@media (max-width: 550px) {\n  .change-forecast {\n    align-items: center;\n  }\n}\n.change-forecast-button {\n  font-family: montserrat;\n  font-weight: 600;\n  color: #f5f5f5;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 1.4rem;\n  padding: 0.6rem 1.2rem;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n.change-forecast-active-btn {\n  border: 2px solid #f5f5f5;\n  border-radius: 0.5rem;\n}\n\n.change-hours {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1rem;\n}\n.change-hours-left, .change-hours-right {\n  width: 1.4rem;\n  cursor: pointer;\n}\n.change-hours-dot {\n  cursor: pointer;\n  width: 1.1rem;\n}", "",{"version":3,"sources":["webpack://./src/style/base.scss","webpack://./src/style/main.scss","webpack://./src/style/upperheader.scss","webpack://./src/style/bottom.scss"],"names":[],"mappings":"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","sourcesContent":["// This file is for basic configuration of background and basic setup\r\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap\");\r\n// Declaring some constants\r\n$background-img-url: url(../assets/back.jpg);\r\n$back-black: linear-gradient(to right, rgba(black, 0.4), rgba(black, 0.4));\r\n$color-text: #f5f5f5;\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 62.5%;\r\n  // 1 rem is 10px, while if font-size is 100% then 1 rem would be 16px\r\n\r\n  @media (max-width: 1600px) {\r\n    font-size: 56.5%;\r\n  }\r\n\r\n  @media (max-width: 1200px) {\r\n    font-size: 50%;\r\n  }\r\n\r\n  @media (max-width: 750px) {\r\n    font-size: 40%;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\nbody {\r\n  font-family: montserrat, sans-serif;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  min-height: 100vh;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  padding: 8rem;\r\n  color: $color-text;\r\n  background-image: $back-black, $background-img-url;\r\n\r\n  @media (max-width: 1600px) {\r\n    padding: 7rem;\r\n  }\r\n\r\n  @media (max-width: 1200px) {\r\n    padding: 6rem;\r\n  }\r\n\r\n  @media (max-width: 800px) {\r\n    padding: 4rem;\r\n  }\r\n\r\n  @media (max-width: 380px) {\r\n    padding: 2.5rem;\r\n  }\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap\");\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n@media (max-width: 1600px) {\n  html {\n    font-size: 56.5%;\n  }\n}\n@media (max-width: 1200px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media (max-width: 750px) {\n  html {\n    font-size: 40%;\n  }\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody {\n  font-family: montserrat, sans-serif;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  min-height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 8rem;\n  color: #f5f5f5;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../assets/back.jpg);\n}\n@media (max-width: 1600px) {\n  body {\n    padding: 7rem;\n  }\n}\n@media (max-width: 1200px) {\n  body {\n    padding: 6rem;\n  }\n}\n@media (max-width: 800px) {\n  body {\n    padding: 4rem;\n  }\n}\n@media (max-width: 380px) {\n  body {\n    padding: 2.5rem;\n  }\n}\n\n.upper {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: calc(100vw - 16rem);\n}\n@media (max-width: 1600px) {\n  .upper {\n    width: calc(100vw - 14rem);\n  }\n}\n@media (max-width: 1200px) {\n  .upper {\n    width: calc(100vw - 12rem);\n  }\n}\n@media (max-width: 800px) {\n  .upper {\n    width: calc(100vw - 8rem);\n  }\n}\n@media (max-width: 380px) {\n  .upper {\n    width: calc(100vw - 5rem);\n  }\n}\n@media (max-width: 550px) {\n  .upper {\n    margin-bottom: 2rem;\n  }\n}\n\n.weather-info {\n  display: flex;\n  gap: 1rem;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.weather-info__description {\n  font-size: 4rem;\n  text-transform: capitalize;\n  font-weight: 500;\n  line-height: 1;\n}\n.weather-info__city {\n  font-weight: 500;\n  font-size: 1.8rem;\n}\n.weather-info__date {\n  font-weight: 600;\n  font-size: 1.4rem;\n}\n.weather-info__temperature {\n  font-size: 6rem;\n  font-weight: bold;\n}\n.weather-info__display {\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-top: -1rem;\n}\n@media (max-width: 750px) {\n  .weather-info__display {\n    font-size: 1.4rem;\n  }\n}\n.weather-info__icon {\n  height: auto;\n  width: 10rem;\n  margin-bottom: 0.5rem;\n}\n\n.search-box {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-bottom: 3px solid #f5f5f5;\n  padding: 7px 14px;\n  max-width: 200px;\n  height: 30px;\n}\n@media (max-width: 750px) {\n  .search-box {\n    max-width: 150px;\n  }\n}\n.search-box__input {\n  outline: none;\n  max-width: 150px;\n  background: transparent;\n  color: #f5f5f5;\n  border: none;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.search-box__input::placeholder {\n  color: #f5f5f5;\n  opacity: 1;\n}\n@media (max-width: 332px) {\n  .search-box__input {\n    max-width: 90px;\n  }\n}\n.search-box__image {\n  cursor: pointer;\n  width: 2rem;\n}\n\n.error-msg {\n  font-size: 1.2rem;\n  font-weight: bold;\n  display: flex;\n  flex-flow: column nowrap;\n  max-width: 400px;\n}\n@media (max-width: 750px) {\n  .error-msg {\n    max-width: 150px;\n  }\n}\n\n.weather-details {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  gap: 3rem;\n}\n.weather-details-element {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n  flex-flow: row nowrap;\n}\n.weather-details-icon {\n  width: 3rem;\n}\n.weather-details-mini-cont {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.8rem;\n}\n.weather-details-label {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.weather-details-text {\n  font-size: 2.6rem;\n  font-weight: 700;\n}\n\n.forecast {\n  display: flex;\n  flex-flow: column;\n  gap: 3.5rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n@media (max-width: 550px) {\n  .forecast {\n    align-items: center;\n    gap: 2.5rem;\n  }\n}\n\n.general-forecast {\n  width: calc(100vw - 16rem);\n}\n@media (max-width: 1600px) {\n  .general-forecast {\n    width: calc(100vw - 14rem);\n  }\n}\n@media (max-width: 1200px) {\n  .general-forecast {\n    width: calc(100vw - 12rem);\n  }\n}\n@media (max-width: 800px) {\n  .general-forecast {\n    width: calc(100vw - 8rem);\n  }\n}\n@media (max-width: 380px) {\n  .general-forecast {\n    width: calc(100vw - 5rem);\n  }\n}\n\n.weather-forecast-daily {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  min-height: 15rem;\n}\n@media (max-width: 550px) {\n  .weather-forecast-daily {\n    flex-flow: column;\n    align-items: space-around;\n    gap: 3rem;\n    max-height: 70rem;\n  }\n}\n.weather-forecast-daily-item {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n}\n@media (max-width: 550px) {\n  .weather-forecast-daily-item {\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    padding: 0 4rem;\n  }\n}\n@media (max-width: 380px) {\n  .weather-forecast-daily-item {\n    padding: 0 3rem;\n  }\n}\n.weather-forecast-daily-day {\n  font-size: 2rem;\n  font-weight: 500;\n}\n@media (max-width: 550px) {\n  .weather-forecast-daily-day {\n    width: 12rem;\n  }\n}\n.weather-forecast-daily-temp {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.5rem;\n}\n.weather-forecast-daily-high {\n  font-size: 2.9rem;\n  font-weight: bold;\n}\n.weather-forecast-daily-low {\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n.weather-forecast-daily-icon {\n  width: 4rem;\n  height: 4rem;\n}\n\n.weather-forecast-hourly {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  min-height: 15rem;\n}\n@media (max-width: 550px) {\n  .weather-forecast-hourly {\n    flex-flow: column;\n    align-items: space-between;\n    gap: 3rem;\n    max-height: 60rem;\n  }\n}\n.weather-forecast-hourly__item {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: column nowrap;\n  gap: 2rem;\n}\n@media (max-width: 550px) {\n  .weather-forecast-hourly__item {\n    flex-flow: row;\n    padding: 0 4rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n@media (max-width: 380px) {\n  .weather-forecast-hourly__item {\n    padding: 0 3rem;\n  }\n}\n.weather-forecast-hourly__hour {\n  width: 8rem;\n  font-size: 2rem;\n  font-weight: 500;\n}\n.weather-forecast-hourly__temp {\n  font-size: 3rem;\n  font-weight: bold;\n}\n.weather-forecast-hourly__icon {\n  width: 4rem;\n  height: 4rem;\n}\n\n.change-forecast {\n  color: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row nowrap;\n  gap: 2rem;\n}\n@media (max-width: 550px) {\n  .change-forecast {\n    align-items: center;\n  }\n}\n.change-forecast-button {\n  font-family: montserrat;\n  font-weight: 600;\n  color: #f5f5f5;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 1.4rem;\n  padding: 0.6rem 1.2rem;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n.change-forecast-active-btn {\n  border: 2px solid #f5f5f5;\n  border-radius: 0.5rem;\n}\n\n.change-hours {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1rem;\n}\n.change-hours-left, .change-hours-right {\n  width: 1.4rem;\n  cursor: pointer;\n}\n.change-hours-dot {\n  cursor: pointer;\n  width: 1.1rem;\n}","// // This file is for creating upper block that displays today's weather\r\n\r\n// Main block to visualize weather information\r\n.upper {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  width: calc(100vw - 16rem);\r\n\r\n  @media (max-width: 1600px) {\r\n    width: calc(100vw - 14rem);\r\n  }\r\n\r\n  @media (max-width: 1200px) {\r\n    width: calc(100vw - 12rem);\r\n  }\r\n\r\n  @media (max-width: 800px) {\r\n    width: calc(100vw - 8rem);\r\n  }\r\n\r\n  @media (max-width: 380px) {\r\n    width: calc(100vw - 5rem);\r\n  }\r\n\r\n  @media (max-width: 550px) {\r\n    margin-bottom: 2rem;\r\n  }\r\n}\r\n\r\n.weather-info {\r\n  display: flex;\r\n  gap: 1rem;\r\n  flex-flow: column nowrap;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n\r\n  &__description {\r\n    font-size: 4rem;\r\n    text-transform: capitalize;\r\n    font-weight: 500;\r\n    line-height: 1;\r\n  }\r\n\r\n  &__city {\r\n    font-weight: 500;\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  &__date {\r\n    font-weight: 600;\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  &__temperature {\r\n    font-size: 6rem;\r\n    font-weight: bold;\r\n  }\r\n\r\n  &__display {\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    margin-bottom: 1rem;\r\n    margin-top: -1rem;\r\n\r\n    @media (max-width: 750px) {\r\n      font-size: 1.4rem;\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    height: auto;\r\n    width: 10rem;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n}\r\n\r\n.search-box {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  align-items: center;\r\n  border-bottom: 3px solid $color-text;\r\n  padding: 7px 14px;\r\n  max-width: 200px;\r\n  height: 30px;\r\n\r\n  @media (max-width: 750px) {\r\n    max-width: 150px;\r\n  }\r\n\r\n  &__input {\r\n    outline: none;\r\n    max-width: 150px;\r\n    background: transparent;\r\n    color: $color-text;\r\n    border: none;\r\n\r\n    font-size: 1.4rem;\r\n    font-weight: 600;\r\n\r\n    &::placeholder {\r\n      color: $color-text;\r\n      opacity: 1;\r\n    }\r\n\r\n    @media (max-width: 332px) {\r\n      max-width: 90px;\r\n    }\r\n  }\r\n\r\n  &__image {\r\n    cursor: pointer;\r\n    width: 2rem;\r\n  }\r\n}\r\n\r\n.error-msg {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  max-width: 400px;\r\n\r\n  @media (max-width: 750px) {\r\n    max-width: 150px;\r\n  }\r\n}\r\n\r\n// right side block about weather details\r\n.weather-details {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  align-items: flex-start;\r\n  gap: 3rem;\r\n\r\n  &-element {\r\n    display: flex;\r\n    gap: 1.5rem;\r\n    align-items: flex-start;\r\n    flex-flow: row nowrap;\r\n  }\r\n  &-icon {\r\n    width: 3rem;\r\n  }\r\n  &-mini-cont {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    gap: 0.8rem;\r\n  }\r\n\r\n  &-label {\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n  }\r\n\r\n  &-text {\r\n    font-size: 2.6rem;\r\n    font-weight: 700;\r\n  }\r\n}\r\n",".forecast {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 3.5rem;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n\r\n  @media (max-width: 550px) {\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n  }\r\n}\r\n\r\n.general-forecast {\r\n  width: calc(100vw - 16rem);\r\n\r\n  @media (max-width: 1600px) {\r\n    width: calc(100vw - 14rem);\r\n  }\r\n\r\n  @media (max-width: 1200px) {\r\n    width: calc(100vw - 12rem);\r\n  }\r\n\r\n  @media (max-width: 800px) {\r\n    width: calc(100vw - 8rem);\r\n  }\r\n\r\n  @media (max-width: 380px) {\r\n    width: calc(100vw - 5rem);\r\n  }\r\n}\r\n\r\n.weather-forecast-daily {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  min-height: 15rem;\r\n\r\n  @media (max-width: 550px) {\r\n    flex-flow: column;\r\n    align-items: space-around;\r\n    gap: 3rem;\r\n    max-height: 70rem;\r\n  }\r\n\r\n  &-item {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: space-between;\r\n\r\n    @media (max-width: 550px) {\r\n      flex-flow: row nowrap;\r\n      justify-content: space-between;\r\n      padding: 0 4rem;\r\n    }\r\n    @media (max-width: 380px) {\r\n      padding: 0 3rem;\r\n    }\r\n  }\r\n  &-day {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    @media (max-width: 550px) {\r\n      width: 12rem;\r\n    }\r\n  }\r\n\r\n  &-temp {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    gap: 0.5rem;\r\n    // @media (max-width: 300px) {\r\n    //   width: 15rem;\r\n    // }\r\n  }\r\n\r\n  &-high {\r\n    font-size: 2.9rem;\r\n    font-weight: bold;\r\n  }\r\n\r\n  &-low {\r\n    font-size: 1.4rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  &-icon {\r\n    width: 4rem;\r\n    height: 4rem;\r\n  }\r\n}\r\n\r\n// block responsible for hourly weather forecast\r\n.weather-forecast-hourly {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  min-height: 15rem;\r\n\r\n  @media (max-width: 550px) {\r\n    flex-flow: column;\r\n    align-items: space-between;\r\n    gap: 3rem;\r\n    max-height: 60rem;\r\n  }\r\n\r\n  &__item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-flow: column nowrap;\r\n    gap: 2rem;\r\n\r\n    @media (max-width: 550px) {\r\n      flex-flow: row;\r\n      padding: 0 4rem;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n    }\r\n\r\n    @media (max-width: 380px) {\r\n      padding: 0 3rem;\r\n    }\r\n  }\r\n\r\n  &__hour {\r\n    width: 8rem;\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n  }\r\n\r\n  &__temp {\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n  }\r\n\r\n  &__icon {\r\n    width: 4rem;\r\n    height: 4rem;\r\n  }\r\n}\r\n\r\n// block responsible for switching between two existing modes: hourly || daily\r\n.change-forecast {\r\n  color: $color-text;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-flow: row nowrap;\r\n  gap: 2rem;\r\n\r\n  @media (max-width: 550px) {\r\n    align-items: center;\r\n  }\r\n\r\n  &-button {\r\n    font-family: montserrat;\r\n    font-weight: 600;\r\n    color: $color-text;\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n    font-size: 1.4rem;\r\n    padding: 0.6rem 1.2rem;\r\n    cursor: pointer;\r\n    border: 2px solid transparent;\r\n  }\r\n\r\n  &-active-btn {\r\n    border: 2px solid $color-text;\r\n    border-radius: 0.5rem;\r\n  }\r\n}\r\n\r\n.change-hours {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-left: 1rem;\r\n\r\n  &-left,\r\n  &-right {\r\n    width: 1.4rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &-dot {\r\n    cursor: pointer;\r\n    width: 1.1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMfunctions.js":
/*!*****************************!*\
  !*** ./src/DOMfunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast.js */ "./src/forecast.js");
/* harmony import */ var _assets_SVG_dot_full_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/SVG/dot-full.svg */ "./src/assets/SVG/dot-full.svg");
/* harmony import */ var _assets_SVG_dot_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/SVG/dot_circle.svg */ "./src/assets/SVG/dot_circle.svg");
// This file is for manipulating dom in the way to match queries of users




let count = 1;
class DOM {
  #data;
  // div elements
  forecastDiv = document.querySelector(".forecast");
  dailyForecastDiv = document.querySelector(".weather-forecast-daily");
  hourlyForecastDiv = document.querySelector(".weather-forecast-hourly");
  changeForecastDiv = document.querySelector(".change-forecast");

  // elements to be added or deleted
  changeForecast = new _forecast_js__WEBPACK_IMPORTED_MODULE_0__["default"].ChangeForecast();
  changeHours = this.changeForecast.getChangeHours;
  dailyForecast;
  hourlyForecasts = [];

  // btn elements
  dailyBtn = document.querySelector(".change-forecast-daily");
  hourlyBtn = document.querySelector(".change-forecast-hourly");

  constructor(data) {
    this.#data = data;
    const allDots = this.changeHours.querySelectorAll(".change-hours-dot");
    this.changeHours.querySelector(".dot1").src = _assets_SVG_dot_full_svg__WEBPACK_IMPORTED_MODULE_1__;
    // Construct elements with data received
    this.dailyForecast = new _forecast_js__WEBPACK_IMPORTED_MODULE_0__["default"].DailyForecast(data).createContainer;
    for (let i = 1; i <= 3; i++) {
      const hourlyForecast = new _forecast_js__WEBPACK_IMPORTED_MODULE_0__["default"].HourlyForecast(
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
        targetDot.src = _assets_SVG_dot_full_svg__WEBPACK_IMPORTED_MODULE_1__;
        [...allDots].forEach((dot) => {
          if (dot != targetDot) {
            dot.src = _assets_SVG_dot_circle_svg__WEBPACK_IMPORTED_MODULE_2__;
          }
        });
      }
      if (element.classList.contains("left") && count > 1) {
        count--;
        forecast.removeChild(forecast.lastChild);
        forecast.appendChild(hourlyForecasts[count - 1]);
        const targetDot = this.querySelector(`.dot${count}`);
        targetDot.src = _assets_SVG_dot_full_svg__WEBPACK_IMPORTED_MODULE_1__;
        [...allDots].forEach((dot) => {
          if (dot != targetDot) {
            dot.src = _assets_SVG_dot_circle_svg__WEBPACK_IMPORTED_MODULE_2__;
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
        dot.src = _assets_SVG_dot_full_svg__WEBPACK_IMPORTED_MODULE_1__;
        [...allDots].forEach((item) => {
          if (item != dot) {
            item.src = _assets_SVG_dot_circle_svg__WEBPACK_IMPORTED_MODULE_2__;
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


/***/ }),

/***/ "./src/forecast-hourly.js":
/*!********************************!*\
  !*** ./src/forecast-hourly.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HourlyForecast": () => (/* binding */ HourlyForecast)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");
// this file is responsible for creating hourly forecast


class HourlyForecast {
  #hourlyForecast = document.createElement("div");
  #data;
  #timezone;

  constructor(data) {
    this.#data = data.hourly;
    this.#timezone = data.timezone;
    this.#hourlyForecast.classList.add("weather-forecast-hourly");
    this.#hourlyForecast.classList.add("general-forecast");
  }

  createHourlyElement(weatherData) {
    const item = document.createElement("div");
    item.classList.add("weather-forecast-hourly__item");

    const data = _helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDataHourly(weatherData, this.#timezone);
    const hour = document.createElement("span");
    hour.classList.add("weather-forecast-hourly__hour");
    hour.textContent = data.hour;
    const temp = document.createElement("span");
    temp.classList.add("weather-forecast-hourly__temp");
    temp.textContent = data.temp;
    const icon = document.createElement("span");
    icon.classList.add("weather-forecast-hourly__icon");
    icon.innerHTML = _helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIcon(data.icon);

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


/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forecast": () => (/* binding */ Forecast),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");
/* harmony import */ var _assets_SVG_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/SVG/arrow_left.svg */ "./src/assets/SVG/arrow_left.svg");
/* harmony import */ var _assets_SVG_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/SVG/arrow_right.svg */ "./src/assets/SVG/arrow_right.svg");
/* harmony import */ var _assets_SVG_dot_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/SVG/dot_circle.svg */ "./src/assets/SVG/dot_circle.svg");
/* harmony import */ var _forecast_hourly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forecast-hourly.js */ "./src/forecast-hourly.js");
// this file is used to construct bottom forecast of the weather






class ChangeForecast {
  #changeForecast = document.createElement("div");

  constructor() {
    this.#changeForecast.classList.add("change-forecast");
    const dailyButton = this.generateButton("change-forecast-daily", "Daily");
    const hourlyButton = this.generateButton(
      "change-forecast-hourly",
      "Hourly"
    );

    // activate border at initial load
    dailyButton.classList.add("change-forecast-active-btn");
    this.#changeForecast.appendChild(dailyButton);
    this.#changeForecast.appendChild(hourlyButton);
  }

  get getChangeForecast() {
    return this.#changeForecast;
  }

  get getChangeHours() {
    return this.changeHours();
  }

  createIcon(icon, clas) {
    const uiIcon = document.createElement("img");
    uiIcon.src = icon;
    uiIcon.classList.add(clas);
    if (clas.match(/(dot)/g)) {
      uiIcon.classList.add("change-hours-dot");
    }
    if (clas.match(/(left)/g)) {
      uiIcon.classList.add("left");
    }
    if (clas.match(/(right)/g)) {
      uiIcon.classList.add("right");
    }
    return uiIcon;
  }

  changeHours() {
    const container = document.createElement("div");
    container.classList.add("change-hours");
    container.appendChild(this.createIcon(_assets_SVG_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__, "change-hours-left"));
    for (let i = 1; i <= 3; i++) {
      container.appendChild(this.createIcon(_assets_SVG_dot_circle_svg__WEBPACK_IMPORTED_MODULE_3__, `dot${i}`));
    }
    container.appendChild(this.createIcon(_assets_SVG_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__, "change-hours-right"));
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
    this.#daily_block.classList.add("general-forecast");
  }

  createForecast(weatherData) {
    // transform data
    const data = _helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDataDaily(weatherData);
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
    weatherIcon.innerHTML = _helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIcon(data.icon);

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

class Forecast {
  #forecastDiv = document.createElement("div");
  constructor(data) {
    this.#forecastDiv.classList.add("forecast");
    const changeForecast = new ChangeForecast().getChangeForecast;
    const dailyForecast = new DailyForecast(data);
    this.#forecastDiv.appendChild(changeForecast);
    this.#forecastDiv.appendChild(dailyForecast.createContainer);
    return this.#forecastDiv;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ Forecast, DailyForecast, ChangeForecast, HourlyForecast: _forecast_hourly_js__WEBPACK_IMPORTED_MODULE_4__.HourlyForecast });


/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// days of week
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**getDataDaily function to return formated data to Daily Forecast*/
function getDataDaily(data) {
  const weatherData = {};
  const date = new Date(data.dt * 1000);
  weatherData.day = dayNames[date.getDay()];
  weatherData.highTemp =
    data.temp.max > 220
      ? Math.round(data.temp.max - 273.15) + " °C"
      : Math.round(data.temp.max) + " °F";
  weatherData.lowTemp =
    data.temp.min > 220
      ? Math.round(data.temp.min - 273.15) + " °C"
      : Math.round(data.temp.min) + " °F";
  weatherData.icon = data.weather[0].icon;
  return weatherData;
}

/**getDataHourly function to return formated data to Hourly Forecast*/
function getDataHourly(data, timezone) {
  const weatherData = {};
  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: timezone,
  });
  const [hour, , part] = currentTime.split(", ")[1].split(":");
  weatherData.hour = `${hour} : ${part.slice(-2).toLowerCase()}`;
  weatherData.temp =
    data.temp > 220
      ? Math.round(data.temp - 273.15) + " °C"
      : Math.round(data.temp) + " °F";
  weatherData.icon = data.weather[0].icon;
  return weatherData;
}

/**getIcon function to return icon for weather
 * Accept code from data object, that corresponds to weather icon
 */
function getIcon(code) {
  if (code === "01d") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="3 3 26 26">
    <title>sun</title>
    <path d="M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zM16 7c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM16 25c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM23.777 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.223 22.365l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.392 0.391-1.023 0-1.414s-1.023-0.392-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1zM28 15h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.221 9.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.392-0.391-1.023-0.391-1.414 0s-0.392 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z"/>
    </svg>`;
  }

  if (code === "01n") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="8.21 8.21 15.57 15.57">
    <title>moon</title>
    <path d="M21.866 21.447c-3.117 3.12-8.193 3.12-11.313 0s-3.12-8.195 0-11.314c0.826-0.824 1.832-1.453 2.989-1.863 0.365-0.128 0.768-0.035 1.039 0.237 0.274 0.273 0.366 0.677 0.237 1.039-0.784 2.211-0.25 4.604 1.391 6.245 1.638 1.639 4.031 2.172 6.245 1.391 0.362-0.129 0.767-0.036 1.039 0.237 0.273 0.271 0.365 0.676 0.236 1.039-0.408 1.157-1.038 2.164-1.863 2.989zM11.967 11.547c-2.34 2.34-2.34 6.147 0 8.486 2.5 2.501 6.758 2.276 8.937-0.51-2.247 0.141-4.461-0.671-6.109-2.318s-2.458-3.861-2.318-6.108c-0.18 0.141-0.35 0.29-0.51 0.451z"/>
    </svg>`;
  }
  if (code === "02d") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">
    <title>cloudy-day</title>
    <path d="M13 4c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM20.777 6.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM1 14h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM22 13c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM5.221 6.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM25 16c-0.332 0-0.66 0.023-0.987 0.070-1.048-1.43-2.445-2.521-4.029-3.219-0.081-3.789-3.176-6.852-6.984-6.852-3.859 0-7 3.141-7 7 0 1.090 0.271 2.109 0.719 3.027-3.727 0.152-6.719 3.211-6.719 6.973 0 3.859 3.141 7 7 7 0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM13 8c2.488 0 4.535 1.823 4.919 4.203-0.626-0.125-1.266-0.203-1.919-0.203-2.871 0-5.531 1.238-7.398 3.328-0.371-0.698-0.602-1.482-0.602-2.328 0-2.762 2.238-5 5-5zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.484 0 0.941 0.091 1.383 0.221 0.176 0.049 0.354 0.089 0.52 0.158 0.273-0.535 0.617-1.025 0.999-1.484 1.461-1.758 3.634-2.895 6.099-2.895 0.633 0 1.24 0.091 1.828 0.232 0.66 0.156 1.284 0.393 1.865 0.706 1.456 0.773 2.651 1.971 3.404 3.441 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>
    </svg>`;
  }
  if (code === "02n") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 2.42 32 29.57">
    <title>cloudy-night</title>
    <path d="M27.191 16.385c0.305-0.227 0.613-0.449 0.889-0.725 0.826-0.827 1.454-1.833 1.862-2.991 0.13-0.362 0.038-0.768-0.236-1.039-0.272-0.273-0.676-0.366-1.039-0.237-2.212 0.781-4.605 0.25-6.244-1.391-1.641-1.641-2.174-4.033-1.391-6.244 0.128-0.363 0.036-0.767-0.237-1.040-0.271-0.271-0.676-0.365-1.039-0.237-1.159 0.411-2.164 1.039-2.99 1.864-2.096 2.094-2.749 5.063-2.030 7.737-2.703 0.345-5.133 1.781-6.751 3.987-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-3.090-2.026-5.689-4.809-6.615zM18.182 5.76c0.159-0.161 0.329-0.311 0.509-0.452-0.141 2.249 0.671 4.461 2.319 6.108 1.648 1.648 3.861 2.458 6.109 2.319-0.862 1.099-2.050 1.783-3.32 2.074-1.711-2.172-4.225-3.539-6.997-3.762-0.767-2.122-0.318-4.59 1.38-6.288zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 1.262-2.46 3.734-4.181 6.645-4.346 0.152-0.009 0.301-0.033 0.453-0.033 0.807 0 1.582 0.126 2.313 0.349 0.987 0.302 1.887 0.794 2.668 1.428 0.746 0.605 1.371 1.348 1.863 2.181 0.083 0.141 0.177 0.273 0.253 0.421 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>
    </svg>`;
  }
  if (code === "03d" || code === "03n") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6 32 20">
    <title>cloud</title>
    <path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 22c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>
    </svg>`;
  }
  if (code === "04d" || code === "04n") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6.57 32 25.43">
    <title>cloudy</title>
    <path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"/>
    </svg>`;
  }
  if (code === "09d" || code === "09n" || code === "10d" || code === "10n") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">
    <title>rainy</title>
    <path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"/>
    </svg>`;
  }
  if (code === "11d" || code === "11n") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">
    <title>lightning</title>
    <path d="M12 24l2 2-2 6 6-6-2-2 2-4-6 4zM32 8.427c0-3.072-2.5-5.57-5.573-5.57-0.15 0-0.298 0.005-0.447 0.017-1.445-1.802-3.624-2.874-5.98-2.874-2.355 0-4.535 1.072-5.98 2.874-0.148-0.012-0.298-0.017-0.449-0.017-3.070 0-5.57 2.499-5.57 5.57 0 0.322 0.043 0.633 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 0.069 0.060 0.151 0.102 0.221 0.16l1.77-1.18c-0.59-0.418-1.141-0.883-1.602-1.438-0.813 0.572-1.801 0.915-2.871 0.915-2.762 0-5-2.237-5-5 0-2.76 2.238-5 5-5 0.676 0 1.316 0.138 1.902 0.38 0.035-0.068 0.078-0.125 0.113-0.19 0.352-0.642 0.785-1.229 1.292-1.753 1.443-1.493 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.38 0.353-0.146 0.729-0.24 1.117-0.302l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.339 1.314 0.836 1.79 1.45 0.656 0.845 1.065 1.896 1.065 3.050 0 2.763-2.238 5-5 5-1.070 0-2.057-0.344-2.871-0.915-0.875 1.055-2.027 1.848-3.322 2.348l-0.374 0.746 1.141 1.141c1.066-0.415 2.064-1.012 2.944-1.777 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.604-0.565-3.068-1.479-4.25 0.911-0.992 1.479-2.301 1.479-3.75zM29.098 10.779c-1.155-0.84-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.543-4.814-4.070-8.013-4.070-2.133 0-4.145 0.691-5.809 1.897 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.849 2.852-3.128 5.070-3.128s4.122 1.279 5.068 3.128c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.57 0 0.906-0.348 1.723-0.902 2.352z"/>
    </svg>`;
  }
  if (code === "13d" || code === "13n") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0.5 1 47.01 47.01">
    <title>snow</title>
    <path d="M14.5 24.502c0 1 0.16 1.97 0.44 2.871l-4.080 2.35-7.26-1.94c-1.31-0.35-2.66 0.43-3.020 1.729-0.35 1.311 0.43 2.65 1.75 3l5.87 1.57-1.58 5.84c-0.35 1.301 0.43 2.65 1.74 3 1.32 0.35 2.67-0.43 3.020-1.738l1.94-7.221 4.27-2.451c1.11 1.010 2.46 1.771 3.95 2.172v5.5l-5.32 4.488c-0.96 0.99-0.96 2.59 0 3.59 0.96 0.99 2.52 0.99 3.48 0l4.3-4.439 4.3 4.439c0.96 0.99 2.52 0.99 3.479 0 0.961-1 0.961-2.6 0-3.59l-5.319-4.488v-5.5c1.49-0.4 2.84-1.162 3.95-2.172l4.27 2.451 1.94 7.221c0.35 1.309 1.699 2.088 3.020 1.738 1.311-0.35 2.091-1.699 1.74-3l-1.58-5.84 5.87-1.57c1.32-0.35 2.1-1.689 1.75-3-0.359-1.299-1.71-2.078-3.020-1.729l-7.261 1.939-4.079-2.35c0.279-0.9 0.439-1.871 0.439-2.871s-0.16-1.97-0.439-2.88l4.079-2.34 7.261 1.94c1.31 0.35 2.66-0.431 3.020-1.73 0.35-1.31-0.43-2.65-1.75-3l-5.87-1.57 1.58-5.84c0.351-1.3-0.43-2.649-1.74-3-1.32-0.35-2.67 0.43-3.020 1.74l-1.94 7.22-4.27 2.45c-1.11-1.010-2.46-1.77-3.95-2.17v-4.5l5.319-5.49c0.961-0.99 0.961-2.59 0-3.59-0.96-0.99-2.52-0.99-3.479 0l-4.3 4.442-4.3-4.44c-0.96-0.99-2.52-0.99-3.48 0-0.96 1-0.96 2.6 0 3.59l5.32 5.49v4.5c-1.49 0.4-2.84 1.16-3.95 2.17l-4.27-2.45-1.94-7.22c-0.35-1.311-1.7-2.090-3.020-1.74-1.31 0.351-2.090 1.7-1.74 3l1.58 5.84-5.87 1.57c-1.32 0.35-2.1 1.69-1.75 3 0.36 1.3 1.71 2.080 3.020 1.73l7.26-1.94 4.080 2.34c-0.28 0.91-0.44 1.879-0.44 2.879zM24 29.002c-2.49 0-4.5-2.010-4.5-4.5s2.010-4.5 4.5-4.5 4.5 2.010 4.5 4.5c0 2.49-2.010 4.5-4.5 4.5z"/>
    </svg>`;
  }
  if (code === "50d" || code === "50n") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="1.94 5.94 30 18">
    <title>mist</title>
    <path d="M30.938 13.938h-5.102c-0.504-4.487-4.277-8-8.898-8-3.113 0-5.859 1.591-7.477 4h-6.523c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.552c-0.226 0.638-0.374 1.306-0.45 2h-3.102c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.102c0.077 0.693 0.224 1.363 0.45 2h-5.37c-0.654 0-1.182 0.448-1.182 1s0.529 1 1.182 1h6.341c1.617 2.41 4.363 4 7.477 4s5.859-1.59 7.477-4h2.341c0.654 0 1.182-0.448 1.182-1s-0.529-1-1.182-1h-1.37c0.227-0.637 0.372-1.307 0.451-2h5.102c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10.639 11.938h6.298c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.884c1.263-1.233 2.983-2 4.884-2 3.518 0 6.409 2.617 6.898 6h-13.797c0.102-0.707 0.302-1.378 0.6-2zM16.938 21.938c-1.901 0-3.621-0.768-4.884-2h9.767c-1.262 1.232-2.982 2-4.883 2zM23.234 17.938h-12.595c-0.298-0.622-0.499-1.293-0.6-2h13.797c-0.102 0.707-0.302 1.378-0.602 2z"/>
    </svg>`;
  }

  return "";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getDataDaily, getIcon, dayNames, getDataHourly });


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast.js */ "./src/forecast.js");
/* harmony import */ var _DOMfunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMfunctions.js */ "./src/DOMfunctions.js");






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
    console.log(dataJSON);
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
  console.log(dataJSON);
  const upperBlock = new _main_js__WEBPACK_IMPORTED_MODULE_1__.UpperBlock(dataJSON);
  const bottom = new _forecast_js__WEBPACK_IMPORTED_MODULE_2__.Forecast(dataJSON);
  document.body.textContent = "";
  document.body.appendChild(upperBlock);
  document.body.appendChild(bottom);
  const manipulate = new _DOMfunctions_js__WEBPACK_IMPORTED_MODULE_3__.DOM(dataJSON);
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


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpperBlock": () => (/* binding */ UpperBlock)
/* harmony export */ });
/* harmony import */ var _assets_search_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/search-icon.png */ "./src/assets/search-icon.png");
/* harmony import */ var _assets_SVG_thermo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/SVG/thermo.svg */ "./src/assets/SVG/thermo.svg");
/* harmony import */ var _assets_SVG_humidity_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/SVG/humidity.svg */ "./src/assets/SVG/humidity.svg");
/* harmony import */ var _assets_SVG_wind_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/SVG/wind.svg */ "./src/assets/SVG/wind.svg");
/* harmony import */ var _assets_SVG_rainy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/SVG/rainy.svg */ "./src/assets/SVG/rainy.svg");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
// This module is to represent data about weather for today








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
    data.date = `${_helper__WEBPACK_IMPORTED_MODULE_5__["default"].dayNames[dateGlobal.getDay()]}, ${day}${suffix} ${
      months[month - 1]
    } \`${year.slice(-2)}`;

    const [hour, minute] = time.split(":");

    data.time = `${hour}:${minute} ${partOfDay.toLowerCase()}`;

    data.icon = _helper__WEBPACK_IMPORTED_MODULE_5__["default"].getIcon(this.#data.current.weather[0].icon);
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
            <img class="search-box__image" src=${_assets_search_icon_png__WEBPACK_IMPORTED_MODULE_0__} alt="search" type="submit" />
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
      this.generateElement(_assets_SVG_thermo_svg__WEBPACK_IMPORTED_MODULE_1__, data.feels_like, "Feels Like")
    );
    this.#asside.appendChild(
      this.generateElement(_assets_SVG_humidity_svg__WEBPACK_IMPORTED_MODULE_2__, data.humidity, "Humidity")
    );
    this.#asside.appendChild(
      this.generateElement(_assets_SVG_rainy_svg__WEBPACK_IMPORTED_MODULE_4__, data.chanceOfRain, "Chance of Rain")
    );
    this.#asside.appendChild(
      this.generateElement(_assets_SVG_wind_svg__WEBPACK_IMPORTED_MODULE_3__, data.windSpeed, "Wind Speed")
    );
    return this.#asside;
  }
}

class UpperBlock {
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


/***/ }),

/***/ "./src/assets/SVG/arrow_left.svg":
/*!***************************************!*\
  !*** ./src/assets/SVG/arrow_left.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e843e8cbfc94b8067320.svg";

/***/ }),

/***/ "./src/assets/SVG/arrow_right.svg":
/*!****************************************!*\
  !*** ./src/assets/SVG/arrow_right.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58fc0ffff6953e095e4e.svg";

/***/ }),

/***/ "./src/assets/SVG/dot-full.svg":
/*!*************************************!*\
  !*** ./src/assets/SVG/dot-full.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84dd00fc45cb703f3116.svg";

/***/ }),

/***/ "./src/assets/SVG/dot_circle.svg":
/*!***************************************!*\
  !*** ./src/assets/SVG/dot_circle.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e00b76aaca1568d5bf67.svg";

/***/ }),

/***/ "./src/assets/SVG/humidity.svg":
/*!*************************************!*\
  !*** ./src/assets/SVG/humidity.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1d6a408086ccf1129b6.svg";

/***/ }),

/***/ "./src/assets/SVG/rainy.svg":
/*!**********************************!*\
  !*** ./src/assets/SVG/rainy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbc8b172ed49247db355.svg";

/***/ }),

/***/ "./src/assets/SVG/thermo.svg":
/*!***********************************!*\
  !*** ./src/assets/SVG/thermo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d80d9325f2a6a118da5f.svg";

/***/ }),

/***/ "./src/assets/SVG/wind.svg":
/*!*********************************!*\
  !*** ./src/assets/SVG/wind.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27b084f7dd0eb29b2c27.svg";

/***/ }),

/***/ "./src/assets/back.jpg":
/*!*****************************!*\
  !*** ./src/assets/back.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "045edac4468e3ab87a83.jpg";

/***/ }),

/***/ "./src/assets/search-icon.png":
/*!************************************!*\
  !*** ./src/assets/search-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afa8a864e76e9c624eae.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG1IQUFtSCxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDakoseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLG9FQUFvRSxjQUFjLGVBQWUsd0JBQXdCLEdBQUcsVUFBVSwyQkFBMkIscUJBQXFCLEdBQUcsOEJBQThCLFVBQVUsdUJBQXVCLEtBQUssR0FBRyw4QkFBOEIsVUFBVSxxQkFBcUIsS0FBSyxHQUFHLDZCQUE2QixVQUFVLHFCQUFxQixLQUFLLEdBQUcsYUFBYSw2QkFBNkIsR0FBRyxVQUFVLHdDQUF3QyxrQkFBa0IsNkJBQTZCLDRCQUE0QixtQ0FBbUMsc0JBQXNCLGdDQUFnQyxpQ0FBaUMsMkJBQTJCLGtCQUFrQixtQkFBbUIseUlBQXlJLEdBQUcsOEJBQThCLFVBQVUsb0JBQW9CLEtBQUssR0FBRyw4QkFBOEIsVUFBVSxvQkFBb0IsS0FBSyxHQUFHLDZCQUE2QixVQUFVLG9CQUFvQixLQUFLLEdBQUcsNkJBQTZCLFVBQVUsc0JBQXNCLEtBQUssR0FBRyxZQUFZLGtCQUFrQiwwQkFBMEIsbUNBQW1DLCtCQUErQixHQUFHLDhCQUE4QixZQUFZLGlDQUFpQyxLQUFLLEdBQUcsOEJBQThCLFlBQVksaUNBQWlDLEtBQUssR0FBRyw2QkFBNkIsWUFBWSxnQ0FBZ0MsS0FBSyxHQUFHLDZCQUE2QixZQUFZLGdDQUFnQyxLQUFLLEdBQUcsNkJBQTZCLFlBQVksMEJBQTBCLEtBQUssR0FBRyxtQkFBbUIsa0JBQWtCLGNBQWMsNkJBQTZCLDRCQUE0QixtQ0FBbUMsR0FBRyw4QkFBOEIsb0JBQW9CLCtCQUErQixxQkFBcUIsbUJBQW1CLEdBQUcsdUJBQXVCLHFCQUFxQixzQkFBc0IsR0FBRyx1QkFBdUIscUJBQXFCLHNCQUFzQixHQUFHLDhCQUE4QixvQkFBb0Isc0JBQXNCLEdBQUcsMEJBQTBCLG9CQUFvQixzQkFBc0IscUJBQXFCLHdCQUF3QixzQkFBc0IsR0FBRyw2QkFBNkIsNEJBQTRCLHdCQUF3QixLQUFLLEdBQUcsdUJBQXVCLGlCQUFpQixpQkFBaUIsMEJBQTBCLEdBQUcsaUJBQWlCLGtCQUFrQiwwQkFBMEIsd0JBQXdCLHFDQUFxQyxzQkFBc0IscUJBQXFCLGlCQUFpQixHQUFHLDZCQUE2QixpQkFBaUIsdUJBQXVCLEtBQUssR0FBRyxzQkFBc0Isa0JBQWtCLHFCQUFxQiw0QkFBNEIsbUJBQW1CLGlCQUFpQixzQkFBc0IscUJBQXFCLEdBQUcsbUNBQW1DLG1CQUFtQixlQUFlLEdBQUcsNkJBQTZCLHdCQUF3QixzQkFBc0IsS0FBSyxHQUFHLHNCQUFzQixvQkFBb0IsZ0JBQWdCLEdBQUcsZ0JBQWdCLHNCQUFzQixzQkFBc0Isa0JBQWtCLDZCQUE2QixxQkFBcUIsR0FBRyw2QkFBNkIsZ0JBQWdCLHVCQUF1QixLQUFLLEdBQUcsc0JBQXNCLGtCQUFrQiw2QkFBNkIsNEJBQTRCLGNBQWMsR0FBRyw0QkFBNEIsa0JBQWtCLGdCQUFnQiw0QkFBNEIsMEJBQTBCLEdBQUcseUJBQXlCLGdCQUFnQixHQUFHLDhCQUE4QixrQkFBa0IsNkJBQTZCLGdCQUFnQixHQUFHLDBCQUEwQixzQkFBc0IscUJBQXFCLEdBQUcseUJBQXlCLHNCQUFzQixxQkFBcUIsR0FBRyxlQUFlLGtCQUFrQixzQkFBc0IsZ0JBQWdCLGdDQUFnQyw0QkFBNEIsR0FBRyw2QkFBNkIsZUFBZSwwQkFBMEIsa0JBQWtCLEtBQUssR0FBRyx1QkFBdUIsK0JBQStCLEdBQUcsOEJBQThCLHVCQUF1QixpQ0FBaUMsS0FBSyxHQUFHLDhCQUE4Qix1QkFBdUIsaUNBQWlDLEtBQUssR0FBRyw2QkFBNkIsdUJBQXVCLGdDQUFnQyxLQUFLLEdBQUcsNkJBQTZCLHVCQUF1QixnQ0FBZ0MsS0FBSyxHQUFHLDZCQUE2QixrQkFBa0IsMEJBQTBCLG1DQUFtQyxzQkFBc0IsR0FBRyw2QkFBNkIsNkJBQTZCLHdCQUF3QixnQ0FBZ0MsZ0JBQWdCLHdCQUF3QixLQUFLLEdBQUcsZ0NBQWdDLGtCQUFrQiw2QkFBNkIsbUNBQW1DLEdBQUcsNkJBQTZCLGtDQUFrQyw0QkFBNEIscUNBQXFDLHNCQUFzQixLQUFLLEdBQUcsNkJBQTZCLGtDQUFrQyxzQkFBc0IsS0FBSyxHQUFHLCtCQUErQixvQkFBb0IscUJBQXFCLEdBQUcsNkJBQTZCLGlDQUFpQyxtQkFBbUIsS0FBSyxHQUFHLGdDQUFnQyxrQkFBa0IsNkJBQTZCLGdCQUFnQixHQUFHLGdDQUFnQyxzQkFBc0Isc0JBQXNCLEdBQUcsK0JBQStCLHNCQUFzQixxQkFBcUIsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGlCQUFpQixHQUFHLDhCQUE4QixrQkFBa0IsMEJBQTBCLG1DQUFtQyxzQkFBc0IsR0FBRyw2QkFBNkIsOEJBQThCLHdCQUF3QixpQ0FBaUMsZ0JBQWdCLHdCQUF3QixLQUFLLEdBQUcsa0NBQWtDLGtCQUFrQixtQ0FBbUMsNkJBQTZCLGNBQWMsR0FBRyw2QkFBNkIsb0NBQW9DLHFCQUFxQixzQkFBc0IsMEJBQTBCLHFDQUFxQyxLQUFLLEdBQUcsNkJBQTZCLG9DQUFvQyxzQkFBc0IsS0FBSyxHQUFHLGtDQUFrQyxnQkFBZ0Isb0JBQW9CLHFCQUFxQixHQUFHLGtDQUFrQyxvQkFBb0Isc0JBQXNCLEdBQUcsa0NBQWtDLGdCQUFnQixpQkFBaUIsR0FBRyxzQkFBc0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsNEJBQTRCLDBCQUEwQixjQUFjLEdBQUcsNkJBQTZCLHNCQUFzQiwwQkFBMEIsS0FBSyxHQUFHLDJCQUEyQiw0QkFBNEIscUJBQXFCLG1CQUFtQixpQkFBaUIsa0JBQWtCLDRCQUE0QixzQkFBc0IsMkJBQTJCLG9CQUFvQixrQ0FBa0MsR0FBRywrQkFBK0IsOEJBQThCLDBCQUEwQixHQUFHLG1CQUFtQixrQkFBa0IsMEJBQTBCLGNBQWMsd0JBQXdCLDRCQUE0QixzQkFBc0IsR0FBRywyQ0FBMkMsa0JBQWtCLG9CQUFvQixHQUFHLHFCQUFxQixvQkFBb0Isa0JBQWtCLEdBQUcsT0FBTyx1TUFBdU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1B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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5Q0FBeUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLHNCQUFzQixFQUFFLDBCQUEwQjtBQUMxRSwyQkFBMkIsMkNBQTJDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBVztBQUN0QztBQUNBO0FBQ0EsMkJBQTJCLHFEQUFRO0FBQ25DO0FBQ0E7QUFDQSwyQkFBMkIsa0RBQUs7QUFDaEM7QUFDQTtBQUNBLDJCQUEyQixpREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9ET01mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZm9yZWNhc3QtaG91cmx5LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYmFjay5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTYuNSU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDUwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA0MCU7XFxuICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDhyZW07XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogN3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDZyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuLnVwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDE2cmVtKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xcbiAgLnVwcGVyIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNHJlbSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC51cHBlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTJyZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC51cHBlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gOHJlbSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xcbiAgLnVwcGVyIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA1cmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAudXBwZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgfVxcbn1cXG5cXG4ud2VhdGhlci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLndlYXRoZXItaW5mb19fZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi53ZWF0aGVyLWluZm9fX2NpdHkge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG4ud2VhdGhlci1pbmZvX19kYXRlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuLndlYXRoZXItaW5mb19fdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi53ZWF0aGVyLWluZm9fX2Rpc3BsYXkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC53ZWF0aGVyLWluZm9fX2Rpc3BsYXkge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG59XFxuLndlYXRoZXItaW5mb19faWNvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTByZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY1ZjU7XFxuICBwYWRkaW5nOiA3cHggMTRweDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgLnNlYXJjaC1ib3gge1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgfVxcbn1cXG4uc2VhcmNoLWJveF9faW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZjVmNWY1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uc2VhcmNoLWJveF9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjZjVmNWY1O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDMzMnB4KSB7XFxuICAuc2VhcmNoLWJveF9faW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDkwcHg7XFxuICB9XFxufVxcbi5zZWFyY2gtYm94X19pbWFnZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgLmVycm9yLW1zZyB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICB9XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4ud2VhdGhlci1kZXRhaWxzLWVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxufVxcbi53ZWF0aGVyLWRldGFpbHMtaWNvbiB7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuLndlYXRoZXItZGV0YWlscy1taW5pLWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG4ud2VhdGhlci1kZXRhaWxzLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLndlYXRoZXItZGV0YWlscy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMy41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLmZvcmVjYXN0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICB9XFxufVxcblxcbi5nZW5lcmFsLWZvcmVjYXN0IHtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZyZW0pO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICAuZ2VuZXJhbC1mb3JlY2FzdCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTRyZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuZ2VuZXJhbC1mb3JlY2FzdCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTJyZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5nZW5lcmFsLWZvcmVjYXN0IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA4cmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxuICAuZ2VuZXJhbC1mb3JlY2FzdCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNXJlbSk7XFxuICB9XFxufVxcblxcbi53ZWF0aGVyLWZvcmVjYXN0LWRhaWx5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4taGVpZ2h0OiAxNXJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAud2VhdGhlci1mb3JlY2FzdC1kYWlseSB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIG1heC1oZWlnaHQ6IDcwcmVtO1xcbiAgfVxcbn1cXG4ud2VhdGhlci1mb3JlY2FzdC1kYWlseS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLndlYXRoZXItZm9yZWNhc3QtZGFpbHktaXRlbSB7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xcbiAgLndlYXRoZXItZm9yZWNhc3QtZGFpbHktaXRlbSB7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gIH1cXG59XFxuLndlYXRoZXItZm9yZWNhc3QtZGFpbHktZGF5IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLndlYXRoZXItZm9yZWNhc3QtZGFpbHktZGF5IHtcXG4gICAgd2lkdGg6IDEycmVtO1xcbiAgfVxcbn1cXG4ud2VhdGhlci1mb3JlY2FzdC1kYWlseS10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLndlYXRoZXItZm9yZWNhc3QtZGFpbHktaGlnaCB7XFxuICBmb250LXNpemU6IDIuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ud2VhdGhlci1mb3JlY2FzdC1kYWlseS1sb3cge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ud2VhdGhlci1mb3JlY2FzdC1kYWlseS1pY29uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4ud2VhdGhlci1mb3JlY2FzdC1ob3VybHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWhvdXJseSB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiA2MHJlbTtcXG4gIH1cXG59XFxuLndlYXRoZXItZm9yZWNhc3QtaG91cmx5X19pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBnYXA6IDJyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLndlYXRoZXItZm9yZWNhc3QtaG91cmx5X19pdGVtIHtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIHBhZGRpbmc6IDAgNHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWhvdXJseV9faXRlbSB7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gIH1cXG59XFxuLndlYXRoZXItZm9yZWNhc3QtaG91cmx5X19ob3VyIHtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLndlYXRoZXItZm9yZWNhc3QtaG91cmx5X190ZW1wIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ud2VhdGhlci1mb3JlY2FzdC1ob3VybHlfX2ljb24ge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5jaGFuZ2UtZm9yZWNhc3Qge1xcbiAgY29sb3I6ICNmNWY1ZjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5jaGFuZ2UtZm9yZWNhc3Qge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG4uY2hhbmdlLWZvcmVjYXN0LWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZzogMC42cmVtIDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4uY2hhbmdlLWZvcmVjYXN0LWFjdGl2ZS1idG4ge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2Y1ZjVmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmNoYW5nZS1ob3VycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi5jaGFuZ2UtaG91cnMtbGVmdCwgLmNoYW5nZS1ob3Vycy1yaWdodCB7XFxuICB3aWR0aDogMS40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2hhbmdlLWhvdXJzLWRvdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMS4xcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdXBwZXJoZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2JvdHRvbS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRRTtFQUxGO0lBTUksZ0JBQUE7RUNMRjtBQUNGO0FET0U7RUFURjtJQVVJLGNBQUE7RUNKRjtBQUNGO0FETUU7RUFiRjtJQWNJLGNBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0Usd0JBQUE7QUNIRjs7QURNQTtFQUNFLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VB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Q0EsZ0JBQUE7RUFDQSxjSHpKUztFRzBKVCxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRmdPSjtBRTdORTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUYrTko7O0FFM05BO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBRjhORjtBRTVORTtFQUVFLGFBQUE7RUFDQSxlQUFBO0FGNk5KO0FFMU5FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUY0TkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gVGhpcyBmaWxlIGlzIGZvciBiYXNpYyBjb25maWd1cmF0aW9uIG9mIGJhY2tncm91bmQgYW5kIGJhc2ljIHNldHVwXFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuLy8gRGVjbGFyaW5nIHNvbWUgY29uc3RhbnRzXFxyXFxuJGJhY2tncm91bmQtaW1nLXVybDogdXJsKC4uL2Fzc2V0cy9iYWNrLmpwZyk7XFxyXFxuJGJhY2stYmxhY2s6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYShibGFjaywgMC40KSwgcmdiYShibGFjaywgMC40KSk7XFxyXFxuJGNvbG9yLXRleHQ6ICNmNWY1ZjU7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAvLyAxIHJlbSBpcyAxMHB4LCB3aGlsZSBpZiBmb250LXNpemUgaXMgMTAwJSB0aGVuIDEgcmVtIHdvdWxkIGJlIDE2cHhcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gICAgZm9udC1zaXplOiA1Ni41JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBhZGRpbmc6IDhyZW07XFxyXFxuICBjb2xvcjogJGNvbG9yLXRleHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAkYmFjay1ibGFjaywgJGJhY2tncm91bmQtaW1nLXVybDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gICAgcGFkZGluZzogN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgcGFkZGluZzogNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxyXFxuICAgIHBhZGRpbmc6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTYuNSU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDUwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA0MCU7XFxuICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDhyZW07XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLCB1cmwoLi4vYXNzZXRzL2JhY2suanBnKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDdyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiA2cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAyLjVyZW07XFxuICB9XFxufVxcblxcbi51cHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnJlbSk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXG4gIC51cHBlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTRyZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAudXBwZXIge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEycmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAudXBwZXIge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDhyZW0pO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcXG4gIC51cHBlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNXJlbSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLnVwcGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi53ZWF0aGVyLWluZm9fX2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ud2VhdGhlci1pbmZvX19jaXR5IHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuLndlYXRoZXItaW5mb19fZGF0ZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbi53ZWF0aGVyLWluZm9fX3RlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ud2VhdGhlci1pbmZvX19kaXNwbGF5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBtYXJnaW4tdG9wOiAtMXJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAud2VhdGhlci1pbmZvX19kaXNwbGF5IHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxufVxcbi53ZWF0aGVyLWluZm9fX2ljb24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmNWY1O1xcbiAgcGFkZGluZzogN3B4IDE0cHg7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5zZWFyY2gtYm94IHtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gIH1cXG59XFxuLnNlYXJjaC1ib3hfX2lucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnNlYXJjaC1ib3hfX2lucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzMzJweCkge1xcbiAgLnNlYXJjaC1ib3hfX2lucHV0IHtcXG4gICAgbWF4LXdpZHRoOiA5MHB4O1xcbiAgfVxcbn1cXG4uc2VhcmNoLWJveF9faW1hZ2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5lcnJvci1tc2cge1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgfVxcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogM3JlbTtcXG59XFxuLndlYXRoZXItZGV0YWlscy1lbGVtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbn1cXG4ud2VhdGhlci1kZXRhaWxzLWljb24ge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcbi53ZWF0aGVyLWRldGFpbHMtbWluaS1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBnYXA6IDAuOHJlbTtcXG59XFxuLndlYXRoZXItZGV0YWlscy1sYWJlbCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi53ZWF0aGVyLWRldGFpbHMtdGV4dCB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDMuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5mb3JlY2FzdCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMi41cmVtO1xcbiAgfVxcbn1cXG5cXG4uZ2VuZXJhbC1mb3JlY2FzdCB7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDE2cmVtKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xcbiAgLmdlbmVyYWwtZm9yZWNhc3Qge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE0cmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLmdlbmVyYWwtZm9yZWNhc3Qge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEycmVtKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuZ2VuZXJhbC1mb3JlY2FzdCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gOHJlbSk7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xcbiAgLmdlbmVyYWwtZm9yZWNhc3Qge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDVyZW0pO1xcbiAgfVxcbn1cXG5cXG4ud2VhdGhlci1mb3JlY2FzdC1kYWlseSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLWhlaWdodDogMTVyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLndlYXRoZXItZm9yZWNhc3QtZGFpbHkge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiA3MHJlbTtcXG4gIH1cXG59XFxuLndlYXRoZXItZm9yZWNhc3QtZGFpbHktaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWRhaWx5LWl0ZW0ge1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWRhaWx5LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICB9XFxufVxcbi53ZWF0aGVyLWZvcmVjYXN0LWRhaWx5LWRheSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWRhaWx5LWRheSB7XFxuICAgIHdpZHRoOiAxMnJlbTtcXG4gIH1cXG59XFxuLndlYXRoZXItZm9yZWNhc3QtZGFpbHktdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi53ZWF0aGVyLWZvcmVjYXN0LWRhaWx5LWhpZ2gge1xcbiAgZm9udC1zaXplOiAyLjlyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLndlYXRoZXItZm9yZWNhc3QtZGFpbHktbG93IHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLndlYXRoZXItZm9yZWNhc3QtZGFpbHktaWNvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLndlYXRoZXItZm9yZWNhc3QtaG91cmx5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4taGVpZ2h0OiAxNXJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAud2VhdGhlci1mb3JlY2FzdC1ob3VybHkge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogM3JlbTtcXG4gICAgbWF4LWhlaWdodDogNjByZW07XFxuICB9XFxufVxcbi53ZWF0aGVyLWZvcmVjYXN0LWhvdXJseV9faXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWhvdXJseV9faXRlbSB7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbiAgICBwYWRkaW5nOiAwIDRyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxuICAud2VhdGhlci1mb3JlY2FzdC1ob3VybHlfX2l0ZW0ge1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICB9XFxufVxcbi53ZWF0aGVyLWZvcmVjYXN0LWhvdXJseV9faG91ciB7XFxuICB3aWR0aDogOHJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi53ZWF0aGVyLWZvcmVjYXN0LWhvdXJseV9fdGVtcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLndlYXRoZXItZm9yZWNhc3QtaG91cmx5X19pY29uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uY2hhbmdlLWZvcmVjYXN0IHtcXG4gIGNvbG9yOiAjZjVmNWY1O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGdhcDogMnJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAuY2hhbmdlLWZvcmVjYXN0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuLmNoYW5nZS1mb3JlY2FzdC1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmNoYW5nZS1mb3JlY2FzdC1hY3RpdmUtYnRuIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNWY1ZjU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5jaGFuZ2UtaG91cnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4uY2hhbmdlLWhvdXJzLWxlZnQsIC5jaGFuZ2UtaG91cnMtcmlnaHQge1xcbiAgd2lkdGg6IDEuNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoYW5nZS1ob3Vycy1kb3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEuMXJlbTtcXG59XCIsXCIvLyAvLyBUaGlzIGZpbGUgaXMgZm9yIGNyZWF0aW5nIHVwcGVyIGJsb2NrIHRoYXQgZGlzcGxheXMgdG9kYXkncyB3ZWF0aGVyXFxyXFxuXFxyXFxuLy8gTWFpbiBibG9jayB0byB2aXN1YWxpemUgd2VhdGhlciBpbmZvcm1hdGlvblxcclxcbi51cHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnJlbSk7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTRyZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEycmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDhyZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAmX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fY2l0eSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGF0ZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGVtcGVyYXR1cmUge1xcclxcbiAgICBmb250LXNpemU6IDZyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGlzcGxheSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faWNvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRjb2xvci10ZXh0O1xcclxcbiAgcGFkZGluZzogN3B4IDE0cHg7XFxyXFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXRleHQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFxyXFxuICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzMycHgpIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDkwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltYWdlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1zZyB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gcmlnaHQgc2lkZSBibG9jayBhYm91dCB3ZWF0aGVyIGRldGFpbHNcXHJcXG4ud2VhdGhlci1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG5cXHJcXG4gICYtZWxlbWVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgfVxcclxcbiAgJi1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICB9XFxyXFxuICAmLW1pbmktY29udCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgZ2FwOiAwLjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLWxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIuZm9yZWNhc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgZ2FwOiAzLjVyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdlbmVyYWwtZm9yZWNhc3Qge1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnJlbSk7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTRyZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEycmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDhyZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNXJlbSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWRhaWx5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtaW4taGVpZ2h0OiAxNXJlbTtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA3MHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXHJcXG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYtZGF5IHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXHJcXG4gICAgICB3aWR0aDogMTJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtdGVtcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIC8vIEBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xcclxcbiAgICAvLyAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gICAgLy8gfVxcclxcbiAgfVxcclxcblxcclxcbiAgJi1oaWdoIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi1sb3cge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA0cmVtO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIGJsb2NrIHJlc3BvbnNpYmxlIGZvciBob3VybHkgd2VhdGhlciBmb3JlY2FzdFxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWhvdXJseSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWluLWhlaWdodDogMTVyZW07XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgICAgIGZsZXgtZmxvdzogcm93O1xcclxcbiAgICAgIHBhZGRpbmc6IDAgNHJlbTtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2hvdXIge1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGVtcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pY29uIHtcXHJcXG4gICAgd2lkdGg6IDRyZW07XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gYmxvY2sgcmVzcG9uc2libGUgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIHR3byBleGlzdGluZyBtb2RlczogaG91cmx5IHx8IGRhaWx5XFxyXFxuLmNoYW5nZS1mb3JlY2FzdCB7XFxyXFxuICBjb2xvcjogJGNvbG9yLXRleHQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXRleHQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjZyZW0gMS4ycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgJi1hY3RpdmUtYnRuIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLXRleHQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS1ob3VycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuXFxyXFxuICAmLWxlZnQsXFxyXFxuICAmLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDEuNHJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi1kb3Qge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxLjFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoaXMgZmlsZSBpcyBmb3IgbWFuaXB1bGF0aW5nIGRvbSBpbiB0aGUgd2F5IHRvIG1hdGNoIHF1ZXJpZXMgb2YgdXNlcnNcclxuXHJcbmltcG9ydCBib3R0b20gZnJvbSBcIi4vZm9yZWNhc3QuanNcIjtcclxuaW1wb3J0IGZpbGxlZERvdCBmcm9tIFwiLi9hc3NldHMvU1ZHL2RvdC1mdWxsLnN2Z1wiO1xyXG5pbXBvcnQgY2lyY2xlRG90IGZyb20gXCIuL2Fzc2V0cy9TVkcvZG90X2NpcmNsZS5zdmdcIjtcclxubGV0IGNvdW50ID0gMTtcclxuZXhwb3J0IGNsYXNzIERPTSB7XHJcbiAgI2RhdGE7XHJcbiAgLy8gZGl2IGVsZW1lbnRzXHJcbiAgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xyXG4gIGRhaWx5Rm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZm9yZWNhc3QtZGFpbHlcIik7XHJcbiAgaG91cmx5Rm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZm9yZWNhc3QtaG91cmx5XCIpO1xyXG4gIGNoYW5nZUZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2UtZm9yZWNhc3RcIik7XHJcblxyXG4gIC8vIGVsZW1lbnRzIHRvIGJlIGFkZGVkIG9yIGRlbGV0ZWRcclxuICBjaGFuZ2VGb3JlY2FzdCA9IG5ldyBib3R0b20uQ2hhbmdlRm9yZWNhc3QoKTtcclxuICBjaGFuZ2VIb3VycyA9IHRoaXMuY2hhbmdlRm9yZWNhc3QuZ2V0Q2hhbmdlSG91cnM7XHJcbiAgZGFpbHlGb3JlY2FzdDtcclxuICBob3VybHlGb3JlY2FzdHMgPSBbXTtcclxuXHJcbiAgLy8gYnRuIGVsZW1lbnRzXHJcbiAgZGFpbHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1mb3JlY2FzdC1kYWlseVwiKTtcclxuICBob3VybHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1mb3JlY2FzdC1ob3VybHlcIik7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuI2RhdGEgPSBkYXRhO1xyXG4gICAgY29uc3QgYWxsRG90cyA9IHRoaXMuY2hhbmdlSG91cnMucXVlcnlTZWxlY3RvckFsbChcIi5jaGFuZ2UtaG91cnMtZG90XCIpO1xyXG4gICAgdGhpcy5jaGFuZ2VIb3Vycy5xdWVyeVNlbGVjdG9yKFwiLmRvdDFcIikuc3JjID0gZmlsbGVkRG90O1xyXG4gICAgLy8gQ29uc3RydWN0IGVsZW1lbnRzIHdpdGggZGF0YSByZWNlaXZlZFxyXG4gICAgdGhpcy5kYWlseUZvcmVjYXN0ID0gbmV3IGJvdHRvbS5EYWlseUZvcmVjYXN0KGRhdGEpLmNyZWF0ZUNvbnRhaW5lcjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICBjb25zdCBob3VybHlGb3JlY2FzdCA9IG5ldyBib3R0b20uSG91cmx5Rm9yZWNhc3QoXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICApLmNyZWF0ZUhvdXJseUZvcmVjYXN0KGkpO1xyXG4gICAgICB0aGlzLmhvdXJseUZvcmVjYXN0cy5wdXNoKGhvdXJseUZvcmVjYXN0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0cyA9IHRoaXMuaG91cmx5Rm9yZWNhc3RzO1xyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNoYW5nZSBob3Vyc1xyXG4gICAgdGhpcy5jaGFuZ2VIb3Vycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInJpZ2h0XCIpICYmIGNvdW50IDwgMykge1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgZm9yZWNhc3QucmVtb3ZlQ2hpbGQoZm9yZWNhc3QubGFzdENoaWxkKTtcclxuICAgICAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdHNbY291bnQgLSAxXSk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RG90ID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAuZG90JHtjb3VudH1gKTtcclxuICAgICAgICB0YXJnZXREb3Quc3JjID0gZmlsbGVkRG90O1xyXG4gICAgICAgIFsuLi5hbGxEb3RzXS5mb3JFYWNoKChkb3QpID0+IHtcclxuICAgICAgICAgIGlmIChkb3QgIT0gdGFyZ2V0RG90KSB7XHJcbiAgICAgICAgICAgIGRvdC5zcmMgPSBjaXJjbGVEb3Q7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGVmdFwiKSAmJiBjb3VudCA+IDEpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIGZvcmVjYXN0LnJlbW92ZUNoaWxkKGZvcmVjYXN0Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RzW2NvdW50IC0gMV0pO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldERvdCA9IHRoaXMucXVlcnlTZWxlY3RvcihgLmRvdCR7Y291bnR9YCk7XHJcbiAgICAgICAgdGFyZ2V0RG90LnNyYyA9IGZpbGxlZERvdDtcclxuICAgICAgICBbLi4uYWxsRG90c10uZm9yRWFjaCgoZG90KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZG90ICE9IHRhcmdldERvdCkge1xyXG4gICAgICAgICAgICBkb3Quc3JjID0gY2lyY2xlRG90O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RcIik7XHJcbiAgICBbLi4uYWxsRG90c10uZm9yRWFjaChmdW5jdGlvbiAoZG90KSB7XHJcbiAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRvdC5jbGFzc0xpc3RbMF07XHJcbiAgICAgICAgY29uc3QgbnVtID0gY2xhc3NOYW1lLnNsaWNlKC0xKTtcclxuICAgICAgICBjb3VudCA9ICtudW07XHJcbiAgICAgICAgZm9yZWNhc3QucmVtb3ZlQ2hpbGQoZm9yZWNhc3QubGFzdENoaWxkKTtcclxuICAgICAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdHNbbnVtIC0gMV0pO1xyXG4gICAgICAgIGRvdC5zcmMgPSBmaWxsZWREb3Q7XHJcbiAgICAgICAgWy4uLmFsbERvdHNdLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtICE9IGRvdCkge1xyXG4gICAgICAgICAgICBpdGVtLnNyYyA9IGNpcmNsZURvdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIEFkZCBFdmVudCBMaXN0ZW5lcnMgdG8gZGFpbHkgYW5kIGhvdXJseSBidXR0b25zXHJcbiAgICB0aGlzLmRhaWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgdGhpcy5hY3RpdmVEYWlseS5iaW5kKFxyXG4gICAgICAgIHRoaXMuZGFpbHlCdG4sXHJcbiAgICAgICAgdGhpcy5ob3VybHlCdG4sXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VIb3VycyxcclxuICAgICAgICB0aGlzLmNoYW5nZUZvcmVjYXN0RGl2LFxyXG4gICAgICAgIHRoaXMuZm9yZWNhc3REaXYsXHJcbiAgICAgICAgdGhpcy5kYWlseUZvcmVjYXN0XHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5ob3VybHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICB0aGlzLmFjdGl2ZUhvdXJseS5iaW5kKFxyXG4gICAgICAgIHRoaXMuaG91cmx5QnRuLFxyXG4gICAgICAgIHRoaXMuZGFpbHlCdG4sXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VIb3VycyxcclxuICAgICAgICB0aGlzLmNoYW5nZUZvcmVjYXN0RGl2LFxyXG4gICAgICAgIHRoaXMuZm9yZWNhc3REaXYsXHJcbiAgICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdHNbMF1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGFpbHlGb3JlY2FzdCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmhvdXJseUZvcmVjYXN0KTtcclxuICB9XHJcblxyXG4gIGdldCBnZXRIb3VybHlGb3JlY2FzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmhvdXJseUZvcmVjYXN0cztcclxuICB9XHJcblxyXG4gIC8qKiBhY3RpdmF0ZXMgZGFpbHkgbW9kZSAqL1xyXG4gIGFjdGl2ZURhaWx5KGhvdXJseSwgY2hhbmdlSG91cnMsIHBhcmVudCwgZm9yZWNhc3QsIGRhaWx5Rm9yZWNhc3QpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImNoYW5nZS1mb3JlY2FzdC1hY3RpdmUtYnRuXCIpO1xyXG4gICAgaWYgKGhvdXJseS5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGFuZ2UtZm9yZWNhc3QtYWN0aXZlLWJ0blwiKSlcclxuICAgICAgaG91cmx5LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGFuZ2UtZm9yZWNhc3QtYWN0aXZlLWJ0blwiKTtcclxuICAgIGlmIChwYXJlbnQubGFzdENoaWxkID09IGNoYW5nZUhvdXJzKSB7XHJcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGFuZ2VIb3Vycyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSBmb3JlY2FzdC5sYXN0Q2hpbGQ7XHJcbiAgICBmb3JlY2FzdC5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xyXG4gICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdCk7XHJcbiAgfVxyXG5cclxuICAvKiogYWN0aXZhdGVzIGhvdXJseSBtb2RlICovXHJcbiAgYWN0aXZlSG91cmx5KGRhaWx5LCBjaGFuZ2VIb3VycywgcGFyZW50LCBmb3JlY2FzdCwgaG91cmx5Rm9yZWNhc3QpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImNoYW5nZS1mb3JlY2FzdC1hY3RpdmUtYnRuXCIpO1xyXG4gICAgaWYgKGRhaWx5LmNsYXNzTGlzdC5jb250YWlucyhcImNoYW5nZS1mb3JlY2FzdC1hY3RpdmUtYnRuXCIpKVxyXG4gICAgICBkYWlseS5jbGFzc0xpc3QucmVtb3ZlKFwiY2hhbmdlLWZvcmVjYXN0LWFjdGl2ZS1idG5cIik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hhbmdlSG91cnMpO1xyXG4gICAgY29uc3QgbGFzdENoaWxkID0gZm9yZWNhc3QubGFzdENoaWxkO1xyXG4gICAgZm9yZWNhc3QucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcclxuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0KTtcclxuICB9XHJcbn1cclxuIiwiLy8gdGhpcyBmaWxlIGlzIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBob3VybHkgZm9yZWNhc3RcclxuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXIuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb3VybHlGb3JlY2FzdCB7XHJcbiAgI2hvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAjZGF0YTtcclxuICAjdGltZXpvbmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuI2RhdGEgPSBkYXRhLmhvdXJseTtcclxuICAgIHRoaXMuI3RpbWV6b25lID0gZGF0YS50aW1lem9uZTtcclxuICAgIHRoaXMuI2hvdXJseUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWZvcmVjYXN0LWhvdXJseVwiKTtcclxuICAgIHRoaXMuI2hvdXJseUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJnZW5lcmFsLWZvcmVjYXN0XCIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSG91cmx5RWxlbWVudCh3ZWF0aGVyRGF0YSkge1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWZvcmVjYXN0LWhvdXJseV9faXRlbVwiKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gaGVscGVyLmdldERhdGFIb3VybHkod2VhdGhlckRhdGEsIHRoaXMuI3RpbWV6b25lKTtcclxuICAgIGNvbnN0IGhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZm9yZWNhc3QtaG91cmx5X19ob3VyXCIpO1xyXG4gICAgaG91ci50ZXh0Q29udGVudCA9IGRhdGEuaG91cjtcclxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZm9yZWNhc3QtaG91cmx5X190ZW1wXCIpO1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGRhdGEudGVtcDtcclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGljb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZm9yZWNhc3QtaG91cmx5X19pY29uXCIpO1xyXG4gICAgaWNvbi5pbm5lckhUTUwgPSBoZWxwZXIuZ2V0SWNvbihkYXRhLmljb24pO1xyXG5cclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaG91cik7XHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKHRlbXApO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSG91cmx5Rm9yZWNhc3Qob3JkZXIgPSAxKSB7XHJcbiAgICBmb3IgKGxldCBpID0gOCAqIChvcmRlciAtIDEpOyBpIDwgOCAqIG9yZGVyOyBpKyspIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlSG91cmx5RWxlbWVudCh0aGlzLiNkYXRhW2kgKyAxXSk7XHJcbiAgICAgIHRoaXMuI2hvdXJseUZvcmVjYXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLiNob3VybHlGb3JlY2FzdDtcclxuICB9XHJcbn1cclxuIiwiLy8gdGhpcyBmaWxlIGlzIHVzZWQgdG8gY29uc3RydWN0IGJvdHRvbSBmb3JlY2FzdCBvZiB0aGUgd2VhdGhlclxyXG5pbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlci5qc1wiO1xyXG5pbXBvcnQgbGVmdCBmcm9tIFwiLi9hc3NldHMvU1ZHL2Fycm93X2xlZnQuc3ZnXCI7XHJcbmltcG9ydCByaWdodCBmcm9tIFwiLi9hc3NldHMvU1ZHL2Fycm93X3JpZ2h0LnN2Z1wiO1xyXG5pbXBvcnQgZG90Q2lyY2xlIGZyb20gXCIuL2Fzc2V0cy9TVkcvZG90X2NpcmNsZS5zdmdcIjtcclxuaW1wb3J0IHsgSG91cmx5Rm9yZWNhc3QgfSBmcm9tIFwiLi9mb3JlY2FzdC1ob3VybHkuanNcIjtcclxuXHJcbmNsYXNzIENoYW5nZUZvcmVjYXN0IHtcclxuICAjY2hhbmdlRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuI2NoYW5nZUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtZm9yZWNhc3RcIik7XHJcbiAgICBjb25zdCBkYWlseUJ1dHRvbiA9IHRoaXMuZ2VuZXJhdGVCdXR0b24oXCJjaGFuZ2UtZm9yZWNhc3QtZGFpbHlcIiwgXCJEYWlseVwiKTtcclxuICAgIGNvbnN0IGhvdXJseUJ1dHRvbiA9IHRoaXMuZ2VuZXJhdGVCdXR0b24oXHJcbiAgICAgIFwiY2hhbmdlLWZvcmVjYXN0LWhvdXJseVwiLFxyXG4gICAgICBcIkhvdXJseVwiXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGFjdGl2YXRlIGJvcmRlciBhdCBpbml0aWFsIGxvYWRcclxuICAgIGRhaWx5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtZm9yZWNhc3QtYWN0aXZlLWJ0blwiKTtcclxuICAgIHRoaXMuI2NoYW5nZUZvcmVjYXN0LmFwcGVuZENoaWxkKGRhaWx5QnV0dG9uKTtcclxuICAgIHRoaXMuI2NoYW5nZUZvcmVjYXN0LmFwcGVuZENoaWxkKGhvdXJseUJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0Q2hhbmdlRm9yZWNhc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2hhbmdlRm9yZWNhc3Q7XHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0Q2hhbmdlSG91cnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VIb3VycygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSWNvbihpY29uLCBjbGFzKSB7XHJcbiAgICBjb25zdCB1aUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgdWlJY29uLnNyYyA9IGljb247XHJcbiAgICB1aUljb24uY2xhc3NMaXN0LmFkZChjbGFzKTtcclxuICAgIGlmIChjbGFzLm1hdGNoKC8oZG90KS9nKSkge1xyXG4gICAgICB1aUljb24uY2xhc3NMaXN0LmFkZChcImNoYW5nZS1ob3Vycy1kb3RcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoY2xhcy5tYXRjaCgvKGxlZnQpL2cpKSB7XHJcbiAgICAgIHVpSWNvbi5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcclxuICAgIH1cclxuICAgIGlmIChjbGFzLm1hdGNoKC8ocmlnaHQpL2cpKSB7XHJcbiAgICAgIHVpSWNvbi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdWlJY29uO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSG91cnMoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtaG91cnNcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVJY29uKGxlZnQsIFwiY2hhbmdlLWhvdXJzLWxlZnRcIikpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUljb24oZG90Q2lyY2xlLCBgZG90JHtpfWApKTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUljb24ocmlnaHQsIFwiY2hhbmdlLWhvdXJzLXJpZ2h0XCIpKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvKiogYWN0aXZhdGVzIGRhaWx5IG1vZGUgKi9cclxuICBhY3RpdmVEYWlseShob3VybHksIGNoYW5nZUhvdXJzLCBwYXJlbnQpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImNoYW5nZS1mb3JlY2FzdC1hY3RpdmUtYnRuXCIpO1xyXG4gICAgaWYgKGhvdXJseS5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGFuZ2UtZm9yZWNhc3QtYWN0aXZlLWJ0blwiKSlcclxuICAgICAgaG91cmx5LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGFuZ2UtZm9yZWNhc3QtYWN0aXZlLWJ0blwiKTtcclxuICAgIGlmIChwYXJlbnQubGFzdENoaWxkID09IGNoYW5nZUhvdXJzKSB7XHJcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGFuZ2VIb3Vycyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogYWN0aXZhdGVzIGhvdXJseSBtb2RlICovXHJcbiAgYWN0aXZlSG91cmx5KGRhaWx5LCBjaGFuZ2VIb3VycywgcGFyZW50KSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtZm9yZWNhc3QtYWN0aXZlLWJ0blwiKTtcclxuICAgIGlmIChkYWlseS5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGFuZ2UtZm9yZWNhc3QtYWN0aXZlLWJ0blwiKSlcclxuICAgICAgZGFpbHkuY2xhc3NMaXN0LnJlbW92ZShcImNoYW5nZS1mb3JlY2FzdC1hY3RpdmUtYnRuXCIpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoYW5nZUhvdXJzKTtcclxuICB9XHJcblxyXG4gIC8qKiBHZW5lcmF0ZSBidXR0b25zIGluIG9yZGVyIHRvIHN3aXRjaCBtb2RlIGJldHdlZW4gaG91cmx5IGFuZCBkYWlseSAqL1xyXG4gIGdlbmVyYXRlQnV0dG9uKGJ0bkNsYXNzLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYnRuQ2xhc3MpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtZm9yZWNhc3QtYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRGFpbHlGb3JlY2FzdCB7XHJcbiAgI2RhdGE7XHJcbiAgI2RhaWx5X2Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy4jZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLiNkYWlseV9ibG9jay5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1mb3JlY2FzdC1kYWlseVwiKTtcclxuICAgIHRoaXMuI2RhaWx5X2Jsb2NrLmNsYXNzTGlzdC5hZGQoXCJnZW5lcmFsLWZvcmVjYXN0XCIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRm9yZWNhc3Qod2VhdGhlckRhdGEpIHtcclxuICAgIC8vIHRyYW5zZm9ybSBkYXRhXHJcbiAgICBjb25zdCBkYXRhID0gaGVscGVyLmdldERhdGFEYWlseSh3ZWF0aGVyRGF0YSk7XHJcbiAgICBjb25zdCBkYWlseUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkYWlseUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1mb3JlY2FzdC1kYWlseS1pdGVtXCIpO1xyXG5cclxuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWZvcmVjYXN0LWRhaWx5LWRheVwiKTtcclxuICAgIGRheS5pbm5lckhUTUwgPSBkYXRhLmRheTtcclxuXHJcbiAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRlbXBEaXYuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZm9yZWNhc3QtZGFpbHktdGVtcFwiKTtcclxuICAgIGNvbnN0IHRlbXBIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB0ZW1wSGlnaC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1mb3JlY2FzdC1kYWlseS1oaWdoXCIpO1xyXG4gICAgdGVtcEhpZ2guaW5uZXJIVE1MID0gZGF0YS5oaWdoVGVtcDtcclxuICAgIGNvbnN0IHRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHRlbXBMb3cuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZm9yZWNhc3QtZGFpbHktbG93XCIpO1xyXG4gICAgdGVtcExvdy5pbm5lckhUTUwgPSBkYXRhLmxvd1RlbXA7XHJcbiAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKHRlbXBIaWdoKTtcclxuICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcExvdyk7XHJcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZm9yZWNhc3QtZGFpbHktaWNvblwiKTtcclxuICAgIHdlYXRoZXJJY29uLmlubmVySFRNTCA9IGhlbHBlci5nZXRJY29uKGRhdGEuaWNvbik7XHJcblxyXG4gICAgZGFpbHlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KTtcclxuICAgIGRhaWx5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBEaXYpO1xyXG4gICAgZGFpbHlDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG5cclxuICAgIHJldHVybiBkYWlseUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGdldCBjcmVhdGVDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBhcnJheURhdGEgPSB0aGlzLiNkYXRhLmRhaWx5O1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcclxuICAgICAgY29uc3QgZGFpbHlGb3JlY2FzdCA9IHRoaXMuY3JlYXRlRm9yZWNhc3QoYXJyYXlEYXRhW2ldKTtcclxuICAgICAgdGhpcy4jZGFpbHlfYmxvY2suYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy4jZGFpbHlfYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZWNhc3Qge1xyXG4gICNmb3JlY2FzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy4jZm9yZWNhc3REaXYuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0XCIpO1xyXG4gICAgY29uc3QgY2hhbmdlRm9yZWNhc3QgPSBuZXcgQ2hhbmdlRm9yZWNhc3QoKS5nZXRDaGFuZ2VGb3JlY2FzdDtcclxuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3QgPSBuZXcgRGFpbHlGb3JlY2FzdChkYXRhKTtcclxuICAgIHRoaXMuI2ZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGNoYW5nZUZvcmVjYXN0KTtcclxuICAgIHRoaXMuI2ZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3QuY3JlYXRlQ29udGFpbmVyKTtcclxuICAgIHJldHVybiB0aGlzLiNmb3JlY2FzdERpdjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgRm9yZWNhc3QsIERhaWx5Rm9yZWNhc3QsIENoYW5nZUZvcmVjYXN0LCBIb3VybHlGb3JlY2FzdCB9O1xyXG4iLCIvLyBkYXlzIG9mIHdlZWtcclxuY29uc3QgZGF5TmFtZXMgPSBbXHJcbiAgXCJTdW5kYXlcIixcclxuICBcIk1vbmRheVwiLFxyXG4gIFwiVHVlc2RheVwiLFxyXG4gIFwiV2VkbmVzZGF5XCIsXHJcbiAgXCJUaHVyc2RheVwiLFxyXG4gIFwiRnJpZGF5XCIsXHJcbiAgXCJTYXR1cmRheVwiLFxyXG5dO1xyXG5cclxuLyoqZ2V0RGF0YURhaWx5IGZ1bmN0aW9uIHRvIHJldHVybiBmb3JtYXRlZCBkYXRhIHRvIERhaWx5IEZvcmVjYXN0Ki9cclxuZnVuY3Rpb24gZ2V0RGF0YURhaWx5KGRhdGEpIHtcclxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IHt9O1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhLmR0ICogMTAwMCk7XHJcbiAgd2VhdGhlckRhdGEuZGF5ID0gZGF5TmFtZXNbZGF0ZS5nZXREYXkoKV07XHJcbiAgd2VhdGhlckRhdGEuaGlnaFRlbXAgPVxyXG4gICAgZGF0YS50ZW1wLm1heCA+IDIyMFxyXG4gICAgICA/IE1hdGgucm91bmQoZGF0YS50ZW1wLm1heCAtIDI3My4xNSkgKyBcIiDCsENcIlxyXG4gICAgICA6IE1hdGgucm91bmQoZGF0YS50ZW1wLm1heCkgKyBcIiDCsEZcIjtcclxuICB3ZWF0aGVyRGF0YS5sb3dUZW1wID1cclxuICAgIGRhdGEudGVtcC5taW4gPiAyMjBcclxuICAgICAgPyBNYXRoLnJvdW5kKGRhdGEudGVtcC5taW4gLSAyNzMuMTUpICsgXCIgwrBDXCJcclxuICAgICAgOiBNYXRoLnJvdW5kKGRhdGEudGVtcC5taW4pICsgXCIgwrBGXCI7XHJcbiAgd2VhdGhlckRhdGEuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xyXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcclxufVxyXG5cclxuLyoqZ2V0RGF0YUhvdXJseSBmdW5jdGlvbiB0byByZXR1cm4gZm9ybWF0ZWQgZGF0YSB0byBIb3VybHkgRm9yZWNhc3QqL1xyXG5mdW5jdGlvbiBnZXREYXRhSG91cmx5KGRhdGEsIHRpbWV6b25lKSB7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSB7fTtcclxuICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICB0aW1lWm9uZTogdGltZXpvbmUsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2hvdXIsICwgcGFydF0gPSBjdXJyZW50VGltZS5zcGxpdChcIiwgXCIpWzFdLnNwbGl0KFwiOlwiKTtcclxuICB3ZWF0aGVyRGF0YS5ob3VyID0gYCR7aG91cn0gOiAke3BhcnQuc2xpY2UoLTIpLnRvTG93ZXJDYXNlKCl9YDtcclxuICB3ZWF0aGVyRGF0YS50ZW1wID1cclxuICAgIGRhdGEudGVtcCA+IDIyMFxyXG4gICAgICA/IE1hdGgucm91bmQoZGF0YS50ZW1wIC0gMjczLjE1KSArIFwiIMKwQ1wiXHJcbiAgICAgIDogTWF0aC5yb3VuZChkYXRhLnRlbXApICsgXCIgwrBGXCI7XHJcbiAgd2VhdGhlckRhdGEuaWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xyXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcclxufVxyXG5cclxuLyoqZ2V0SWNvbiBmdW5jdGlvbiB0byByZXR1cm4gaWNvbiBmb3Igd2VhdGhlclxyXG4gKiBBY2NlcHQgY29kZSBmcm9tIGRhdGEgb2JqZWN0LCB0aGF0IGNvcnJlc3BvbmRzIHRvIHdlYXRoZXIgaWNvblxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SWNvbihjb2RlKSB7XHJcbiAgaWYgKGNvZGUgPT09IFwiMDFkXCIpIHtcclxuICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGZpbGw9XCIjZjVmNWY1XCIgdmlld0JveD1cIjMgMyAyNiAyNlwiPlxyXG4gICAgPHRpdGxlPnN1bjwvdGl0bGU+XHJcbiAgICA8cGF0aCBkPVwiTTE2IDljLTMuODU5IDAtNyAzLjE0MS03IDdzMy4xNDEgNyA3IDcgNy0zLjE0MSA3LTdjMC0zLjg1OS0zLjE0MS03LTctN3pNMTYgMjFjLTIuNzYyIDAtNS0yLjIzOC01LTVzMi4yMzgtNSA1LTUgNSAyLjIzOCA1IDUtMi4yMzggNS01IDV6TTE2IDdjMC41NTIgMCAxLTAuNDQ4IDEtMXYtMmMwLTAuNTUyLTAuNDQ4LTEtMS0xcy0xIDAuNDQ4LTEgMXYyYzAgMC41NTIgMC40NDggMSAxIDF6TTE2IDI1Yy0wLjU1MiAwLTEgMC40NDgtMSAxdjJjMCAwLjU1MiAwLjQ0OCAxIDEgMXMxLTAuNDQ4IDEtMXYtMmMwLTAuNTUyLTAuNDQ4LTEtMS0xek0yMy43NzcgOS42MzVsMS40MTQtMS40MTRjMC4zOTEtMC4zOTEgMC4zOTEtMS4wMjMgMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQgMGwtMS40MTQgMS40MTRjLTAuMzkxIDAuMzkxLTAuMzkxIDEuMDIzIDAgMS40MTRzMS4wMjMgMC4zOTEgMS40MTQgMHpNOC4yMjMgMjIuMzY1bC0xLjQxNCAxLjQxNGMtMC4zOTEgMC4zOTEtMC4zOTEgMS4wMjMgMCAxLjQxNHMxLjAyMyAwLjM5MSAxLjQxNCAwbDEuNDE0LTEuNDE0YzAuMzkxLTAuMzkyIDAuMzkxLTEuMDIzIDAtMS40MTRzLTEuMDIzLTAuMzkyLTEuNDE0IDB6TTcgMTZjMC0wLjU1Mi0wLjQ0OC0xLTEtMWgtMmMtMC41NTIgMC0xIDAuNDQ4LTEgMXMwLjQ0OCAxIDEgMWgyYzAuNTUyIDAgMS0wLjQ0OCAxLTF6TTI4IDE1aC0yYy0wLjU1MiAwLTEgMC40NDgtMSAxczAuNDQ4IDEgMSAxaDJjMC41NTIgMCAxLTAuNDQ4IDEtMXMtMC40NDgtMS0xLTF6TTguMjIxIDkuNjM1YzAuMzkxIDAuMzkxIDEuMDI0IDAuMzkxIDEuNDE0IDBzMC4zOTEtMS4wMjMgMC0xLjQxNGwtMS40MTQtMS40MTRjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0IDBzLTAuMzkxIDEuMDIzIDAgMS40MTRsMS40MTQgMS40MTR6TTIzLjc3OSAyMi4zNjNjLTAuMzkyLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0IDBzLTAuMzkyIDEuMDIzIDAgMS40MTRsMS40MTQgMS40MTRjMC4zOTEgMC4zOTEgMS4wMjMgMC4zOTEgMS40MTQgMHMwLjM5MS0xLjAyMyAwLTEuNDE0bC0xLjQxNC0xLjQxNHpcIi8+XHJcbiAgICA8L3N2Zz5gO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvZGUgPT09IFwiMDFuXCIpIHtcclxuICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGZpbGw9XCIjZjVmNWY1XCIgdmlld0JveD1cIjguMjEgOC4yMSAxNS41NyAxNS41N1wiPlxyXG4gICAgPHRpdGxlPm1vb248L3RpdGxlPlxyXG4gICAgPHBhdGggZD1cIk0yMS44NjYgMjEuNDQ3Yy0zLjExNyAzLjEyLTguMTkzIDMuMTItMTEuMzEzIDBzLTMuMTItOC4xOTUgMC0xMS4zMTRjMC44MjYtMC44MjQgMS44MzItMS40NTMgMi45ODktMS44NjMgMC4zNjUtMC4xMjggMC43NjgtMC4wMzUgMS4wMzkgMC4yMzcgMC4yNzQgMC4yNzMgMC4zNjYgMC42NzcgMC4yMzcgMS4wMzktMC43ODQgMi4yMTEtMC4yNSA0LjYwNCAxLjM5MSA2LjI0NSAxLjYzOCAxLjYzOSA0LjAzMSAyLjE3MiA2LjI0NSAxLjM5MSAwLjM2Mi0wLjEyOSAwLjc2Ny0wLjAzNiAxLjAzOSAwLjIzNyAwLjI3MyAwLjI3MSAwLjM2NSAwLjY3NiAwLjIzNiAxLjAzOS0wLjQwOCAxLjE1Ny0xLjAzOCAyLjE2NC0xLjg2MyAyLjk4OXpNMTEuOTY3IDExLjU0N2MtMi4zNCAyLjM0LTIuMzQgNi4xNDcgMCA4LjQ4NiAyLjUgMi41MDEgNi43NTggMi4yNzYgOC45MzctMC41MS0yLjI0NyAwLjE0MS00LjQ2MS0wLjY3MS02LjEwOS0yLjMxOHMtMi40NTgtMy44NjEtMi4zMTgtNi4xMDhjLTAuMTggMC4xNDEtMC4zNSAwLjI5LTAuNTEgMC40NTF6XCIvPlxyXG4gICAgPC9zdmc+YDtcclxuICB9XHJcbiAgaWYgKGNvZGUgPT09IFwiMDJkXCIpIHtcclxuICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGZpbGw9XCIjZjVmNWY1XCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgPHRpdGxlPmNsb3VkeS1kYXk8L3RpdGxlPlxyXG4gICAgPHBhdGggZD1cIk0xMyA0YzAuNTUyIDAgMS0wLjQ0OCAxLTF2LTJjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSAwLjQ0OC0xIDF2MmMwIDAuNTUyIDAuNDQ4IDEgMSAxek0yMC43NzcgNi42MzVsMS40MTQtMS40MTRjMC4zOTEtMC4zOTEgMC4zOTEtMS4wMjMgMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQgMGwtMS40MTQgMS40MTRjLTAuMzkxIDAuMzkxLTAuMzkxIDEuMDIzIDAgMS40MTRzMS4wMjMgMC4zOTEgMS40MTQgMHpNMSAxNGgyYzAuNTUyIDAgMS0wLjQ0OCAxLTFzLTAuNDQ4LTEtMS0xaC0yYy0wLjU1MiAwLTEgMC40NDgtMSAxczAuNDQ4IDEgMSAxek0yMiAxM2MwIDAuNTUyIDAuNDQ4IDEgMSAxaDJjMC41NTIgMCAxLTAuNDQ4IDEtMXMtMC40NDgtMS0xLTFoLTJjLTAuNTUyIDAtMSAwLjQ0OC0xIDF6TTUuMjIxIDYuNjM1YzAuMzkxIDAuMzkxIDEuMDI0IDAuMzkxIDEuNDE0IDBzMC4zOTEtMS4wMjMgMC0xLjQxNGwtMS40MTQtMS40MTRjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0IDBzLTAuMzkxIDEuMDIzIDAgMS40MTRsMS40MTQgMS40MTR6TTI1IDE2Yy0wLjMzMiAwLTAuNjYgMC4wMjMtMC45ODcgMC4wNzAtMS4wNDgtMS40My0yLjQ0NS0yLjUyMS00LjAyOS0zLjIxOS0wLjA4MS0zLjc4OS0zLjE3Ni02Ljg1Mi02Ljk4NC02Ljg1Mi0zLjg1OSAwLTcgMy4xNDEtNyA3IDAgMS4wOTAgMC4yNzEgMi4xMDkgMC43MTkgMy4wMjctMy43MjcgMC4xNTItNi43MTkgMy4yMTEtNi43MTkgNi45NzMgMCAzLjg1OSAzLjE0MSA3IDcgNyAwLjg1NiAwIDEuNjkzLTAuMTU2IDIuNDgyLTAuNDU4IDEuODEgMS41NzggNC4xMTIgMi40NTggNi41MTggMi40NTggMi40MDkgMCA0LjcwOC0wLjg4IDYuNTE4LTIuNDU4IDAuNzg5IDAuMzAyIDEuNjI2IDAuNDU4IDIuNDgyIDAuNDU4IDMuODU5IDAgNy0zLjE0MSA3LTdzLTMuMTQxLTctNy03ek0xMyA4YzIuNDg4IDAgNC41MzUgMS44MjMgNC45MTkgNC4yMDMtMC42MjYtMC4xMjUtMS4yNjYtMC4yMDMtMS45MTktMC4yMDMtMi44NzEgMC01LjUzMSAxLjIzOC03LjM5OCAzLjMyOC0wLjM3MS0wLjY5OC0wLjYwMi0xLjQ4Mi0wLjYwMi0yLjMyOCAwLTIuNzYyIDIuMjM4LTUgNS01ek0yNSAyOGMtMS4wNzAgMC0yLjA1Ny0wLjM0NC0yLjg3MS0wLjkxNy0xLjQ2NyAxLjc2OC0zLjY1MiAyLjkxNy02LjEyOSAyLjkxN3MtNC42NjItMS4xNDgtNi4xMjktMi45MTdjLTAuODEzIDAuNTczLTEuODAxIDAuOTE3LTIuODcxIDAuOTE3LTIuNzYyIDAtNS0yLjIzOC01LTVzMi4yMzgtNSA1LTVjMC40ODQgMCAwLjk0MSAwLjA5MSAxLjM4MyAwLjIyMSAwLjE3NiAwLjA0OSAwLjM1NCAwLjA4OSAwLjUyIDAuMTU4IDAuMjczLTAuNTM1IDAuNjE3LTEuMDI1IDAuOTk5LTEuNDg0IDEuNDYxLTEuNzU4IDMuNjM0LTIuODk1IDYuMDk5LTIuODk1IDAuNjMzIDAgMS4yNCAwLjA5MSAxLjgyOCAwLjIzMiAwLjY2IDAuMTU2IDEuMjg0IDAuMzkzIDEuODY1IDAuNzA2IDEuNDU2IDAuNzczIDIuNjUxIDEuOTcxIDMuNDA0IDMuNDQxIDAuNTg3LTAuMjQyIDEuMjI5LTAuMzc5IDEuOTA0LTAuMzc5IDIuNzYyIDAgNSAyLjIzOCA1IDVzLTIuMjM4IDUtNSA1elwiLz5cclxuICAgIDwvc3ZnPmA7XHJcbiAgfVxyXG4gIGlmIChjb2RlID09PSBcIjAyblwiKSB7XHJcbiAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIwIDIuNDIgMzIgMjkuNTdcIj5cclxuICAgIDx0aXRsZT5jbG91ZHktbmlnaHQ8L3RpdGxlPlxyXG4gICAgPHBhdGggZD1cIk0yNy4xOTEgMTYuMzg1YzAuMzA1LTAuMjI3IDAuNjEzLTAuNDQ5IDAuODg5LTAuNzI1IDAuODI2LTAuODI3IDEuNDU0LTEuODMzIDEuODYyLTIuOTkxIDAuMTMtMC4zNjIgMC4wMzgtMC43NjgtMC4yMzYtMS4wMzktMC4yNzItMC4yNzMtMC42NzYtMC4zNjYtMS4wMzktMC4yMzctMi4yMTIgMC43ODEtNC42MDUgMC4yNS02LjI0NC0xLjM5MS0xLjY0MS0xLjY0MS0yLjE3NC00LjAzMy0xLjM5MS02LjI0NCAwLjEyOC0wLjM2MyAwLjAzNi0wLjc2Ny0wLjIzNy0xLjA0MC0wLjI3MS0wLjI3MS0wLjY3Ni0wLjM2NS0xLjAzOS0wLjIzNy0xLjE1OSAwLjQxMS0yLjE2NCAxLjAzOS0yLjk5IDEuODY0LTIuMDk2IDIuMDk0LTIuNzQ5IDUuMDYzLTIuMDMwIDcuNzM3LTIuNzAzIDAuMzQ1LTUuMTMzIDEuNzgxLTYuNzUxIDMuOTg3LTAuMzI3LTAuMDQ3LTAuNjU1LTAuMDcwLTAuOTg3LTAuMDcwLTMuODU5IDAtNyAzLjE0MS03IDdzMy4xNDEgNyA3IDdjMC44NTYgMCAxLjY5My0wLjE1NiAyLjQ4Mi0wLjQ1OCAxLjgxIDEuNTc4IDQuMTEyIDIuNDU4IDYuNTE4IDIuNDU4IDIuNDA5IDAgNC43MDgtMC44OCA2LjUxOC0yLjQ1OCAwLjc4OSAwLjMwMiAxLjYyNiAwLjQ1OCAyLjQ4MiAwLjQ1OCAzLjg1OSAwIDctMy4xNDEgNy03IDAtMy4wOTAtMi4wMjYtNS42ODktNC44MDktNi42MTV6TTE4LjE4MiA1Ljc2YzAuMTU5LTAuMTYxIDAuMzI5LTAuMzExIDAuNTA5LTAuNDUyLTAuMTQxIDIuMjQ5IDAuNjcxIDQuNDYxIDIuMzE5IDYuMTA4IDEuNjQ4IDEuNjQ4IDMuODYxIDIuNDU4IDYuMTA5IDIuMzE5LTAuODYyIDEuMDk5LTIuMDUwIDEuNzgzLTMuMzIgMi4wNzQtMS43MTEtMi4xNzItNC4yMjUtMy41MzktNi45OTctMy43NjItMC43NjctMi4xMjItMC4zMTgtNC41OSAxLjM4LTYuMjg4ek0yNSAyOGMtMS4wNzAgMC0yLjA1Ny0wLjM0NC0yLjg3MS0wLjkxNy0xLjQ2NyAxLjc2OC0zLjY1MiAyLjkxNy02LjEyOSAyLjkxN3MtNC42NjItMS4xNDgtNi4xMjktMi45MTdjLTAuODEzIDAuNTczLTEuODAxIDAuOTE3LTIuODcxIDAuOTE3LTIuNzYyIDAtNS0yLjIzOC01LTVzMi4yMzgtNSA1LTVjMC42NzYgMCAxLjMxNiAwLjEzNyAxLjkwMiAwLjM3OSAxLjI2Mi0yLjQ2IDMuNzM0LTQuMTgxIDYuNjQ1LTQuMzQ2IDAuMTUyLTAuMDA5IDAuMzAxLTAuMDMzIDAuNDUzLTAuMDMzIDAuODA3IDAgMS41ODIgMC4xMjYgMi4zMTMgMC4zNDkgMC45ODcgMC4zMDIgMS44ODcgMC43OTQgMi42NjggMS40MjggMC43NDYgMC42MDUgMS4zNzEgMS4zNDggMS44NjMgMi4xODEgMC4wODMgMC4xNDEgMC4xNzcgMC4yNzMgMC4yNTMgMC40MjEgMC41ODctMC4yNDIgMS4yMjktMC4zNzkgMS45MDQtMC4zNzkgMi43NjIgMCA1IDIuMjM4IDUgNXMtMi4yMzggNS01IDV6XCIvPlxyXG4gICAgPC9zdmc+YDtcclxuICB9XHJcbiAgaWYgKGNvZGUgPT09IFwiMDNkXCIgfHwgY29kZSA9PT0gXCIwM25cIikge1xyXG4gICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgZmlsbD1cIiNmNWY1ZjVcIiB2aWV3Qm94PVwiMCA2IDMyIDIwXCI+XHJcbiAgICA8dGl0bGU+Y2xvdWQ8L3RpdGxlPlxyXG4gICAgPHBhdGggZD1cIk0yNSAxMGMtMC4zMzIgMC0wLjY2IDAuMDIzLTAuOTg3IDAuMDcwLTEuODY3LTIuNTQ0LTQuODE0LTQuMDcwLTguMDEzLTQuMDcwcy02LjE0NSAxLjUyNi04LjAxMyA0LjA3MGMtMC4zMjctMC4wNDctMC42NTUtMC4wNzAtMC45ODctMC4wNzAtMy44NTkgMC03IDMuMTQxLTcgN3MzLjE0MSA3IDcgN2MwLjg1NiAwIDEuNjkzLTAuMTU2IDIuNDgyLTAuNDU4IDEuODEgMS41NzggNC4xMTIgMi40NTggNi41MTggMi40NTggMi40MDkgMCA0LjcwOC0wLjg4IDYuNTE4LTIuNDU4IDAuNzg5IDAuMzAyIDEuNjI2IDAuNDU4IDIuNDgyIDAuNDU4IDMuODU5IDAgNy0zLjE0MSA3LTdzLTMuMTQxLTctNy03ek0yNSAyMmMtMS4wNzAgMC0yLjA1Ny0wLjM0NC0yLjg3MS0wLjkxNy0xLjQ2NyAxLjc2OC0zLjY1MiAyLjkxNy02LjEyOSAyLjkxN3MtNC42NjItMS4xNDgtNi4xMjktMi45MTdjLTAuODEzIDAuNTczLTEuODAxIDAuOTE3LTIuODcxIDAuOTE3LTIuNzYyIDAtNS0yLjIzOC01LTVzMi4yMzgtNSA1LTVjMC42NzYgMCAxLjMxNiAwLjEzOCAxLjkwMiAwLjM4IDEuMzI3LTIuNTg4IDMuOTkxLTQuMzggNy4wOTgtNC4zOHM1Ljc3MSAxLjc5MiA3LjA5NiA0LjM4YzAuNTg3LTAuMjQyIDEuMjI5LTAuMzggMS45MDQtMC4zOCAyLjc2MiAwIDUgMi4yMzggNSA1cy0yLjIzOCA1LTUgNXpcIi8+XHJcbiAgICA8L3N2Zz5gO1xyXG4gIH1cclxuICBpZiAoY29kZSA9PT0gXCIwNGRcIiB8fCBjb2RlID09PSBcIjA0blwiKSB7XHJcbiAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIwIDYuNTcgMzIgMjUuNDNcIj5cclxuICAgIDx0aXRsZT5jbG91ZHk8L3RpdGxlPlxyXG4gICAgPHBhdGggZD1cIk0zMiAxNWMwLTMuMDczLTIuNS01LjU3Mi01LjU3My01LjU3Mi0wLjE1IDAtMC4yOTggMC4wMDctMC40NDcgMC4wMTgtMS40NDUtMS44MDMtMy42MjQtMi44NzQtNS45OC0yLjg3NC0yLjM1NSAwLTQuNTM1IDEuMDcwLTUuOTggMi44NzQtMC4xNDgtMC4wMTItMC4yOTgtMC4wMTgtMC40NDktMC4wMTgtMy4wNzAtMC01LjU3IDIuNDk5LTUuNTcgNS41NzIgMCAwLjMyMiAwLjA0MyAwLjYzMSAwLjA5NCAwLjk0LTAuMDM0IDAuMDQ0LTAuMDc0IDAuMDg1LTAuMTA3IDAuMTMtMC4zMjctMC4wNDctMC42NTUtMC4wNzAtMC45ODctMC4wNzAtMy44NTkgMC03IDMuMTQxLTcgN3MzLjE0MSA3IDcgN2MwLjg1NiAwIDEuNjkzLTAuMTU2IDIuNDgyLTAuNDU4IDEuODEgMS41NzggNC4xMTIgMi40NTggNi41MTggMi40NTggMi40MDkgMCA0LjcwOC0wLjg4IDYuNTE4LTIuNDU4IDAuNzg5IDAuMzAyIDEuNjI2IDAuNDU4IDIuNDgyIDAuNDU4IDMuODU5IDAgNy0zLjE0MSA3LTcgMC0xLjYwNS0wLjU2NS0zLjA2OC0xLjQ3OS00LjI1IDAuOTExLTAuOTk0IDEuNDc5LTIuMzAyIDEuNDc5LTMuNzV6TTI1IDI4Yy0xLjA3MCAwLTIuMDU3LTAuMzQ0LTIuODcxLTAuOTE3LTEuNDY3IDEuNzY4LTMuNjUyIDIuOTE3LTYuMTI5IDIuOTE3cy00LjY2Mi0xLjE0OC02LjEyOS0yLjkxN2MtMC44MTMgMC41NzMtMS44MDEgMC45MTctMi44NzEgMC45MTctMi43NjIgMC01LTIuMjM4LTUtNXMyLjIzOC01IDUtNWMwLjY3NiAwIDEuMzE2IDAuMTM3IDEuOTAyIDAuMzc5IDAuMDM1LTAuMDY2IDAuMDc4LTAuMTI1IDAuMTEzLTAuMTg5IDAuMzUyLTAuNjQyIDAuNzg1LTEuMjMgMS4yOTItMS43NTMgMS40NDMtMS40OTUgMy40NDgtMi40MzggNS42OTMtMi40MzggMy4xMDcgMCA1Ljc3MSAxLjc5MiA3LjA5NiA0LjM3OSAwLjM1My0wLjE0NSAwLjcyOS0wLjIzOCAxLjExNy0wLjMwMWwwLjc4Ny0wLjA3OGMwLjc3MSAwIDEuNDkyIDAuMTkgMi4xNDUgMC41IDAuNzA3IDAuMzM4IDEuMzE0IDAuODM2IDEuNzkgMS40NDkgMC42NTYgMC44NDUgMS4wNjUgMS44OTcgMS4wNjUgMy4wNTEgMCAyLjc2Mi0yLjIzOCA1LTUgNXpNMjkuMDk4IDE3LjM1MmMtMS4xNTUtMC44NDEtMi41NjMtMS4zNTItNC4wOTgtMS4zNTItMC4zMzIgMC0wLjY2IDAuMDIzLTAuOTg3IDAuMDcwLTEuODY3LTIuNTQ0LTQuODE0LTQuMDcwLTguMDEzLTQuMDcwLTIuMTMzIDAtNC4xNDUgMC42OS01LjgwOSAxLjg5NiAwLjQ2Ny0xLjQyOCAxLjc5Ni0yLjQ2NyAzLjM3OS0yLjQ2NyAwLjQ4NCAwIDAuOTQxIDAuMDk4IDEuMzU5IDAuMjcxIDAuOTQ5LTEuODQ4IDIuODUyLTMuMTI2IDUuMDcwLTMuMTI2czQuMTIyIDEuMjc5IDUuMDY4IDMuMTI2YzAuNDIxLTAuMTczIDAuODgtMC4yNzEgMS4zNTktMC4yNzEgMS45NzQgMCAzLjU3MyAxLjU5OSAzLjU3MyAzLjU3MiAwIDAuOTA1LTAuMzQ4IDEuNzIxLTAuOTAyIDIuMzUxelwiLz5cclxuICAgIDwvc3ZnPmA7XHJcbiAgfVxyXG4gIGlmIChjb2RlID09PSBcIjA5ZFwiIHx8IGNvZGUgPT09IFwiMDluXCIgfHwgY29kZSA9PT0gXCIxMGRcIiB8fCBjb2RlID09PSBcIjEwblwiKSB7XHJcbiAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgIDx0aXRsZT5yYWlueTwvdGl0bGU+XHJcbiAgICA8cGF0aCBkPVwiTTI1IDRjLTAuMzMyIDAtMC42NiAwLjAyMy0wLjk4NyAwLjA3MC0xLjg2Ny0yLjU0NC00LjgxNC00LjA3MC04LjAxMy00LjA3MHMtNi4xNDUgMS41MjYtOC4wMTMgNC4wNzBjLTAuMzI3LTAuMDQ3LTAuNjU1LTAuMDcwLTAuOTg3LTAuMDcwLTMuODU5IDAtNyAzLjE0MS03IDdzMy4xNDEgNyA3IDdjMC44NTYgMCAxLjY5My0wLjE1NiAyLjQ4Mi0wLjQ1OCAxLjgxIDEuNTc4IDQuMTEyIDIuNDU4IDYuNTE4IDIuNDU4IDIuNDA5IDAgNC43MDgtMC44OCA2LjUxOC0yLjQ1OCAwLjc4OSAwLjMwMiAxLjYyNiAwLjQ1OCAyLjQ4MiAwLjQ1OCAzLjg1OSAwIDctMy4xNDEgNy03cy0zLjE0MS03LTctN3pNMjUgMTZjLTEuMDcwIDAtMi4wNTctMC4zNDQtMi44NzEtMC45MTctMS40NjcgMS43NjgtMy42NTIgMi45MTctNi4xMjkgMi45MTdzLTQuNjYyLTEuMTQ4LTYuMTI5LTIuOTE3Yy0wLjgxMyAwLjU3My0xLjgwMSAwLjkxNy0yLjg3MSAwLjkxNy0yLjc2MiAwLTUtMi4yMzgtNS01czIuMjM4LTUgNS01YzAuNjc2IDAgMS4zMTYgMC4xMzggMS45MDIgMC4zOCAxLjMyNy0yLjU4OCAzLjk5MS00LjM4IDcuMDk4LTQuMzhzNS43NzEgMS43OTIgNy4wOTYgNC4zOGMwLjU4Ny0wLjI0MiAxLjIyOS0wLjM4IDEuOTA0LTAuMzggMi43NjIgMCA1IDIuMjM4IDUgNXMtMi4yMzggNS01IDV6TTE0LjA2MyAzMGMwIDEuMTA1IDAuODk1IDIgMiAyczItMC44OTUgMi0yLTItNC0yLTQtMiAyLjg5NS0yIDR6TTIyIDI4YzAgMS4xMDUgMC44OTUgMiAyIDJzMi0wLjg5NSAyLTItMi00LTItNC0yIDIuODk1LTIgNHpNNiAyNGMwIDEuMTA1IDAuODk0IDIgMiAyczItMC44OTUgMi0yLTItNC0yLTQtMiAyLjg5NS0yIDR6XCIvPlxyXG4gICAgPC9zdmc+YDtcclxuICB9XHJcbiAgaWYgKGNvZGUgPT09IFwiMTFkXCIgfHwgY29kZSA9PT0gXCIxMW5cIikge1xyXG4gICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgZmlsbD1cIiNmNWY1ZjVcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICA8dGl0bGU+bGlnaHRuaW5nPC90aXRsZT5cclxuICAgIDxwYXRoIGQ9XCJNMTIgMjRsMiAyLTIgNiA2LTYtMi0yIDItNC02IDR6TTMyIDguNDI3YzAtMy4wNzItMi41LTUuNTctNS41NzMtNS41Ny0wLjE1IDAtMC4yOTggMC4wMDUtMC40NDcgMC4wMTctMS40NDUtMS44MDItMy42MjQtMi44NzQtNS45OC0yLjg3NC0yLjM1NSAwLTQuNTM1IDEuMDcyLTUuOTggMi44NzQtMC4xNDgtMC4wMTItMC4yOTgtMC4wMTctMC40NDktMC4wMTctMy4wNzAgMC01LjU3IDIuNDk5LTUuNTcgNS41NyAwIDAuMzIyIDAuMDQzIDAuNjMzIDAuMDk0IDAuOTQtMC4wMzQgMC4wNDQtMC4wNzQgMC4wODUtMC4xMDcgMC4xMy0wLjMyNy0wLjA0Ny0wLjY1NS0wLjA3MC0wLjk4Ny0wLjA3MC0zLjg1OSAwLTcgMy4xNDEtNyA3czMuMTQxIDcgNyA3YzAuODU2IDAgMS42OTMtMC4xNTYgMi40ODItMC40NTggMC4wNjkgMC4wNjAgMC4xNTEgMC4xMDIgMC4yMjEgMC4xNmwxLjc3LTEuMThjLTAuNTktMC40MTgtMS4xNDEtMC44ODMtMS42MDItMS40MzgtMC44MTMgMC41NzItMS44MDEgMC45MTUtMi44NzEgMC45MTUtMi43NjIgMC01LTIuMjM3LTUtNSAwLTIuNzYgMi4yMzgtNSA1LTUgMC42NzYgMCAxLjMxNiAwLjEzOCAxLjkwMiAwLjM4IDAuMDM1LTAuMDY4IDAuMDc4LTAuMTI1IDAuMTEzLTAuMTkgMC4zNTItMC42NDIgMC43ODUtMS4yMjkgMS4yOTItMS43NTMgMS40NDMtMS40OTMgMy40NDgtMi40MzggNS42OTMtMi40MzggMy4xMDcgMCA1Ljc3MSAxLjc5MiA3LjA5NiA0LjM4IDAuMzUzLTAuMTQ2IDAuNzI5LTAuMjQgMS4xMTctMC4zMDJsMC43ODctMC4wNzhjMC43NzEgMCAxLjQ5MiAwLjE5IDIuMTQ1IDAuNSAwLjcwNyAwLjMzOSAxLjMxNCAwLjgzNiAxLjc5IDEuNDUgMC42NTYgMC44NDUgMS4wNjUgMS44OTYgMS4wNjUgMy4wNTAgMCAyLjc2My0yLjIzOCA1LTUgNS0xLjA3MCAwLTIuMDU3LTAuMzQ0LTIuODcxLTAuOTE1LTAuODc1IDEuMDU1LTIuMDI3IDEuODQ4LTMuMzIyIDIuMzQ4bC0wLjM3NCAwLjc0NiAxLjE0MSAxLjE0MWMxLjA2Ni0wLjQxNSAyLjA2NC0xLjAxMiAyLjk0NC0xLjc3NyAwLjc4OSAwLjMwMiAxLjYyNiAwLjQ1OCAyLjQ4MiAwLjQ1OCAzLjg1OSAwIDctMy4xNDEgNy03IDAtMS42MDQtMC41NjUtMy4wNjgtMS40NzktNC4yNSAwLjkxMS0wLjk5MiAxLjQ3OS0yLjMwMSAxLjQ3OS0zLjc1ek0yOS4wOTggMTAuNzc5Yy0xLjE1NS0wLjg0LTIuNTYzLTEuMzUyLTQuMDk4LTEuMzUyLTAuMzMyIDAtMC42NiAwLjAyMy0wLjk4NyAwLjA3MC0xLjg2Ny0yLjU0My00LjgxNC00LjA3MC04LjAxMy00LjA3MC0yLjEzMyAwLTQuMTQ1IDAuNjkxLTUuODA5IDEuODk3IDAuNDY3LTEuNDI4IDEuNzk2LTIuNDY3IDMuMzc5LTIuNDY3IDAuNDg0IDAgMC45NDEgMC4wOTggMS4zNTkgMC4yNzEgMC45NDktMS44NDkgMi44NTItMy4xMjggNS4wNzAtMy4xMjhzNC4xMjIgMS4yNzkgNS4wNjggMy4xMjhjMC40MjEtMC4xNzMgMC44OC0wLjI3MSAxLjM1OS0wLjI3MSAxLjk3NCAwIDMuNTczIDEuNTk5IDMuNTczIDMuNTcgMCAwLjkwNi0wLjM0OCAxLjcyMy0wLjkwMiAyLjM1MnpcIi8+XHJcbiAgICA8L3N2Zz5gO1xyXG4gIH1cclxuICBpZiAoY29kZSA9PT0gXCIxM2RcIiB8fCBjb2RlID09PSBcIjEzblwiKSB7XHJcbiAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIwLjUgMSA0Ny4wMSA0Ny4wMVwiPlxyXG4gICAgPHRpdGxlPnNub3c8L3RpdGxlPlxyXG4gICAgPHBhdGggZD1cIk0xNC41IDI0LjUwMmMwIDEgMC4xNiAxLjk3IDAuNDQgMi44NzFsLTQuMDgwIDIuMzUtNy4yNi0xLjk0Yy0xLjMxLTAuMzUtMi42NiAwLjQzLTMuMDIwIDEuNzI5LTAuMzUgMS4zMTEgMC40MyAyLjY1IDEuNzUgM2w1Ljg3IDEuNTctMS41OCA1Ljg0Yy0wLjM1IDEuMzAxIDAuNDMgMi42NSAxLjc0IDMgMS4zMiAwLjM1IDIuNjctMC40MyAzLjAyMC0xLjczOGwxLjk0LTcuMjIxIDQuMjctMi40NTFjMS4xMSAxLjAxMCAyLjQ2IDEuNzcxIDMuOTUgMi4xNzJ2NS41bC01LjMyIDQuNDg4Yy0wLjk2IDAuOTktMC45NiAyLjU5IDAgMy41OSAwLjk2IDAuOTkgMi41MiAwLjk5IDMuNDggMGw0LjMtNC40MzkgNC4zIDQuNDM5YzAuOTYgMC45OSAyLjUyIDAuOTkgMy40NzkgMCAwLjk2MS0xIDAuOTYxLTIuNiAwLTMuNTlsLTUuMzE5LTQuNDg4di01LjVjMS40OS0wLjQgMi44NC0xLjE2MiAzLjk1LTIuMTcybDQuMjcgMi40NTEgMS45NCA3LjIyMWMwLjM1IDEuMzA5IDEuNjk5IDIuMDg4IDMuMDIwIDEuNzM4IDEuMzExLTAuMzUgMi4wOTEtMS42OTkgMS43NC0zbC0xLjU4LTUuODQgNS44Ny0xLjU3YzEuMzItMC4zNSAyLjEtMS42ODkgMS43NS0zLTAuMzU5LTEuMjk5LTEuNzEtMi4wNzgtMy4wMjAtMS43MjlsLTcuMjYxIDEuOTM5LTQuMDc5LTIuMzVjMC4yNzktMC45IDAuNDM5LTEuODcxIDAuNDM5LTIuODcxcy0wLjE2LTEuOTctMC40MzktMi44OGw0LjA3OS0yLjM0IDcuMjYxIDEuOTRjMS4zMSAwLjM1IDIuNjYtMC40MzEgMy4wMjAtMS43MyAwLjM1LTEuMzEtMC40My0yLjY1LTEuNzUtM2wtNS44Ny0xLjU3IDEuNTgtNS44NGMwLjM1MS0xLjMtMC40My0yLjY0OS0xLjc0LTMtMS4zMi0wLjM1LTIuNjcgMC40My0zLjAyMCAxLjc0bC0xLjk0IDcuMjItNC4yNyAyLjQ1Yy0xLjExLTEuMDEwLTIuNDYtMS43Ny0zLjk1LTIuMTd2LTQuNWw1LjMxOS01LjQ5YzAuOTYxLTAuOTkgMC45NjEtMi41OSAwLTMuNTktMC45Ni0wLjk5LTIuNTItMC45OS0zLjQ3OSAwbC00LjMgNC40NDItNC4zLTQuNDRjLTAuOTYtMC45OS0yLjUyLTAuOTktMy40OCAwLTAuOTYgMS0wLjk2IDIuNiAwIDMuNTlsNS4zMiA1LjQ5djQuNWMtMS40OSAwLjQtMi44NCAxLjE2LTMuOTUgMi4xN2wtNC4yNy0yLjQ1LTEuOTQtNy4yMmMtMC4zNS0xLjMxMS0xLjctMi4wOTAtMy4wMjAtMS43NC0xLjMxIDAuMzUxLTIuMDkwIDEuNy0xLjc0IDNsMS41OCA1Ljg0LTUuODcgMS41N2MtMS4zMiAwLjM1LTIuMSAxLjY5LTEuNzUgMyAwLjM2IDEuMyAxLjcxIDIuMDgwIDMuMDIwIDEuNzNsNy4yNi0xLjk0IDQuMDgwIDIuMzRjLTAuMjggMC45MS0wLjQ0IDEuODc5LTAuNDQgMi44Nzl6TTI0IDI5LjAwMmMtMi40OSAwLTQuNS0yLjAxMC00LjUtNC41czIuMDEwLTQuNSA0LjUtNC41IDQuNSAyLjAxMCA0LjUgNC41YzAgMi40OS0yLjAxMCA0LjUtNC41IDQuNXpcIi8+XHJcbiAgICA8L3N2Zz5gO1xyXG4gIH1cclxuICBpZiAoY29kZSA9PT0gXCI1MGRcIiB8fCBjb2RlID09PSBcIjUwblwiKSB7XHJcbiAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIxLjk0IDUuOTQgMzAgMThcIj5cclxuICAgIDx0aXRsZT5taXN0PC90aXRsZT5cclxuICAgIDxwYXRoIGQ9XCJNMzAuOTM4IDEzLjkzOGgtNS4xMDJjLTAuNTA0LTQuNDg3LTQuMjc3LTgtOC44OTgtOC0zLjExMyAwLTUuODU5IDEuNTkxLTcuNDc3IDRoLTYuNTIzYy0wLjU1MiAwLTEgMC40NDgtMSAxczAuNDQ4IDEgMSAxaDUuNTUyYy0wLjIyNiAwLjYzOC0wLjM3NCAxLjMwNi0wLjQ1IDJoLTMuMTAyYy0wLjU1MiAwLTEgMC40NDgtMSAxczAuNDQ4IDEgMSAxaDMuMTAyYzAuMDc3IDAuNjkzIDAuMjI0IDEuMzYzIDAuNDUgMmgtNS4zN2MtMC42NTQgMC0xLjE4MiAwLjQ0OC0xLjE4MiAxczAuNTI5IDEgMS4xODIgMWg2LjM0MWMxLjYxNyAyLjQxIDQuMzYzIDQgNy40NzcgNHM1Ljg1OS0xLjU5IDcuNDc3LTRoMi4zNDFjMC42NTQgMCAxLjE4Mi0wLjQ0OCAxLjE4Mi0xcy0wLjUyOS0xLTEuMTgyLTFoLTEuMzdjMC4yMjctMC42MzcgMC4zNzItMS4zMDcgMC40NTEtMmg1LjEwMmMwLjU1MiAwIDEtMC40NDggMS0xcy0wLjQ0OC0xLTEtMXpNMTAuNjM5IDExLjkzOGg2LjI5OGMwLjU1MiAwIDEtMC40NDggMS0xcy0wLjQ0OC0xLTEtMWgtNC44ODRjMS4yNjMtMS4yMzMgMi45ODMtMiA0Ljg4NC0yIDMuNTE4IDAgNi40MDkgMi42MTcgNi44OTggNmgtMTMuNzk3YzAuMTAyLTAuNzA3IDAuMzAyLTEuMzc4IDAuNi0yek0xNi45MzggMjEuOTM4Yy0xLjkwMSAwLTMuNjIxLTAuNzY4LTQuODg0LTJoOS43NjdjLTEuMjYyIDEuMjMyLTIuOTgyIDItNC44ODMgMnpNMjMuMjM0IDE3LjkzOGgtMTIuNTk1Yy0wLjI5OC0wLjYyMi0wLjQ5OS0xLjI5My0wLjYtMmgxMy43OTdjLTAuMTAyIDAuNzA3LTAuMzAyIDEuMzc4LTAuNjAyIDJ6XCIvPlxyXG4gICAgPC9zdmc+YDtcclxuICB9XHJcblxyXG4gIHJldHVybiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGdldERhdGFEYWlseSwgZ2V0SWNvbiwgZGF5TmFtZXMsIGdldERhdGFIb3VybHkgfTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCBcIi4vc3R5bGUvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCB7IFVwcGVyQmxvY2sgfSBmcm9tIFwiLi9tYWluLmpzXCI7XHJcbmltcG9ydCB7IEZvcmVjYXN0IH0gZnJvbSBcIi4vZm9yZWNhc3QuanNcIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vRE9NZnVuY3Rpb25zLmpzXCI7XHJcblxyXG5jb25zdCBBUElLRVkgPSBcIjI2ZjhjMGZiZjM1YjkzMGIzNDA4OGFkYzZjMDViZThiXCI7XHJcbmxldCBjb3VudE9mRXhlY3V0aW9uID0gMDtcclxubGV0IGxhc3RDaXR5O1xyXG5cclxuLy8gR2V0IGxvY2F0aW9uIG9mIHRoZSBjbGllbnQgdXNpbmcgR2VvbG9jYXRpb24gQVBJXHJcbmNvbnN0IGdldExvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKHVuaXRzID0gXCJzdGFuZGFyZFwiKSB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBzdWNjZXNzLmNvb3JkcztcclxuICAgICAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdGl0dWRlfSZ1bml0cz0ke3VuaXRzfSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZsb249JHtsb25naXR1ZGV9JmFwcGlkPSR7QVBJS0VZfWA7XHJcbiAgICAgIGdldFdlYXRoZXJEYXRhKFVSTCk7XHJcbiAgICB9LFxyXG4gICAgKGVycm9yKSA9PiB7XHJcbiAgICAgIGdldENpdHlEYXRhKFwidGFzaGtlbnRcIik7XHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gbG9jYXRpb247XHJcbiAgLy8gcmV0dXJuIGxvY2F0aW9uLmNvb3JkcztcclxufTtcclxuXHJcbmNvbnN0IGdldENpdHlEYXRhID0gYXN5bmMgZnVuY3Rpb24gKGNpdHksIHVuaXRzID0gXCJzdGFuZGFyZFwiKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvdW50T2ZFeGVjdXRpb24rKztcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD0ke0FQSUtFWX1gO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHF1ZXJ5KTtcclxuICAgIGNvbnN0IGRhdGFKU09OID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhSlNPTik7XHJcbiAgICBjb25zdCB7IGxvbiwgbGF0IH0gPSBkYXRhSlNPTi5jb29yZDtcclxuICAgIGNvbnN0IG5ld1F1ZXJ5ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mdW5pdHM9JHt1bml0c30mZXhjbHVkZT1taW51dGVseSxhbGVydHMmbG9uPSR7bG9ufSZhcHBpZD0ke0FQSUtFWX1gO1xyXG4gICAgZ2V0V2VhdGhlckRhdGEobmV3UXVlcnkpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tc2dcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJveF9faW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxufTtcclxuLy8gY29uc3QgQ3VycmVudFdlYXRoZXIgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7cG9zaXRpb24ubGF0fSZsb249JHtwb3NpdGlvbi5sb259JmFwcGlkPSR7QVBJS0VZfWA7XHJcbi8vIENyZWF0ZSBtYWluIGNvbnRhaW5lclxyXG5cclxuLy8gR2V0IGRhdGEgc3luY2hyb25vdXNseSBmcm9tIG9wZW53ZWF0aGVyIEFQSVxyXG4vLyBtZXRob2QgMSBhbmQgb2xkIHNjaG9vbCB3YXlcclxuLy8gY29uc3QgcmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHVybCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGNvbnN0IGRhdGFKU09OID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YUpTT04pO1xyXG4gIGNvbnN0IHVwcGVyQmxvY2sgPSBuZXcgVXBwZXJCbG9jayhkYXRhSlNPTik7XHJcbiAgY29uc3QgYm90dG9tID0gbmV3IEZvcmVjYXN0KGRhdGFKU09OKTtcclxuICBkb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVwcGVyQmxvY2spO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm90dG9tKTtcclxuICBjb25zdCBtYW5pcHVsYXRlID0gbmV3IERPTShkYXRhSlNPTik7XHJcbiAgbWFuaXB1bGF0ZVVwcGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hbmlwdWxhdGVVcHBlcigpIHtcclxuICBjb25zdCBkaXNwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWluZm9fX2Rpc3BsYXlcIik7XHJcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYm94XCIpO1xyXG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJveF9faW1hZ2VcIik7XHJcbiAgY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yLW1zZ1wiKTtcclxuXHJcbiAgZGlzcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhbmRhcmRcIikpIHtcclxuICAgICAgaWYgKGNvdW50T2ZFeGVjdXRpb24gPj0gMSkge1xyXG4gICAgICAgIGdldENpdHlEYXRhKGxhc3RDaXR5LCBcImltcGVyaWFsXCIpO1xyXG4gICAgICB9IGVsc2UgZ2V0TG9jYXRpb24oXCJpbXBlcmlhbFwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImltcGVyaWFsXCIpKSB7XHJcbiAgICAgIGlmIChjb3VudE9mRXhlY3V0aW9uID4gMSkge1xyXG4gICAgICAgIGdldENpdHlEYXRhKGxhc3RDaXR5KTtcclxuICAgICAgfSBlbHNlIGdldExvY2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmICghZXJyb3JNc2cuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzZWFyY2hDaXR5LmJpbmQoc2VhcmNoKSk7XHJcbiAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hDaXR5LmJpbmQoc2VhcmNoKSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNlYXJjaENpdHkoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSB0aGlzLmNpdHkudmFsdWU7XHJcbiAgICBsYXN0Q2l0eSA9IGNpdHlOYW1lO1xyXG4gICAgZ2V0Q2l0eURhdGEoY2l0eU5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gaW5pdGlhbCBsb2FkIHRvIGlkZW50aWZ5IHlvdXIgbG9jYXRpb25cclxuZ2V0TG9jYXRpb24oKTtcclxuIiwiLy8gVGhpcyBtb2R1bGUgaXMgdG8gcmVwcmVzZW50IGRhdGEgYWJvdXQgd2VhdGhlciBmb3IgdG9kYXlcclxuaW1wb3J0IHNlYXJjaEljb24gZnJvbSBcIi4vYXNzZXRzL3NlYXJjaC1pY29uLnBuZ1wiO1xyXG5pbXBvcnQgdGhlcm1vbWV0ZXIgZnJvbSBcIi4vYXNzZXRzL1NWRy90aGVybW8uc3ZnXCI7XHJcbmltcG9ydCBodW1pZGl0eSBmcm9tIFwiLi9hc3NldHMvU1ZHL2h1bWlkaXR5LnN2Z1wiO1xyXG5pbXBvcnQgd2luZCBmcm9tIFwiLi9hc3NldHMvU1ZHL3dpbmQuc3ZnXCI7XHJcbmltcG9ydCByYWlueSBmcm9tIFwiLi9hc3NldHMvU1ZHL3JhaW55LnN2Z1wiO1xyXG5cclxuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcclxuXHJcbmNvbnN0IG1vbnRocyA9IFtcclxuICBcIkphblwiLFxyXG4gIFwiRmViXCIsXHJcbiAgXCJNYXJcIixcclxuICBcIkFwclwiLFxyXG4gIFwiTWF5XCIsXHJcbiAgXCJKdW5cIixcclxuICBcIkp1bFwiLFxyXG4gIFwiQXVnXCIsXHJcbiAgXCJTZXBcIixcclxuICBcIk9jdFwiLFxyXG4gIFwiTm92XCIsXHJcbiAgXCJEZWNcIixcclxuXTtcclxuXHJcbmNsYXNzIE1haW4ge1xyXG4gICNtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAjZGF0YTtcclxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLiNkYXRhID0gZGF0YTtcclxuICAgIHRoaXMuI21haW4uY2xhc3NMaXN0LmFkZChcIndlYXRoZXItaW5mb1wiKTtcclxuICB9XHJcblxyXG4gIGdldCAjZ2VuZXJhdGVEYXRhKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgZGF0YS5kZXNjcmlwdGlvbiA9IHRoaXMuI2RhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgZGF0YS50ZW1wZXJhdHVyZSA9XHJcbiAgICAgIHRoaXMuI2RhdGEuY3VycmVudC50ZW1wID4gMjAwXHJcbiAgICAgICAgPyBNYXRoLnJvdW5kKHRoaXMuI2RhdGEuY3VycmVudC50ZW1wIC0gMjczLjE1KSArIFwiIMKwQ1wiXHJcbiAgICAgICAgOiBNYXRoLnJvdW5kKHRoaXMuI2RhdGEuY3VycmVudC50ZW1wKSArIFwiICDCsEZcIjtcclxuICAgIGRhdGEuY2l0eSA9IHRoaXMuI2RhdGEudGltZXpvbmUuc3BsaXQoXCIvXCIpWzFdO1xyXG5cclxuICAgIC8vIGZpeGluZyBkYXRlXHJcbiAgICBjb25zdCB7IHRpbWV6b25lIH0gPSB0aGlzLiNkYXRhO1xyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgICB0aW1lWm9uZTogdGltZXpvbmUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtkYXRlLCB0aW1lXSA9IGN1cnJlbnRUaW1lLnNwbGl0KFwiLCBcIik7XHJcbiAgICBjb25zdCBwYXJ0T2ZEYXkgPSB0aW1lLnNwbGl0KFwiXCIpLnNwbGljZSgtMywgMykuam9pbihcIlwiKS50cmltKCk7XHJcbiAgICBjb25zdCBbbW9udGgsIGRheSwgeWVhcl0gPSBkYXRlLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGRhdGVHbG9iYWwgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSkpO1xyXG4gICAgY29uc3QgbGFzdERpZ2l0ID0gK2RheSAlIDEwO1xyXG4gICAgbGV0IHN1ZmZpeDtcclxuICAgIGlmIChsYXN0RGlnaXQgPT09IDEpIHN1ZmZpeCA9IFwic3RcIjtcclxuICAgIGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMikgc3VmZml4ID0gXCJuZFwiO1xyXG4gICAgZWxzZSBpZiAobGFzdERpZ2l0ID09PSAzKSBzdWZmaXggPSBcInJkXCI7XHJcbiAgICBlbHNlIHN1ZmZpeCA9IFwidGhcIjtcclxuICAgIGRhdGEuZGF0ZSA9IGAke2hlbHBlci5kYXlOYW1lc1tkYXRlR2xvYmFsLmdldERheSgpXX0sICR7ZGF5fSR7c3VmZml4fSAke1xyXG4gICAgICBtb250aHNbbW9udGggLSAxXVxyXG4gICAgfSBcXGAke3llYXIuc2xpY2UoLTIpfWA7XHJcblxyXG4gICAgY29uc3QgW2hvdXIsIG1pbnV0ZV0gPSB0aW1lLnNwbGl0KFwiOlwiKTtcclxuXHJcbiAgICBkYXRhLnRpbWUgPSBgJHtob3VyfToke21pbnV0ZX0gJHtwYXJ0T2ZEYXkudG9Mb3dlckNhc2UoKX1gO1xyXG5cclxuICAgIGRhdGEuaWNvbiA9IGhlbHBlci5nZXRJY29uKHRoaXMuI2RhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAjbWFrZVRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuI2dlbmVyYXRlRGF0YTtcclxuICAgIGNvbnN0IHN0YW5kYXJkID0gdGhpcy4jZGF0YS5jdXJyZW50LnRlbXAgPiAyMDA7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWF0aGVyLWluZm9fX2Rlc2NyaXB0aW9uXCI+JHtkYXRhLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VhdGhlci1pbmZvX19jaXR5XCI+JHtkYXRhLmNpdHl9PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaW5mb19fZGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke2RhdGEuZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxwPiR7ZGF0YS50aW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWF0aGVyLWluZm9fX3RlbXBlcmF0dXJlXCI+JHtkYXRhLnRlbXBlcmF0dXJlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VhdGhlci1pbmZvX19kaXNwbGF5ICR7XHJcbiAgICAgICAgICAgIHN0YW5kYXJkID8gXCJzdGFuZGFyZFwiIDogXCJpbXBlcmlhbFwiXHJcbiAgICAgICAgICB9XCI+RGlzcGxheSAke3N0YW5kYXJkID8gXCLCsEZcIiA6IFwiwrBDXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaW5mb19faWNvblwiPiBcclxuICAgICAgICAgICAgJHtkYXRhLmljb259XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzcz1cInNlYXJjaC1ib3hfX2lucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIExvY2F0aW9uLi4uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInNlYXJjaC1ib3hfX2ltYWdlXCIgc3JjPSR7c2VhcmNoSWNvbn0gYWx0PVwic2VhcmNoXCIgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbXNnIGhpZGRlblwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Mb2NhdGlvbiBub3QgZm91bmQhPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5TZWFyY2ggbXVzdCBiZSBpbiB0aGUgZm9ybSBvZiBcIkNpdHlcIiwgXCJDaXR5LCBTdGF0ZVwiIG9yIFwiQ2l0eSwgQ291bnRyeVwiLjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGdldCBtYWluKCkge1xyXG4gICAgdGhpcy4jbWFpbi5pbm5lckhUTUwgPSB0aGlzLiNtYWtlVGVtcGxhdGUoKTtcclxuICAgIHJldHVybiB0aGlzLiNtYWluO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmlnaHQgc2lkZSBibG9jayBvZiBpbmZvcm1hdGlvbiBhYm91dCBjdXJyZW50IHdlYXRoZXJcclxuY2xhc3MgUmlnaHRBc3NpZGUge1xyXG4gICNhc3NpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICNkYXRhO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLiNkYXRhID0gZGF0YTtcclxuICAgIHRoaXMuI2Fzc2lkZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1kZXRhaWxzXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVFbGVtZW50KGljb24sIHRleHQsIHRpdGxlKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWRldGFpbHMtZWxlbWVudFwiKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uO1xyXG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZGV0YWlscy1pY29uXCIpO1xyXG5cclxuICAgIGNvbnN0IG1pbmlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWluaUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1kZXRhaWxzLW1pbmktY29udFwiKTtcclxuICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1kZXRhaWxzLWxhYmVsXCIpO1xyXG4gICAgZGl2VGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XHJcbiAgICBjb25zdCBkaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBkaXZUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWRldGFpbHMtdGV4dFwiKTtcclxuICAgIGRpdlRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIG1pbmlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xyXG4gICAgbWluaUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZUZXh0KTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1pbmlDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZURhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICBjb25zdCBzdGFuZGFyZCA9IHRoaXMuI2RhdGEuY3VycmVudC5mZWVsc19saWtlID4gMjAwO1xyXG4gICAgY29uc3QgZmVlbHNfbGlrZSA9IHN0YW5kYXJkXHJcbiAgICAgID8gTWF0aC5yb3VuZCh0aGlzLiNkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSAtIDI3My4xNSkgKyBcIiDCsENcIlxyXG4gICAgICA6IE1hdGgucm91bmQodGhpcy4jZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpICsgXCIgwrBGXCI7XHJcbiAgICBkYXRhLmZlZWxzX2xpa2UgPSBmZWVsc19saWtlO1xyXG4gICAgZGF0YS5odW1pZGl0eSA9IGAke01hdGgucm91bmQodGhpcy4jZGF0YS5jdXJyZW50Lmh1bWlkaXR5KX0gJWA7XHJcbiAgICBjb25zdCBzcGVlZCA9IHRoaXMuI2RhdGEuY3VycmVudC53aW5kX3NwZWVkO1xyXG4gICAgbGV0IHdpbmRTcGVlZDtcclxuICAgIGlmIChzdGFuZGFyZCkge1xyXG4gICAgICB3aW5kU3BlZWQgPSBzcGVlZCAqIDMuNjtcclxuICAgIH0gZWxzZSB3aW5kU3BlZWQgPSBzcGVlZDtcclxuICAgIGRhdGEud2luZFNwZWVkID0gYCR7d2luZFNwZWVkLnRvRml4ZWQoMSl9ICR7c3RhbmRhcmQgPyBcImttL2hcIiA6IFwibXBoXCJ9YDtcclxuICAgIGRhdGEuY2hhbmNlT2ZSYWluID0gYCR7TWF0aC5yb3VuZCh0aGlzLiNkYXRhLmRhaWx5WzBdLnBvcCAqIDEwMCl9ICVgO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXQgbWFpbigpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdlbmVyYXRlRGF0YSgpO1xyXG4gICAgdGhpcy4jYXNzaWRlLmFwcGVuZENoaWxkKFxyXG4gICAgICB0aGlzLmdlbmVyYXRlRWxlbWVudCh0aGVybW9tZXRlciwgZGF0YS5mZWVsc19saWtlLCBcIkZlZWxzIExpa2VcIilcclxuICAgICk7XHJcbiAgICB0aGlzLiNhc3NpZGUuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVFbGVtZW50KGh1bWlkaXR5LCBkYXRhLmh1bWlkaXR5LCBcIkh1bWlkaXR5XCIpXHJcbiAgICApO1xyXG4gICAgdGhpcy4jYXNzaWRlLmFwcGVuZENoaWxkKFxyXG4gICAgICB0aGlzLmdlbmVyYXRlRWxlbWVudChyYWlueSwgZGF0YS5jaGFuY2VPZlJhaW4sIFwiQ2hhbmNlIG9mIFJhaW5cIilcclxuICAgICk7XHJcbiAgICB0aGlzLiNhc3NpZGUuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVFbGVtZW50KHdpbmQsIGRhdGEud2luZFNwZWVkLCBcIldpbmQgU3BlZWRcIilcclxuICAgICk7XHJcbiAgICByZXR1cm4gdGhpcy4jYXNzaWRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwcGVyQmxvY2sge1xyXG4gICNjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuI2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidXBwZXJcIik7XHJcbiAgICBjb25zdCBsZWZ0ID0gbmV3IE1haW4oZGF0YSk7XHJcbiAgICBjb25zdCByaWdodCA9IG5ldyBSaWdodEFzc2lkZShkYXRhKTtcclxuICAgIHRoaXMuI2NvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Lm1haW4pO1xyXG4gICAgdGhpcy4jY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Lm1haW4pO1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9