import { NextApiRequest, NextApiResponse } from "next";

import { getForecastByName, getWeatherByName, getPhoto } from '@/utils/helper';

import { userLocation } from "@/utils/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let bgImage: string;
    let location: userLocation;
    let todayWeather;
    let weatherForecast;

    const { state } = req.query;

    try {
        const promisesArr = [getWeatherByName(state), getForecastByName(state), getPhoto(state)]
        const responseArr = await Promise.allSettled(promisesArr);

        const results = responseArr.map(data => data.status === "fulfilled" ? data : data.reason);
        location = {
            country: results[1].value.city.country,
            state: results[1].value.city.name,
        };

        weatherForecast = results[1].value;
        todayWeather = results[0].value
        bgImage = results[2].value;

        res.status(200).json({ location, todayWeather, weatherForecast, bgImage })
    } catch (err: any) {
        res.status(204).json({ message: err })
    }
}