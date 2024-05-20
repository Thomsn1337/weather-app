import { format } from "date-fns";
import icons from "../img/weather/icons";

/**
 * @param {object} day
 * @param {boolean} state
 */
function dayInfo(day, state) {
    const date = new Date(day.datetime);
    const icon = icons[day.icon];

    let tempmin;
    let tempmax;

    if (state) {
        tempmin = `${day.metric.tempmin} °C`;
        tempmax = `${day.metric.tempmax} °C`;
    } else {
        tempmin = `${day.us.tempmin} °F`;
        tempmax = `${day.us.tempmax} °F`;
    }

    return `
        <div class="day">
            <p class="day-name">${format(date, "EEEE")}</p>
            <p class="day-date">${format(date, "d.MM.yyyy")}</p>
            <img src="${icon}" alt="${day.icon}" />
            <div class="day-data">
                <p class="temp-min">${tempmin}</p>
                <p class="temp-max">${tempmax}</p>
                <p class="humidity">${day.humidity}%</p>
            </div>
        </div>
    `;
}

export default dayInfo;
