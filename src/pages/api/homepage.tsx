import { getLocation, getPhoto, getWeather, getForecast } from "@/utils/helper";
import { todayWeather, userLocation } from "@/utils/types";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let bgImage;
    let location: userLocation

    let todayWeather: todayWeather;
    let weatherForecast;

    const { lat, long } = req.query;

    try {

        //get the location from the api through reverse geocoding, get weather forecast for current day, get weather forecast for next 5 days
        const promisesArr = [getLocation({ lat, long }), getWeather({ lat, long }), getForecast({ lat, long })]
        const responseArr = await Promise.allSettled(promisesArr);

        const results = responseArr.map(data => data.status === 'fulfilled' ? data : data.reason);

        location = results[0].value;
        todayWeather = results[1].value;
        weatherForecast = results[2].value;
    } catch (err: any) {
        // Bad request
        res.status(400).json({ message: err.message });
        return
    }

    try {
        // get a random photo of state from unsplash
        bgImage = await getPhoto(location.state);

    } catch (err: any) {
        // Bad request
        res.status(400).json({ message: err.message });
        return
    }

    return res.status(200).json({ bgImage, location, todayWeather, weatherForecast })
}