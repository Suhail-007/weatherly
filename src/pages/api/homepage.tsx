import { getLocation, getPhoto, getWeather, getForecast } from "@/utils/helper";
import { userLocation } from "@/utils/types";
import { NextApiRequest, NextApiResponse } from "next";

let location: userLocation = {
    country: '',
    city: '',
    postcode: ''
};

let todayWeather;
let weatherForecast;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let bgImage;
    const { lat, long } = req.query;

    try {
        
        //get the location from the api through reverse geocoding, get weather forecast for current day, get weather forecast for next 5 days
        const promisesArr = [getLocation({ lat, long }), getWeather({ lat, long }), getForecast({ lat, long })]
        const responseArr = await Promise.allSettled(promisesArr);

        const results = responseArr.map(data => data.status === 'fulfilled' ? data : data.reason);

        const { country, city, postcode } = results[0].value.results[0].components;

        location = {
            country,
            city,
            postcode
        }

        todayWeather = results[1].value;
        weatherForecast = results[2].value;
        // userLocation = location?.results[0].components;
    } catch (err: any) {
        //204 No content
        res.status(204).json({ message: "Not found", status: 204 })
        return
    }

    try {
        // get a random photo of somewhere of the country from unsplash
        bgImage = await getPhoto(location?.country);

    } catch (err: any) {
        //204 no content found
        res.status(204).json({ message: err.message, status: 204 })
        return
    }

    return res.status(200).json({ bgImage, location, todayWeather, weatherForecast })
}