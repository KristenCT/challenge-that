import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/', permanent: true },
      { source: '/testimonials', destination: '/work', permanent: true },
      { source: '/our-services', destination: '/loyalty', permanent: true },
      { source: '/services', destination: '/loyalty', permanent: true },
      { source: '/resources', destination: '/insights', permanent: true },
    ]
  },
};

export default nextConfig;
