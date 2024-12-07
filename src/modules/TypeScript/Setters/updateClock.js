export default updateClock;
function updateClock() {
    // Get the time through an api
    const now = new Date();
    // Store the clock header in a variable
    const clock = document.getElementById("clock");
    if (clock == null) {
        throw Error;
    }
    clock.textContent = now.getMinutes() < 10 ? `${now.getHours()}:0${now.getMinutes()}` : `${now.getHours()}:${now.getMinutes()}`;
    // Store the body element in a variable
    const body = document.querySelector("body");
    if (body == null) {
        throw Error;
    }
    if (now.getHours() >= 17 && now.getHours() <= 20) {
        body.style.backgroundImage = "url(../images/backgrounds/sunsetrise-gradient.png)";
    }
    else if (now.getHours() <= 16 && now.getHours() >= 10) {
        body.style.backgroundImage = "url(../images/backgrounds/day-gradient.png)";
    }
    else if (now.getHours() <= 9 && now.getHours() >= 7) {
        body.style.backgroundImage = "url(../images/backgrounds/sunsetrise-gradient.png)";
    }
    else if (now.getHours() >= 21 || now.getHours() <= 6) {
        body.style.backgroundImage = "url(../images/backgrounds/night-gradient.png)";
    }
    else {
        body.style.backgroundImage = "url(../images/backgrounds/day-gradient.png)";
    }
}
