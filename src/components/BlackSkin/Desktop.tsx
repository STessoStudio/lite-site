"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

function useSharedProgress() {
	const progress = useMotionValue(0);
	useEffect(() => {
		const controls = animate(progress, 1, {
			duration: 0.25,
			ease: "easeInOut",
			repeatDelay: 0.25,
			repeat: Infinity,
			repeatType: "mirror",
		});
		return () => controls.stop();
	}, [progress]);
	return progress;
}

interface ContactLineProps {
	align?: "left" | "right";
	firstBlock?: boolean;
}

function ContactLine({ align, firstBlock = false }: ContactLineProps) {
	const outerJustify =
		align === "right" ? "justify-end" : align === "left" ? "justify-start" : "justify-center";
	// Block 1 (leftmost on screen) matches white skin's phone inset.
	// 12px ≈ white's 3cqw of (25vw+30px) on a typical desktop viewport.
	const phoneInset = firstBlock ? "mr-3" : "";
	return (
		<div className={`flex w-full ${outerJustify}`}>
			<div className="flex w-1/2 items-end justify-between font-ibm-mono text-xs font-extralight leading-[1.1] text-st-bianco">
				<div className="flex flex-col">
					<a
						href="https://instagram.com/stessostudio"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-st-rosso"
					>
						@stessostudio
					</a>
					<a href="mailto:stessost@gmail.com" className="transition-colors hover:text-st-rosso">
						stessost@gmail.com
					</a>
				</div>
				<div className={`flex h-full items-end ${phoneInset}`}>
					<a href="tel:+393317502777" className="transition-colors hover:text-st-rosso">
						+39 331 75 02 777
					</a>
				</div>
			</div>
		</div>
	);
}

export function BlackSkinDesktop() {
	const progress = useSharedProgress();
	const stForward = useTransform(progress, [0, 1], ["0vw", "25vw"]);
	const stBackward = useTransform(progress, [0, 1], ["25vw", "0vw"]);
	const clickX = useTransform(progress, [0, 1], ["0vw", "65vw"]);

	return (
		<div className="flex h-dvh w-full flex-col bg-st-nero text-st-bianco items-center justify-center gap-0 px-5">
			{/* Row 1 — animates right, contact right-aligned */}
			<div className="flex w-full">
				{[0, 1].map((i) => (
					<div key={i} className="flex w-1/2 flex-col justify-between overflow-visible px-0 py-3">
						<motion.div
							className="flex items-center font-slipstream text-[4vw] leading-none"
							style={{ x: stForward }}
						>
							<span className="mr-[9vw]">ST</span>
							<span>ST</span>
						</motion.div>
						<ContactLine align="right" />
					</div>
				))}
			</div>
			{/* Row 2 — animates left (opposite), contact left-aligned */}
			<div className="flex w-full">
				{[0, 1].map((i) => (
					<div key={i} className="flex w-1/2 flex-col justify-between overflow-visible px-0 py-3">
						<motion.div
							className="flex items-center font-slipstream text-[4vw] leading-none"
							style={{ x: stBackward }}
						>
							<span className="mr-[9vw]">ST</span>
							<span>ST</span>
						</motion.div>
						<ContactLine align="left" firstBlock={i === 0} />
					</div>
				))}
			</div>
			<motion.span
				className="fixed bottom-3 left-5 font-ibm-mono text-xs font-extralight text-st-bianco z-10"
				style={{ x: clickX }}
			>
				Click anywhere
			</motion.span>
		</div>
	);
}
