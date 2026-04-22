import { useEffect, useRef } from "react";

export function WhiteSkinDesktop() {
	const frame1Ref = useRef<HTMLImageElement>(null);
	const frame2Ref = useRef<HTMLImageElement>(null);
	const intervalMsRef = useRef(170);
	const dotsRef = useRef<HTMLSpanElement>(null);

	// Single rAF loop: timestamp-based timing, direct DOM toggle, zero React re-renders
	// Intentionally runs once on mount; intervalMsRef is read live during each tick
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
				if (dotsRef.current) dotsRef.current.style.display = currentFrame === 0 ? "" : "none";
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
		<div className="h-dvh w-full bg-st-bianco text-st-nero">
			<p className="font-ibm-mono text-xs font-extralight w-full text-right pr-[20vw] pt-3">
				never the same
			</p>

			{/* Content box — phone-ratio container pinned to upper-left */}
			<div
				className="flex h-[60vh] aspect-3/4 flex-col justify-between px-5 py-2"
				style={{ containerType: "inline-size" }}
			>
				{/* Top section */}
				<div className="flex flex-col items-center gap-[2cqw]">
					<div className="flex flex-col items-center font-neue-haas text-[7cqw] leading-[7cqw]">
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

				<div className="w-full">
					{/* Title — static on desktop */}
					<span className="font-neue-haas text-[15.5cqw] leading-none">STesso STudio</span>

					{/* Footer contact */}
					<div className="flex items-end justify-between font-ibm-mono text-xs font-extralight leading-[1.1]">
						<div className="flex flex-col">
							<a
								href="https://www.instagram.com/stessostudio"
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

						<div className="flex h-full items-end">
							<a href="tel:+393317502777" className="transition-colors hover:text-st-rosso">
								+39 331 75 02 777
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Horse — both frames in DOM so both are pre-loaded; rAF loop toggles display */}
			{/* biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
			<img
				ref={frame1Ref}
				src="/images/horses-white-frame-1-desktop.svg"
				alt="Horses illustration"
				className="fixed top-1/2 left-1/2 z-20 w-10/12 translate-x-[calc(-50%+5vw)] translate-y-[calc(-50%+3vh)]"
			/>
			{/* biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
			<img
				ref={frame2Ref}
				src="/images/horses-white-frame-2-desktop.svg"
				alt=""
				aria-hidden="true"
				className="fixed top-1/2 left-1/2 z-20 w-10/12 translate-x-[calc(-50%+5vw)] translate-y-[calc(-50%+3vh)]"
				style={{ display: "none" }}
			/>
			<span className="fixed bottom-3 left-5 font-ibm-mono text-xs font-extralight text-st-nero z-30">
				Click anywhere<span ref={dotsRef}>...</span>
			</span>
		</div>
	);
}
