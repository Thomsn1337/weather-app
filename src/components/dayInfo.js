import { format } from "date-fns";
import icons from "../img/weather/icons";

/**
 * @param {object} day
 */
function dayInfo(day) {
    console.log(day);

    const date = new Date(day.datetime);
    const icon = icons[day.icon];
    const tempData = day.metric;

    return `
        <div class="day">
            <p class="day-name">${format(date, "EEEE")}</p>
            <p class="day-date">${format(date, "d.MM.yyyy")}</p>
            <img src="${icon}" alt="${day.icon}" />
            <div class="day-data">
                <p class="temp-min">${tempData.tempmin} °C</p>
                <p class="temp-max">${tempData.tempmax} °C</p>
                <p class="humidity">${day.humidity}%</p>
            </div>
        </div>
    `;
}

export default dayInfo;
