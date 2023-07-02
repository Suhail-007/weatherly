let lat: number;
let long: number;

//Get a random num between 1 to array length
export const getRandomNum = function (maxNum: number) {
    const randomNum = Math.floor(Math.random() * maxNum);
    return randomNum
}

export const getPhoto = async function (location: string) {
    try {
        const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${location}&orientation=landscape&client_id=T-wpXqtoeV9q15ndT6aqdpTAWtZbMtCHZTeRj_h0sS8`);
        const data = await res.json();

        if (data.length === 0 || !res.ok) {
            throw Error('No Image found for the current location');
        }

        const results = data.results;
        const arrayLength = Number(results.length);
        const randomNum = getRandomNum(arrayLength);
        const randomImage = data.results[randomNum].urls.regular;

        return randomImage
    } catch (error: any) {
        throw Error(error.message)
    }
}

export const getLocation = async function ({ lat, long }: { lat: string | undefined | string[], long: string | undefined | string[] }) {
    try {
        const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=839ffab71000480889433546936776a5`);

        const data = await res.json()
        
        return data

    } catch (error: any) {
        throw Error(error.message);
    }
}