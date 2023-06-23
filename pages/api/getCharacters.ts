// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { page } = req.query
    console.log(page)
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);

  }
}
