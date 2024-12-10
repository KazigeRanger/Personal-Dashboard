export default async function getGeoLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position);
        },
        (error) => {
            reject(error);
        });
    });
}