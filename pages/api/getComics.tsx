import axios from "axios";
import { createHash } from "node:crypto";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const ts = Date.now();
    const HASH = createHash('md5').update(ts+process.env.PRIVATE_API_KEY+process.env.NEXT_PUBLIC_API_KEY).digest('hex');
    const URL = `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${HASH}&format=comic&formatType=comic&limit=50`;

    const response = await axios.get(URL);

    res.status(200).json({ data: response.data });
}