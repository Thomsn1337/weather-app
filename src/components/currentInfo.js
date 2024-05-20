import icons from "../img/weather/icons";
import tempIcon from "../img/temperature.svg";
import humIcon from "../img/humidity.svg";
import windIcon from "../img/windspeed.svg";

/**
 * @param {object} data
 */
function currentInfo(data) {
    const icon = icons[data.icon];

    return `
        <div id="current-icon">
            <img src="${icon}" alt="${data.icon}" />
            <p>${data.conditions}</p>
        </div>
        <div id="current-data">
            <div id="current-temp">
                <img src="${tempIcon}" alt="temperature" />
                <p>${data.metric.temp} °C</p>
            </div>
            <div id="current-hum">
                <img src="${humIcon}" alt="temperature" />
                <p>${data.humidity}%</p>
            </div>
            <div id="current-wind">
                <img src="${windIcon}" alt="temperature" />
                <p>${data.metric.windspeed} km/h</p>
            </div>
        </div>
    `;
}

export default currentInfo;
