export default getTime;

interface TIMEAPIRESPONSE {
    timezone: string,
    datetime: string,
    date: string,
    year: string,
    month: string,
    day: string,
    hour: string,
    minute: string,
    second: string,
    day_of_week: string
  }
  

async function getTime(timezone: string = "Europe/London"): Promise<TIMEAPIRESPONSE> {
    try {
        const apiResponse = await fetch(`https://api.api-ninjas.com/v1/worldtime?timezone=${timezone}`, {
            method: "GET",
            headers: {
                "X-Api-Key": "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G"
            }
        });
        const apiResponseJSON: Promise<TIMEAPIRESPONSE> = (await apiResponse).json();
        return apiResponseJSON;
    } catch(err) {
        throw err;
    }
}