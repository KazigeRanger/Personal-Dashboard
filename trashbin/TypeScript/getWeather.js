var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((geos) => __awaiter(this, void 0, void 0, function* () {
                const latitude = geos.coords.latitude;
                const longitude = geos.coords.longitude;
                const apiSource = `https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`;
                const apiKey = "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G";
                try {
                    const weatherApiResponse = yield fetch(apiSource, {
                        method: "GET",
                        headers: {
                            "X-Api-Key": apiKey
                        }
                    });
                    if (!weatherApiResponse.ok) {
                        throw new Error(`API error: ${weatherApiResponse.status} - ${weatherApiResponse.statusText}`);
                    }
                    const weatherData = yield weatherApiResponse.json();
                    resolve(weatherData);
                }
                catch (err) {
                    reject(err);
                }
            }), (error) => {
                reject(new Error(`Geolocation error: ${error.message}`));
            });
        });
    });
}
