import Renderer from "./lib/renderer";
import { getWeatherData, processData } from "./lib/utils";
import "./style.css";

const locationForm = document.querySelector("#location-form");
const locationInput = document.querySelector("#location");
const unitSwitcher = document.querySelector("#unit-switcher");

let state = true;
let processed;

/**
 * @param {string} location
 */
async function main(location) {
    const weatherData = await getWeatherData(location);
    if (!weatherData) {
        return;
    }

    processed = processData(weatherData);
    Renderer.displayData(processed, state);
}

main("Rome");

if (locationForm !== null) {
    locationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (locationInput !== null) {
            main(locationInput.value);
            locationInput.value = "";
        }
    });
}

if (unitSwitcher !== null) {
    unitSwitcher.addEventListener("click", () => {
        state = !state;
        console.log(state);
        Renderer.displayData(processed, state);
    });
}
