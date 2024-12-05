import updateClock from "./modules/TypeScript/Setters/updateClock.js";

window.addEventListener("load", function() {
    updateClock();
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    console.log(`delay: ${60-now.getSeconds()}`);
    this.setTimeout(() => {
        updateClock();
        setInterval(() => {
            updateClock();
        }, 60000);
    }, (60-now.getSeconds())*1000);
});
