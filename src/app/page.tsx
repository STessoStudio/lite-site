"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlackSkin } from "@/components/BlackSkin";
import { CycleDot } from "@/components/CycleDot";
import { RedSkin } from "@/components/RedSkin";
import { SplashScreen } from "@/components/SplashScreen";
import { WhiteSkin } from "@/components/WhiteSkin";

type LayoutVariant = "bianca" | "nera" | "rossa";

export default function HomePage() {
	const [showSplash, setShowSplash] = useState(true);
	const [layout, setLayout] = useState<LayoutVariant>("bianca");

	const cycleLayout = useCallback(() => {
		setLayout((prev) => {
			if (prev === "bianca") return "nera";
			if (prev === "nera") return "rossa";
			return "bianca";
		});
	}, []);

	useEffect(() => {
		if (showSplash) {
			const timer = setTimeout(() => setShowSplash(false), 1000);
			return () => clearTimeout(timer);
		}
	}, [showSplash]);

	return (
		<main className="relative h-dvh w-full overflow-hidden">
			<AnimatePresence mode="sync">
				{showSplash ? (
					<motion.div
						key="splash"
						className="absolute inset-0"
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<SplashScreen />
					</motion.div>
				) : layout === "bianca" ? (
					<motion.div
						key="bianca"
						className="absolute inset-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<WhiteSkin />
					</motion.div>
				) : layout === "nera" ? (
					<motion.div
						key="nera"
						className="absolute inset-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<BlackSkin />
					</motion.div>
				) : (
					<motion.div
						key="rossa"
						className="absolute inset-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<RedSkin />
					</motion.div>
				)}
			</AnimatePresence>
			<CycleDot
				onClick={showSplash ? () => {} : cycleLayout}
				variant={showSplash ? "red" : layout === "rossa" ? "red" : "filled"}
				className="fixed top-7/11 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
			/>
		</main>
	);
}
