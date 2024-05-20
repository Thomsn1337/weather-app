import icons from "../img/weather/icons";
import tempIcon from "../img/temperature.svg";
import humIcon from "../img/humidity.svg";
import windIcon from "../img/windspeed.svg";

/**
 * @param {object} data
 * @param {boolean} state
 */
function currentInfo(data, state) {
    const icon = icons[data.icon];
    let temperature;
    let windspeed;

    if (state) {
        temperature = `${data.metric.temp} °C`;
        windspeed = `${data.metric.windspeed} km/h`;
    } else {
        temperature = `${data.us.temp} °F`;
        windspeed = `${data.us.windspeed} mph`;
    }

    return `
        <div id="current-icon">
            <img src="${icon}" alt="${data.icon}" />
            <p>${data.conditions}</p>
        </div>
        <div id="current-data">
            <div id="current-temp">
                <img src="${tempIcon}" alt="temperature" />
                <p>${temperature}</p>
            </div>
            <div id="current-hum">
                <img src="${humIcon}" alt="temperature" />
                <p>${data.humidity}%</p>
            </div>
            <div id="current-wind">
                <img src="${windIcon}" alt="temperature" />
                <p>${windspeed}</p>
            </div>
        </div>
    `;
}

export default currentInfo;
