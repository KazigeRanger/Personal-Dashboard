export default async function getWeather(): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            async (geos) => {
                const latitude = geos.coords.latitude;
                const longitude = geos.coords.longitude;

                const apiSource = `https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`;
                const apiKey = "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G";

                try {
                    const weatherApiResponse = await fetch(apiSource, {
                        method: "GET",
                        headers: {
                            "X-Api-Key": apiKey
                        }
                    });

                    if (!weatherApiResponse.ok) {
                        throw new Error(`API error: ${weatherApiResponse.status} - ${weatherApiResponse.statusText}`);
                    }

                    const weatherData = await weatherApiResponse.json();
                    resolve(weatherData);
                } catch (err) {
                    reject(err);
                }
            },
            (error) => {
                reject(new Error(`Geolocation error: ${error.message}`));
            }
        );
    });
}