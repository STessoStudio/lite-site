import { motion } from "framer-motion";

const XLines = () => (
	<svg
		className="absolute inset-0 w-full h-full z-1"
		viewBox="0 0 100 100"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<line
			x1="0"
			y1="0"
			x2="100"
			y2="100"
			stroke="#e20303"
			strokeWidth="1"
			vectorEffect="non-scaling-stroke"
		/>
		<line
			x1="100"
			y1="0"
			x2="0"
			y2="100"
			stroke="#e20303"
			strokeWidth="1"
			vectorEffect="non-scaling-stroke"
		/>
	</svg>
);

export function SplashScreen() {
	return (
		<motion.div
			className="flex h-dvh w-full flex-col items-center bg-st-bianco px-4 py-3 justify-between"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			{/* Big placeholder box with X pattern */}
			<div className="relative flex w-10/12 items-center justify-center border border-st-rosso aspect-243/110 mt-[10%]">
				<XLines />
				<span className="bg-st-bianco px-4 py-2 font-ibm-mono text-[10px] font-medium text-st-rosso relative z-10">
					Contact us
				</span>
			</div>

			{/* Red dot — solid */}
			<div className="h-10 w-10 rounded-full bg-st-rosso absolute top-6/9 left-1/2 -translate-x-1/2 -translate-y-1/2" />

			<div className="w-full flex-col items-center justify-center gap-5 flex">
				{/* Small placeholder box with X pattern */}
				<div className="relative w-full border border-st-rosso aspect-270/35">
					<XLines />
				</div>

				{/* Footer */}
				<div className="flex w-full flex-row font-ibm-mono text-[8px] font-medium text-st-rosso justify-between items-end">
					<div className="flex flex-row gap-8">
						<div className="flex flex-col">
							<span>Developed by</span>
							<span>
								<a href="https://eneascaccabarozzi.xyz" target="_blank" rel="noopener noreferrer">
									Enea Scaccabarozzi
								</a>
							</span>
						</div>
						<div className="flex flex-col">
							<span>© STessoSTudio</span>
							<span>All rights reserved</span>
						</div>
					</div>

					<div className="flex h-full flex-col items-end justify-end">
						<span>2026</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
