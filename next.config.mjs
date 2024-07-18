/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CONSOLE_API_URL: process.env.NEXT_PUBLIC_CONSOLE_API_URL,
  },
  reactStrictMode: true, // Optional for stricter React development
  images: {
    domains: ["127.0.0.1"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

  // Redirects configuration
  redirects: async () => {
    return [
      {
        source: "/", // Match the root path
        destination: "/en", // Redirect to the locale path (e.g., /en or /ru)
        permanent: true, // Use a permanent (301) redirect
      },
      // Add additional redirects if needed
    ];
  },
};

export default nextConfig;
