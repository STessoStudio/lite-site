import { CycleDot } from "./CycleDot";

interface LayoutRossaProps {
	onCycleLayout: () => void;
}

export function LayoutRossa({ onCycleLayout }: LayoutRossaProps) {
	return (
		<div className="flex h-dvh w-full flex-col items-center justify-center gap-8 bg-st-rosso px-6 text-st-nero">
			{/* Contact info */}
			<div className="flex flex-col items-center gap-1 font-neue-haas text-[22.5px]">
				<a
					href="https://instagram.com/stessostudio"
					target="_blank"
					rel="noopener noreferrer"
					className="transition-colors hover:text-st-bianco"
				>
					@stessostudio
				</a>
				<a href="mailto:stessostudio@gmail.com" className="transition-colors hover:text-st-bianco">
					stessostudio@gmail.com
				</a>
				<a href="tel:+393317502777" className="transition-colors hover:text-st-bianco">
					+39 331 75 02 777
				</a>
			</div>

			{/* Horse image container */}
			<div className="relative flex items-center justify-center">
				{/* biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
				<img
					src="/images/horses-rossa.svg"
					alt="Horses illustration"
					className="w-full max-w-[280px] rotate-[9deg]"
				/>
				<CycleDot
					onClick={onCycleLayout}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
		</div>
	);
}
