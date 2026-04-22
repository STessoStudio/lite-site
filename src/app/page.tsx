"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlackSkinDesktop } from "@/components/BlackSkin/Desktop";
import { BlackSkinMobile } from "@/components/BlackSkin/Mobile";
import { CycleDot } from "@/components/CycleDot";
import { RedSkinDesktop } from "@/components/RedSkin/Desktop";
import { RedSkinMobile } from "@/components/RedSkin/Mobile";
import { SplashScreen } from "@/components/SplashScreen";
import { WhiteSkinDesktop } from "@/components/WhiteSkin/Desktop";
import { WhiteSkinMobile } from "@/components/WhiteSkin/Mobile";
import { useIsDesktop } from "@/lib/useIsDesktop";

type LayoutVariant = "bianca" | "nera" | "rossa";

export default function HomePage() {
	const isDesktop = useIsDesktop();
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
		if (isDesktop) {
			setShowSplash(false);
			return;
		}
		if (showSplash) {
			const timer = setTimeout(() => setShowSplash(false), 1500);
			return () => clearTimeout(timer);
		}
	}, [showSplash, isDesktop]);

	const handleClick = useCallback(
		(e: React.MouseEvent) => {
			if (!isDesktop || showSplash) return;
			const target = e.target as HTMLElement;
			if (target.closest("a, button")) return;
			cycleLayout();
		},
		[isDesktop, showSplash, cycleLayout],
	);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (!isDesktop || showSplash) return;
			if (e.key === "Enter" || e.key === " ") {
				const target = e.target as HTMLElement;
				if (target.closest("a, button")) return;
				cycleLayout();
			}
		},
		[isDesktop, showSplash, cycleLayout],
	);

	return (
		<main
			className="relative h-dvh w-full overflow-hidden sm:cursor-pointer"
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			<AnimatePresence mode="sync">
				{showSplash ? (
					<motion.div
						key="splash"
						className="absolute inset-0 sm:hidden"
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: isDesktop ? 0 : 0.8, ease: "easeInOut" }}
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
						{isDesktop ? <WhiteSkinDesktop /> : <WhiteSkinMobile onHorseClick={cycleLayout} />}
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
						{isDesktop ? <BlackSkinDesktop /> : <BlackSkinMobile />}
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
						{isDesktop ? <RedSkinDesktop /> : <RedSkinMobile />}
					</motion.div>
				)}
			</AnimatePresence>
			<div className="sm:hidden">
				<CycleDot
					onClick={showSplash ? () => {} : cycleLayout}
					variant={showSplash ? "red" : layout === "rossa" ? "red" : "filled"}
					className="fixed top-7/11 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
				/>
			</div>
		</main>
	);
}
