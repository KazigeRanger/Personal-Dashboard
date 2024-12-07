var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default getGeocodedLocation;
function getGeocodedLocation() {
    return __awaiter(this, arguments, void 0, function* (city = "Naarden", country = "NL") {
        const apiKey = "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G";
        const apiSource = `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`;
        try {
            const response = fetch(apiSource, {
                method: "GET",
                headers: {
                    "X-Api-Key": apiKey
                }
            });
            const responseJSON = (yield response).json();
            return responseJSON;
        }
        catch (err) {
            throw err;
        }
    });
}
