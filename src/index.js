var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import updateClock from "./modules/TypeScript/Setters/updateClock.js";
import getWeather from "./modules/TypeScript/Getters/getWeather.js";
const temperatureText = document.getElementById("temperature");
const perceivedTemperatureText = document.getElementById("perceived-temperature");
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const weather = yield getWeather();
    console.log(weather);
    if (temperatureText === null || perceivedTemperatureText === null) {
        throw new Error("Failed to access temperature and perceived-temperature HTML elements.");
    }
    temperatureText.innerHTML = `Current temperature: ${weather.temp} °C`;
    perceivedTemperatureText.innerHTML = `Perceived temperature: ${weather.feels_like} °C`;
}));
// Do some nice things when the window loads.
window.addEventListener("load", function () {
    // Set the clock to the correct time when the window loads.
    // Also set an interval for when to update the clock.
    updateClock();
    const now = new Date();
    this.setTimeout(() => {
        updateClock();
        setInterval(() => {
            updateClock();
        }, 60000);
    }, (60 - now.getSeconds()) * 1000);
});
