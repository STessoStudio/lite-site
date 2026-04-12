import type { Metadata } from "next";
import { ibmPlexMono, neueHaasGrotesk, slipstream } from "@/lib/fonts";
import { SITE_DESCRIPTION, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: "STST — STesso STudio | Graphic Design Studio Brescia",
	description: SITE_DESCRIPTION,
	keywords: [
		"graphic design",
		"Brescia",
		"branding",
		"identità visiva",
		"comunicazione visiva",
		"studio grafico",
		"STesso STudio",
		"STST",
	],
	authors: [{ name: SITE_NAME }],
	openGraph: {
		type: "website",
		locale: SITE_LOCALE,
		url: "/",
		siteName: SITE_NAME,
		title: "STST — STesso STudio | Graphic Design Studio Brescia",
		description: SITE_DESCRIPTION,
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "STST — STesso STudio, graphic design studio a Brescia",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "STST — STesso STudio | Graphic Design Studio Brescia",
		description: SITE_DESCRIPTION,
		images: ["/images/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "/",
	},
	formatDetection: {
		telephone: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": ["Organization", "ProfessionalService"],
		name: "STesso STudio",
		alternateName: "STST",
		url: SITE_URL,
		email: "stessost@gmail.com",
		telephone: "+39 331 75 02 777",
		description: SITE_DESCRIPTION,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Brescia",
			addressCountry: "IT",
		},
		sameAs: ["https://www.instagram.com/stessostudio"],
	};

	return (
		<html
			lang="it"
			className={`h-full antialiased ${ibmPlexMono.variable} ${neueHaasGrotesk.variable} ${slipstream.variable}`}
		>
			<body className="min-h-full flex flex-col" suppressHydrationWarning>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
