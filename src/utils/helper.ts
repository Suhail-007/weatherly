import type { coords } from "./types";

let lat: number;
let long: number;

//Get a random num between 1 to array length
export const getRandomNum = function (maxNum: number) {
    const randomNum = Math.floor(Math.random() * maxNum);
    return randomNum
}

export const getForecast = async function ({ lat, long }: coords) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=be6740524c0891926c5303c9acd5e7b0&units=metric`);
    const data = await res.json();

    return data
}

export const getWeather = async function ({ lat, long }: coords) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=be6740524c0891926c5303c9acd5e7b0&units=metric`);
    const data = await res.json();

    return data
}

export const getForecastByName = async function (searchQuery: string | undefined | string[]) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=be6740524c0891926c5303c9acd5e7b0&units=metric`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error('Invalid query, try searching for other city');
        }

        return data
    } catch (err: any) {
        throw new Error(err)
    }
}


export const getWeatherByName = async function (searchQuery: string | undefined | string[]) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=be6740524c0891926c5303c9acd5e7b0&units=metric`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error('Invalid query, try searching for other city');
        }

        return data
    } catch (err: any) {
        throw new Error(err)
    }

}

export const getPhoto = async function (location: string | string[] | undefined) {
    try {
        const randomPage = Math.floor(Math.random() * 20);
        
        const res = await fetch(`https://api.unsplash.com/search/photos?page=${randomPage}&query=${location}&orientation=landscape&client_id=T-wpXqtoeV9q15ndT6aqdpTAWtZbMtCHZTeRj_h0sS8`);
        const data = await res.json();

        if (data.length === 0 || !res.ok) {
            throw new Error('No Image found for the current location');

        }

        const results = data.results;
        const arrayLength = Number(results.length);
        const randomNum = getRandomNum(arrayLength);
        const randomImage = data.results[randomNum].urls.regular;

        return randomImage
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getLocation = async function ({ lat, long }: coords) {
    try {
        // const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=839ffab71000480889433546936776a5`);
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=${1}&appid=be6740524c0891926c5303c9acd5e7b0`)

        const data = await res.json();

        // if user lives on mars throw error
        if (data[0].length === 0) {
            throw new Error('Not found')
        }

        return {
            country: data[0].country,
            state: data[0].state
        }

    } catch (error: any) {
        throw new Error(error);
    }
}