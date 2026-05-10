import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	allowedDevOrigins: ["192.168.1.53", "192.168.1.247"],
};

export default nextConfig;
