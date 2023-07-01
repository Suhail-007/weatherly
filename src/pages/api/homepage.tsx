import { getLocation, getPhoto } from "@/utils/helper";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let location;
    let userLocation;
    let bgImage;
    const { lat, long } = req.query;

    try {

        location = await getLocation({ lat, long })
        userLocation = location?.results[0].components;

        if (!userLocation) {
            throw Error('Not found')
        }
    } catch (err: any) {
        //204 No content
        res.status(204).json({ message: "Not found", status: 204 })
        return
    }

    try {
        bgImage = await getPhoto(userLocation?.country);

    } catch (err: any) {
        res.status(204).json({ message: err.message, status: 204 })
        return
    }

    return res.status(200).json({ bgImage: bgImage, userLocation: userLocation })
}