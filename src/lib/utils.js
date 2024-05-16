/**
 * @param {number} value
 * @returns {number}
 */
function celsiusToFahrenheit(value) {
    return Number((value * (9 / 5) + 32).toFixed(1));
}

/**
 * @param {number} value
 * @returns {number}
 */
function kmhToMph(value) {
    return Number((value * 0.621371).toFixed(1));
}

/**
 * @param {string} location
 */
async function getWeatherData(location) {
    const apiKey = "9YBLYGXYQRMR26C25MP2BV8SB";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&key=${apiKey}`;

    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();

    return data;
}

/**
 * @param {object} data
 * @returns {object}
 */
function processData(data) {
    const dataConditions = data.currentConditions;
    const currentConditions = {
        conditions: dataConditions.conditions,
        icon: dataConditions.icon,
        humidity: dataConditions.humidity,
        metric: {
            temp: dataConditions.temp,
            windspeed: dataConditions.windspeed,
        },
        us: {
            temp: celsiusToFahrenheit(dataConditions.temp),
            windspeed: kmhToMph(dataConditions.windspeed),
        },
    };

    const days = [];
    const dataDays = data.days;
    dataDays.forEach((day) => {
        days.push({
            icon: day.icon,
            datetime: day.datetime,
            humidity: day.humidity,
            metric: {
                tempmin: day.tempmin,
                tempmax: day.tempmax,
                windspeed: day.windspeed,
            },
            us: {
                tempmin: celsiusToFahrenheit(day.tempmin),
                tempmax: celsiusToFahrenheit(day.tempmax),
                windspeed: kmhToMph(day.windspeed),
            },
        });
    });

    return {
        address: data.resolvedAddress,
        description: data.description,
        currentConditions,
        days,
    };
}

export { getWeatherData, processData };
