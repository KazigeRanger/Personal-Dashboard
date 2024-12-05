import updateClock from "./modules/TypeScript/Setters/updateClock.js";
import getQuote from "./modules/TypeScript/Getters/quoteGetter.js";
document.addEventListener("DOMContentLoaded", () => {
    // Get a quote to display
    const subtitle = document.getElementById("page-subtitle");
    if (subtitle === null) {
        console.error("Failed to get subtitle element.");
        return;
    }
    getQuote("happiness")
        .then((resolvedResponse) => {
        console.log(resolvedResponse);
        subtitle.textContent = `"${resolvedResponse[0].quote}" - ${resolvedResponse[0].author}`;
    })
        .catch(error => console.error("Error caught: ", error));
});
// Do some nice things when the window loads.
window.addEventListener("load", function () {
    // Set the clock to the correct time when the window loads.
    // Also set an interval for when to update the clock.
    updateClock();
    const now = new Date();
    this.setTimeout(() => {
        updateClock();
        setInterval(() => {
            updateClock();
        }, 60000);
    }, (60 - now.getSeconds()) * 1000);
});
