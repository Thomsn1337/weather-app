import currentInfo from "../components/currentInfo";
import header from "../components/header";

const Renderer = (function Renderer() {
    /**
     * @param {string} title
     * @param {string} description
     */
    function displayTitle(title, description) {
        const container = document.querySelector("#title-container");

        container.innerHTML = header(title, description);
    }

    /**
     * @param {object} currentData
     */
    function displayCurrentData(currentData) {
        const container = document.querySelector("#current-conditions");

        container.innerHTML = currentInfo(currentData);
    }

    /**
     * @param {object} data
     */
    function displayData(data) {
        const { title, description, currentConditions, days } = data;
        displayTitle(title, description);
        displayCurrentData(currentConditions);
    }

    return {
        displayData,
    };
})();

export default Renderer;
