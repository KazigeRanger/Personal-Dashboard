import getTime from "../Getters/getTime.js";

export default updateClock;

async function updateClock(): Promise<void> {
    // Get the time through an api
    const apiResponse = getTime();
    const apiResponseJSON = await apiResponse;
    
    // Store the body element in a variable
    const body = document.querySelector("body");
    if (body == null) {
        throw Error;
    }
    if (parseInt(apiResponseJSON.hour, 10) >= 17 && parseInt(apiResponseJSON.hour, 10) <= 20) {
        body.style.backgroundImage = "url(../images/backgrounds/sunsetrise-gradient.png)";
    } else if (parseInt(apiResponseJSON.hour, 10) <= 16 && parseInt(apiResponseJSON.hour, 10) >= 11) {
        body.style.backgroundImage = "url(../images/backgrounds/day-gradient.png)";
    } else if (parseInt(apiResponseJSON.hour, 10) <= 10 && parseInt(apiResponseJSON.hour, 10) >= 7) {
        body.style.backgroundImage = "url(../images/backgrounds/sunsetrise-gradient.png)";
    } else if (parseInt(apiResponseJSON.hour, 10) >= 21 || parseInt(apiResponseJSON.hour, 10) <= 6) {
        body.style.backgroundImage = "url(../images/backgrounds/night-gradient.png)";
    }
}