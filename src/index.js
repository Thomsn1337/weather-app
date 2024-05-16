import { getWeatherData, processData } from "./lib/utils";
import "./style.css";

async function main() {
    const weatherData = await getWeatherData("naturns");
    const processed = processData(weatherData);

    console.log(weatherData);
    console.log(processed);
}

main();
