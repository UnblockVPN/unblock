// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//     serverActions: true
//   }
// };

// module.exports = nextConfig;



const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
