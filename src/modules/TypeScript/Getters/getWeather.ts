import getGeoLocation from "./getGeoLocation.js";

export default async function getWeather(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        const geos = await getGeoLocation();
        const latitude = geos.coords.latitude;
        const longitude = geos.coords.longitude;

        const apiSource = `https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`;
        const apiKey = "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G";

        try {
            const weather: Promise<any> = fetch(apiSource, {
                method: "GET",
                headers: {
                    "X-Api-Key": apiKey
                }
            });
            resolve((await weather).json());
        } catch(err) {
            reject(err);
        }
    });
}