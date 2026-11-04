import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 2,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/medical-information-disclaimer",
        destination: "/disclaimer",
        permanent: true,
      },
      {
        source: "/about/our-story",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about/leadership",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about/mission-and-values",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/quality/standards",
        destination: "/quality",
        permanent: true,
      },
      {
        source: "/quality/certifications",
        destination: "/quality",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
