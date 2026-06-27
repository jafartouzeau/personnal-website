const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/personnal-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personnal-website/' : '',
};
module.exports = nextConfig;
