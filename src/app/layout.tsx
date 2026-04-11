import type { Metadata } from "next";
import { ibmPlexMono, neueHaasGrotesk, slipstream } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "STST",
	description: "STesso STudio — Graphic design studio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`h-full antialiased ${ibmPlexMono.variable} ${neueHaasGrotesk.variable} ${slipstream.variable}`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
