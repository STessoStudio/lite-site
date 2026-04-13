"use client";

import { motion } from "framer-motion";

const TRANSITION = {
	duration: 0.25,
	ease: "easeInOut" as const,
	repeatDelay: 0.25,
	repeat: Infinity,
	repeatType: "mirror" as const,
};

interface ContactLineProps {
	align?: "left" | "right";
}

function ContactLine({ align }: ContactLineProps) {
	const justifyClass =
		align === "right"
			? "justify-end gap-4"
			: align === "left"
				? "justify-start gap-4"
				: "justify-between";
	return (
		<div
			className={`flex items-center ${justifyClass} font-ibm-mono text-xs font-extralight text-st-bianco`}
		>
			<div className="flex flex-col leading-4">
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
			<div className="flex items-end h-full">
				<a href="tel:+393317502777" className="transition-colors hover:text-st-rosso">
					+39 331 75 02 777
				</a>
			</div>
		</div>
	);
}

export function BlackSkinDesktop() {
	return (
		<div className="flex h-dvh w-full flex-col bg-st-nero text-st-bianco items-center justify-center gap-8 px-6">
			{/* Row 1 — animates right, contact right-aligned */}
			<div className="flex w-full">
				{[0, 1].map((i) => (
					<div
						key={i}
						className="flex w-1/2 flex-col justify-between overflow-visible px-[2vw] py-3"
					>
						<motion.div
							className="flex items-center font-slipstream text-[4vw] leading-none"
							animate={{ x: ["0vw", "20vw"] }}
							transition={TRANSITION}
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
					<div
						key={i}
						className="flex w-1/2 flex-col justify-between overflow-visible px-[2vw] py-3"
					>
						<motion.div
							className="flex items-center font-slipstream text-[4vw] leading-none"
							animate={{ x: ["20vw", "0vw"] }}
							transition={TRANSITION}
						>
							<span className="mr-[9vw]">ST</span>
							<span>ST</span>
						</motion.div>
						<ContactLine align="left" />
					</div>
				))}
			</div>
			<motion.span
				className="fixed bottom-3 left-3 font-ibm-mono text-xs font-extralight text-st-bianco z-10"
				animate={{ x: ["0vw", "20vw"] }}
				transition={TRANSITION}
			>
				Click anywhere...
			</motion.span>
		</div>
	);
}
