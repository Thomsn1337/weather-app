import { format } from "date-fns";

/**
 * @param {string} title
 * @param {string} description
 */
function header(title, description) {
    return `
        <h2>
            ${title}
            <span id="header-date">
                ${format(Date.now(), "E, dd MMM yyyy")}
            </span>
        </h2>
        <p>${description}</p>
    `;
}

export default header;
