"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { LayoutBianca } from "@/components/LayoutBianca";
import { LayoutNera } from "@/components/LayoutNera";
import { LayoutRossa } from "@/components/LayoutRossa";
import { SplashScreen } from "@/components/SplashScreen";

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
			const timer = setTimeout(() => setShowSplash(true), 2000);
			return () => clearTimeout(timer);
		}
	}, [showSplash]);

	return (
		<main className="h-dvh w-full overflow-hidden">
			<AnimatePresence mode="wait">
				{showSplash ? (
					<motion.div
						key="splash"
						initial={{ opacity: 0 }}
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
						<LayoutBianca
							onCycleLayout={cycleLayout}
							titleCondensed={titleCondensed}
							onTitleClick={handleTitleClick}
						/>
					</motion.div>
				) : layout === "nera" ? (
					<motion.div
						key="nera"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<LayoutNera onCycleLayout={cycleLayout} />
					</motion.div>
				) : (
					<motion.div
						key="rossa"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<LayoutRossa onCycleLayout={cycleLayout} />
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
}
