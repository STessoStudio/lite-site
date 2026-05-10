export function RedSkinMobile() {
	return (
		<div className="flex h-dvh w-full flex-col bg-st-rosso px-[4vw] py-3 text-st-nero">
			{/* Top section — mirrors WhiteSkinMobile so the 3 visible lines overlap pixel-perfectly on skin switch */}
			<div className="flex flex-col items-center gap-5">
				<p className="font-ibm-mono text-xs font-extralight invisible">never the same</p>

				<div className="flex flex-col items-center font-neue-haas text-[7vw] leading-[7vw]">
					<span className="invisible">Graphic design studio</span>
					<span className="invisible">Based in 72/SFF, Brescia</span>
					<span>
						<a
							href="https://instagram.com/stessostudio"
							target="_blank"
							rel="noopener noreferrer"
							className="touch-manipulation transition-colors hover:text-st-bianco"
						>
							@stessostudio
						</a>
					</span>
					<span>
						<a
							href="mailto:stessost@gmail.com"
							className="touch-manipulation transition-colors hover:text-st-bianco"
						>
							stessost@gmail.com
						</a>
					</span>
					<span>
						<a
							href="tel:+393317502777"
							className="touch-manipulation transition-colors hover:text-st-bianco"
						>
							+39 331 75 02 777
						</a>
					</span>
				</div>
			</div>

			{/* Reuse white-frame-2 src and white skin's transforms so the embedded circle aligns with CycleDot */}
			{/* biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
			<img
				src="/images/horses-white-frame-2.svg"
				alt="Horses illustration"
				className="fixed top-7/11 left-1/2 z-10 w-9/12 -translate-x-1/2 translate-y-[calc(-75%+9vw)] rotate-[7deg] touch-manipulation"
			/>
		</div>
	);
}
