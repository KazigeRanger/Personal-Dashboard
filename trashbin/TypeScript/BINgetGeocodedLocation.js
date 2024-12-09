export default function getGeocodedLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position);
        }, (err) => {
            reject(new Error(`Geolocation error: ${err.message}`));
        });
    });
}
