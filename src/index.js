import Renderer from "./lib/renderer";
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
    Renderer.displayData(processed);
}

main("Rome");

if (locationForm !== null) {
    locationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (locationInput !== null) {
            main(locationInput.value);
        }
    });
}
