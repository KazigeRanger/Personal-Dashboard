import getTime from "../Getters/getTime";

export default updateClock;

async function updateClock(): Promise<void> {
    const apiResponse = getTime();
    const apiResponseJSON = await apiResponse;
    console.log(apiResponseJSON);
}