import localFont from "next/font/local";

// IBM Plex Mono — two weights sharing one family
// ExtraLight (200): body/contact text, footer
// Medium (500): "Contact us" button, footer credits
export const ibmPlexMono = localFont({
	src: [
		{ path: "../fonts/IBMPlexMono-ExtraLight.ttf", weight: "200" },
		{ path: "../fonts/IBMPlexMono-Medium.ttf", weight: "500" },
	],
	variable: "--font-ibm-mono-var",
	display: "swap",
});

// Neue Haas Grotesk Display Pro 65 Medium — single weight
// Headings, "STesso STudio" title (46px, 22.5px)
export const neueHaasGrotesk = localFont({
	src: [
		{ path: "../fonts/NeueHaasGroteskDisplay65Medium.woff2", style: "normal" },
		{ path: "../fonts/NeueHaasGroteskDisplay65Medium.woff", style: "normal" },
	],
	variable: "--font-neue-haas-var",
	display: "swap",
	weight: "500",
});

// Slipstream Std Demi — single weight
// "ST" logo pairs in Nera layout
export const slipstream = localFont({
	src: [
		{ path: "../fonts/SlipstreamStdDemi.woff2", style: "normal" },
		{ path: "../fonts/SlipstreamStdDemi.woff", style: "normal" },
	],
	variable: "--font-slipstream-var",
	display: "swap",
	weight: "600",
});
