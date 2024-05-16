import { getWeatherData } from "./lib/utils";
import "./style.css";

async function main() {
    const weatherData = await getWeatherData("naturns");
    console.log(weatherData);
}

main();
