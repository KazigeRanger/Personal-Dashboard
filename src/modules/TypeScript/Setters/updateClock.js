var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getTime from "../Getters/getTime.js";
export default updateClock;
function updateClock() {
    return __awaiter(this, void 0, void 0, function* () {
        // Get the time through an api
        const apiResponse = getTime();
        const apiResponseJSON = yield apiResponse;
        // Store the body element in a variable
        const body = document.querySelector("body");
        if (body == null) {
            throw Error;
        }
        if (parseInt(apiResponseJSON.hour, 10) >= 17 && parseInt(apiResponseJSON.hour, 10) <= 20) {
            body.style.backgroundImage = "url(../images/backgrounds/sunsetrise-gradient.png)";
        }
        else if (parseInt(apiResponseJSON.hour, 10) <= 16 && parseInt(apiResponseJSON.hour, 10) >= 11) {
            body.style.backgroundImage = "url(../images/backgrounds/day-gradient.png)";
        }
        else if (parseInt(apiResponseJSON.hour, 10) <= 10 && parseInt(apiResponseJSON.hour, 10) >= 7) {
            body.style.backgroundImage = "url(../images/backgrounds/sunsetrise-gradient.png)";
        }
        else if (parseInt(apiResponseJSON.hour, 10) >= 21 || parseInt(apiResponseJSON.hour, 10) <= 6) {
            body.style.backgroundImage = "url(../images/backgrounds/night-gradient.png)";
        }
    });
}
