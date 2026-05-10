import { motion } from "framer-motion";

export function RedSkinDesktop() {
	return (
		<div className="h-dvh w-full bg-st-rosso text-st-nero">
			<p className="font-ibm-mono text-xs font-extralight w-full text-right pr-[20vw] pt-3 invisible">
				never the same
			</p>

			{/* Mirror WhiteSkinDesktop's contact box so visible contact lines overlap on skin switch */}
			<div
				className="flex h-[calc(50vh+4vw+18px)] w-[calc(25vw+30px)] flex-col justify-between px-5 py-2"
				style={{ containerType: "inline-size" }}
			>
				{/* Top section — replicates white skin's 5-line layout with first 2 invisible */}
				<div className="flex flex-col items-center gap-[2cqw]">
					<div className="flex flex-col items-center font-neue-haas text-[7cqw] leading-[7cqw]">
						<span className="invisible">Graphic design studio</span>
						<span className="invisible">Based in 72/SFF, Brescia</span>
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
				{/** biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
				<motion.img
					src="/images/horses-red.svg"
					alt="Horses illustration"
					className="w-9/12 self-center mb-16"
					initial={{ rotate: -5 }}
					animate={{ rotate: -5 }}
					exit={{ rotate: 7 }}
					transition={{ duration: 0.4 }}
				/>
			</div>
			<span className="fixed bottom-3 left-5 font-ibm-mono text-xs font-extralight text-st-nero z-10">
				Click anywhere
			</span>
		</div>
	);
}
