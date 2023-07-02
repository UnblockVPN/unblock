import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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








// pages/api/hello.js
/* export default function handler(req, res) {
    let ip;
  
    if (req.headers["x-forwarded-for"]) {
      ip = req.headers["x-forwarded-for"].split(',')[0]
    } else if (req.headers["x-real-ip"]) {
      ip = req.connection.remoteAddress
    } else {
      ip = req.connection.remoteAddress
    }
  
    console.log(ip);
  
    console.log(ip)
    res.status(200).json({ name: 'John Doe' })
  } */