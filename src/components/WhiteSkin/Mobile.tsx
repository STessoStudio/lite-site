import { useEffect, useRef, useState } from "react";

const TITLE_CHARS = "STesso STudio".split("");
const VISIBLE_INDICES = new Set([0, 1, 7, 8]); // S, T ... S, T

export function WhiteSkinMobile() {
	const frame1Ref = useRef<HTMLImageElement>(null);
	const frame2Ref = useRef<HTMLImageElement>(null);
	const intervalMsRef = useRef(130);

	const [titleCondensed, setTitleCondensed] = useState(false);

	useEffect(() => {
		intervalMsRef.current = titleCondensed ? 100 : 130;
	}, [titleCondensed]);

	useEffect(() => {
		let rafId: number;
		let lastFlip = 0;
		let currentFrame = 0;

		const tick = (timestamp: number) => {
			if (lastFlip === 0) lastFlip = timestamp;

			if (timestamp - lastFlip >= intervalMsRef.current) {
				currentFrame ^= 1;
				if (frame1Ref.current) frame1Ref.current.style.display = currentFrame === 0 ? "" : "none";
				if (frame2Ref.current) frame2Ref.current.style.display = currentFrame === 1 ? "" : "none";
				lastFlip = timestamp;
			}

			rafId = requestAnimationFrame(tick);
		};

		const delayId = setTimeout(() => {
			rafId = requestAnimationFrame(tick);
		}, 500);

		return () => {
			clearTimeout(delayId);
			cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<div className="flex h-dvh w-full flex-col justify-between bg-st-bianco px-[4vw] py-3 text-st-nero">
			{/* Top section */}
			<div className="flex flex-col items-center gap-5">
				<p className="font-ibm-mono text-xs font-extralight">never the same</p>

				<div className="flex flex-col items-center font-neue-haas text-[7vw] leading-[7vw]">
					<span>Graphic design studio</span>
					<span>Based in 72/SFF, Brescia</span>
					<span>
						<a
							href="https://www.instagram.com/stessostudio"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors hover:text-st-rosso"
						>
							@stessostudio
						</a>
					</span>
					<span>
						<a href="mailto:stessost@gmail.com" className="transition-colors hover:text-st-rosso">
							stessost@gmail.com
						</a>
					</span>
					<span>
						<a href="tel:+393317502777" className="transition-colors hover:text-st-rosso">
							+39 331 75 02 777
						</a>
					</span>
				</div>
			</div>

			{/* Horse — both frames in DOM; rAF loop toggles display */}
			{/* biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
			<img
				ref={frame1Ref}
				src="/images/horses-white-frame-1.svg"
				alt="Horses illustration"
				className="fixed top-7/11 left-1/2 z-10 w-10/12 -translate-x-1/2 translate-y-[calc(-75%+9vw)] rotate-[7deg]"
			/>
			{/* biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
			<img
				ref={frame2Ref}
				src="/images/horses-white-frame-2.svg"
				alt=""
				aria-hidden="true"
				className="fixed top-7/11 left-1/2 z-10 w-10/12 -translate-x-1/2 translate-y-[calc(-75%+9vw)] rotate-[7deg]"
				style={{ display: "none" }}
			/>

			{/* Bottom section */}
			<div className="flex flex-col gap-2">
				{/* Title */}
				<button
					type="button"
					aria-label="Toggle condensed title"
					onClick={() => setTitleCondensed((prev) => !prev)}
					className="cursor-pointer font-neue-haas text-[13.7vw] leading-none select-none text-left"
				>
					{TITLE_CHARS.map((char, i) => (
						<span
							key={`${char}-${TITLE_CHARS.slice(0, i).filter((c) => c === char).length}`}
							className={`inline-block${titleCondensed && !VISIBLE_INDICES.has(i) ? " opacity-0" : ""}`}
						>
							{char === " " ? "\u00A0" : char}
						</span>
					))}
				</button>

				{/* Footer contact */}
				<div className="flex items-center justify-between font-ibm-mono text-xs font-extralight">
					<div className="flex flex-col">
						<a
							href="https://www.instagram.com/stessostudio"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors hover:text-st-rosso"
						>
							@stessostudio
						</a>
						<a
							href="mailto:stessostudio@gmail.com"
							className="transition-colors hover:text-st-rosso"
						>
							stessostudio@gmail.com
						</a>
					</div>

					<div className="flex h-full items-end">
						<a href="tel:+393317502777" className="transition-colors hover:text-st-rosso">
							+39 331 75 02 777
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
