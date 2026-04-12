"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { CycleDot } from "@/components/CycleDot";
import { LayoutNera } from "@/components/LayoutNera";
import { LayoutRossa } from "@/components/LayoutRossa";
import { SplashScreen } from "@/components/SplashScreen";
import { WhiteSkin } from "@/components/WhiteSkin";

type LayoutVariant = "bianca" | "nera" | "rossa";

export default function HomePage() {
	const [showSplash, setShowSplash] = useState(true);
	const [layout, setLayout] = useState<LayoutVariant>("bianca");
	const [titleCondensed, setTitleCondensed] = useState(false);

	const cycleLayout = useCallback(() => {
		setLayout((prev) => {
			if (prev === "bianca") return "nera";
			if (prev === "nera") return "rossa";
			return "bianca";
		});
		setTitleCondensed(false);
	}, []);

	const handleTitleClick = useCallback(() => {
		setTitleCondensed((prev) => !prev);
	}, []);

	useEffect(() => {
		if (showSplash) {
			const timer = setTimeout(() => setShowSplash(false), 1000);
			return () => clearTimeout(timer);
		}
	}, [showSplash]);

	return (
		<main className="h-dvh w-full overflow-hidden">
			<AnimatePresence mode="sync">
				{showSplash ? (
					<motion.div
						key="splash"
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<SplashScreen />
					</motion.div>
				) : layout === "bianca" ? (
					<motion.div
						key="bianca"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<WhiteSkin titleCondensed={titleCondensed} onTitleClick={handleTitleClick} />
					</motion.div>
				) : layout === "nera" ? (
					<motion.div
						key="nera"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<LayoutNera />
					</motion.div>
				) : (
					<motion.div
						key="rossa"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<LayoutRossa />
					</motion.div>
				)}
			</AnimatePresence>
			<CycleDot
				onClick={showSplash ? () => {} : cycleLayout}
				variant={showSplash ? "red" : layout === "nera" ? "outline" : "filled"}
				className="fixed top-7/11 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
			/>
		</main>
	);
}
