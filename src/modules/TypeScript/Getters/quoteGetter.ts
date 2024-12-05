import QUOTEAPIRESPONSE from "../../../interfaces/quoteApiResponse";

export default getQuote;

async function getQuote(category: string): Promise<QUOTEAPIRESPONSE> {
    const apiKey = "DINwyGkOgjKTRPVMYDXDew==NhQn2RxfLgkRqr3G";
    const apiSource = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    try{
        const apiResponse = fetch(apiSource, {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey
            }
        });
        const apiResponseJSON = (await apiResponse).json();
        return apiResponseJSON;
    } catch (err) {
        throw err;
    }
}