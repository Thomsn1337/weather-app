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
    try {
        const apiKey = "9YBLYGXYQRMR26C25MP2BV8SB";
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/next7days?unitGroup=metric&key=${apiKey}`;

        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) {
            throw new Error(
                "Location not found. Please enter a valid location",
            );
        }

        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
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
    dataDays.slice(1).forEach((day) => {
        days.push({
            icon: day.icon,
            datetime: day.datetime,
            humidity: day.humidity,
            metric: {
                tempmin: day.tempmin,
                tempmax: day.tempmax,
            },
            us: {
                tempmin: celsiusToFahrenheit(day.tempmin),
                tempmax: celsiusToFahrenheit(day.tempmax),
            },
        });
    });

    return {
        title: data.resolvedAddress,
        description: data.description,
        currentConditions,
        days,
    };
}

export { getWeatherData, processData };
