import "./style.css";

async function getWeatherData(location) {
    const apiKey = "9YBLYGXYQRMR26C25MP2BV8SB";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&key=${apiKey}`;

    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();

    return data;
}

async function main() {
    const weatherData = await getWeatherData("naturns");
    console.log(weatherData);
}

main();
