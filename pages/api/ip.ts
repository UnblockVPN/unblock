import { NextApiRequest, NextApiResponse } from 'next';

export async function getIpAddress(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      throw new Error('Method Not Allowed');
    }

    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log('Client IP Address:', ipAddress);

    if (!ipAddress) {
      throw new Error('Unable to retrieve client IP address.');
    }

    res.status(200).json({ ip: ipAddress });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
