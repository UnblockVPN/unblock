export default function handler(req, res) {
    try {
      const { method } = req;
  
      if (method === 'GET') {
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        res.status(200).json({ ip: ipAddress });
      } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${method} Not Allowed` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
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