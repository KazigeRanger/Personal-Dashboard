var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default getTime;
function getTime() {
    return __awaiter(this, arguments, void 0, function* (timezone = "Europe/London") {
        try {
            const apiResponse = yield fetch(`https://api.api-ninjas.com/v1/worldtime?timezone=${timezone}`, {
                method: "GET",
                headers: {
                    "X-Api-Key": "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G"
                }
            });
            const apiResponseJSON = (yield apiResponse).json();
            return apiResponseJSON;
        }
        catch (err) {
            throw err;
        }
    });
}
