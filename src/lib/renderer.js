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
     */
    function displayCurrentData(currentData) {
        const container = document.querySelector("#current-conditions");

        if (container !== null) {
            container.innerHTML = currentInfo(currentData);
        }
    }

    /**
     * @param {Array} days
     */
    function displayForecast(days) {
        const container = document.querySelector("#days");

        if (container !== null) {
            container.innerHTML = "";

            days.forEach((day) => {
                container.innerHTML += dayInfo(day);
            });
        }
    }

    /**
     * @param {object} data
     */
    function displayData(data) {
        const { title, description, currentConditions, days } = data;
        displayTitle(title, description);
        displayCurrentData(currentConditions);
        displayForecast(days);
    }

    return {
        displayData,
    };
})();

export default Renderer;
