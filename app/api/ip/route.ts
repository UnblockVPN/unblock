// app/ip/route.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let ip =
    req.headers['x-forwarded-for'] ||
    (req.connection?.remoteAddress as string) ||
    (req.socket?.remoteAddress as string) ||
    (req.connection?.socket?.remoteAddress as string);

  // If the IP address is in IPV6 format, convert it to IPV4
  if (ip && ip.startsWith('::ffff:')) {
    ip = ip.slice(7);
  }

  res.status(200).json({ ip });
}
