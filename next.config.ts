/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // static HTML export
  basePath: '/portfolio',     // matches your repo name
  assetPrefix: '/portfolio/', // so JS/CSS resolve under the subpath
  images: { unoptimized: true }, // GH Pages can't run the Next image optimizer
  trailingSlash: true,        // avoids 404s on refresh for nested routes
};

export default nextConfig;