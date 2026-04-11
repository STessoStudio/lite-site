import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CycleDot } from "./CycleDot";

interface LayoutBiancaProps {
	onCycleLayout: () => void;
	titleCondensed: boolean;
	onTitleClick: () => void;
}

const TITLE_CHARS = "STesso STudio".split("");
const VISIBLE_INDICES = new Set([0, 1, 7, 8]); // S, T ... S, T

export function LayoutBianca({ onCycleLayout, titleCondensed, onTitleClick }: LayoutBiancaProps) {
	const [horseFrame, setHorseFrame] = useState<0 | 1>(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		const delay = setTimeout(() => {
			intervalRef.current = setInterval(
				() => {
					setHorseFrame((prev) => (prev === 0 ? 1 : 0));
				},
				titleCondensed ? 150 : 300,
			);
		}, 500);

		return () => {
			clearTimeout(delay);
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [titleCondensed]);

	return (
		<div className="flex h-dvh w-full flex-col justify-between bg-st-bianco px-6 py-6 text-st-nero">
			{/* Top section */}
			<div className="flex flex-col items-center gap-4">
				<p className="font-ibm-mono text-[10px] font-extralight">never the same</p>

				<div className="flex flex-col items-center gap-1 font-neue-haas text-[22.5px]">
					<span>Graphic design studio</span>
					<span>Based in 72/SFF,</span>
					<span>Brescia</span>
				</div>

				<div className="flex flex-col items-center gap-0.5 font-ibm-mono text-[10px] font-extralight">
					<a
						href="https://instagram.com/stessostudio"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-st-rosso"
					>
						@stessostudio
					</a>
					<a href="mailto:stessostudio@gmail.com" className="transition-colors hover:text-st-rosso">
						stessostudio@gmail.com
					</a>
					<a href="tel:+393317502777" className="transition-colors hover:text-st-rosso">
						+39 331 75 02 777
					</a>
				</div>
			</div>

			{/* Horse image container */}
			<div className="relative flex items-center justify-center">
				{/* biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
				<img
					src={horseFrame === 0 ? "/images/horses-bianca-1.svg" : "/images/horses-bianca-2.svg"}
					alt="Horses illustration"
					className="w-full max-w-[280px] rotate-[9deg]"
				/>
				<CycleDot
					onClick={onCycleLayout}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>

			{/* Bottom section */}
			<div className="flex flex-col gap-2">
				{/* Title */}
				<button
					type="button"
					aria-label="Toggle condensed title"
					onClick={onTitleClick}
					className="cursor-pointer font-neue-haas text-[46px] leading-none select-none text-left"
				>
					{TITLE_CHARS.map((char, i) => (
						<motion.span
							key={`${char}-${TITLE_CHARS.slice(0, i).filter((c) => c === char).length}`}
							animate={{
								opacity: titleCondensed && !VISIBLE_INDICES.has(i) ? 0 : 1,
							}}
							transition={{ duration: 0.2 }}
							className="inline-block"
							style={char === " " ? { width: titleCondensed ? "0.5em" : "0.25em" } : {}}
						>
							{char === " " ? "\u00A0" : char}
						</motion.span>
					))}
				</button>

				{/* Footer contact */}
				<div className="flex items-center justify-between font-ibm-mono text-[10px] font-extralight">
					<a
						href="https://instagram.com/stessostudio"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-st-rosso"
					>
						@stessostudio
					</a>
					<div className="flex gap-2">
						<a
							href="mailto:stessostudio@gmail.com"
							className="transition-colors hover:text-st-rosso"
						>
							stessostudio@gmail.com
						</a>
						<a href="tel:+393317502777" className="transition-colors hover:text-st-rosso">
							+39 331 75 02 777
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
