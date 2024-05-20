import currentInfo from "../components/currentInfo";
import dayInfo from "../components/dayInfo";
import header from "../components/header";

const Renderer = (function Renderer() {
    /**
     * @param {string} title
     * @param {string} description
     */
    function displayTitle(title, description) {
        const container = document.querySelector("#title-container");

        if (container !== null) {
            container.innerHTML = header(title, description);
        }
    }

    /**
     * @param {object} currentData
     * @param {boolean} state
     */
    function displayCurrentData(currentData, state) {
        const container = document.querySelector("#current-conditions");

        if (container !== null) {
            container.innerHTML = currentInfo(currentData, state);
        }
    }

    /**
     * @param {Array} days
     * @param {boolean} state
     */
    function displayForecast(days, state) {
        const container = document.querySelector("#days");

        if (container !== null) {
            container.innerHTML = "";

            days.forEach((day) => {
                container.innerHTML += dayInfo(day, state);
            });
        }
    }

    /**
     * @param {object} data
     * @param {boolean} state
     */
    function displayData(data, state) {
        const { title, description, currentConditions, days } = data;
        displayTitle(title, description);
        displayCurrentData(currentConditions, state);
        displayForecast(days, state);
    }

    return {
        displayData,
    };
})();

export default Renderer;
