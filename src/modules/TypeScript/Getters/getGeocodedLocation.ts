import GEOCODERAPIRESPONSE from "../../../interfaces/geocoderApiResponse";

export default getGeocodedLocation;

async function getGeocodedLocation(city: string = "Amsterdam", country: string = "The Netherlands"): Promise<GEOCODERAPIRESPONSE> {
    const apiKey: string = "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G";
    const apiSource: string = `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`

    try {
        const response = fetch(apiSource, {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey
            }
        });
        const responseJSON: Promise<GEOCODERAPIRESPONSE> = (await response).json();
        return responseJSON;
    } catch (err) {
        throw err;
    }
}