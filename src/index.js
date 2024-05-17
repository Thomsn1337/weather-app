import { getWeatherData, processData } from "./lib/utils";
import "./style.css";

const locationForm = document.querySelector("#location-form");
const locationInput = document.querySelector("#location");

/**
 * @param {string} location
 */
async function main(location) {
    const weatherData = await getWeatherData(location);
    if (!weatherData) {
        return;
    }

    const processed = processData(weatherData);
    console.log(processed);
}

main("naturns");

locationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    main(locationInput.value);
});
