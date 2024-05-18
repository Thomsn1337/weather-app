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
     * @param {object} data
     */
    function displayData(data) {
        const { title, description } = data;
        displayTitle(title, description);
    }

    return {
        displayData,
    };
})();

export default Renderer;
