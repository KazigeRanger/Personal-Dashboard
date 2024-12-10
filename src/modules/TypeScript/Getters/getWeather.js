var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getGeoLocation from "./getGeoLocation.js";
export default function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const geos = yield getGeoLocation();
            const latitude = geos.coords.latitude;
            const longitude = geos.coords.longitude;
            const apiSource = `https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`;
            const apiKey = "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G";
            try {
                const weather = fetch(apiSource, {
                    method: "GET",
                    headers: {
                        "X-Api-Key": apiKey
                    }
                });
                resolve((yield weather).json());
            }
            catch (err) {
                reject(err);
            }
        }));
    });
}
