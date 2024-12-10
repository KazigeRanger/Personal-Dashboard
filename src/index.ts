import updateClock from "./modules/TypeScript/Setters/updateClock.js";
import getQuote from "./modules/TypeScript/Getters/getQuote.js";
import getGeoLocation from "./modules/TypeScript/Getters/getGeoLocation.js";
import getWeather from "./modules/TypeScript/Getters/getWeather.js";

const temperatureText = document.getElementById("temperature");
const perceivedTemperatureText = document.getElementById("perceived-temperature");

document.addEventListener("DOMContentLoaded", async () => {
    const weather = await getWeather();
    console.log(weather);

    if (temperatureText === null || perceivedTemperatureText === null) {
        throw new Error("Failed to access temperature and perceived-temperature HTML elements.");
    }
    temperatureText.innerHTML = `Current temperature: ${weather.temp} °C`;
    perceivedTemperatureText.innerHTML = `Perceived temperature: ${weather.feels_like} °C`;
});

// Do some nice things when the window loads.
window.addEventListener("load", function() {
    // Set the clock to the correct time when the window loads.
    // Also set an interval for when to update the clock.
    updateClock();
    const now = new Date();
    this.setTimeout(() => {
        updateClock();
        setInterval(() => {
            updateClock();
        }, 60000);
    }, (60-now.getSeconds())*1000);
});

