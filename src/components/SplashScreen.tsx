import { motion } from "framer-motion";

export function SplashScreen() {
	return (
		<motion.div
			className="flex h-dvh w-full flex-col items-center justify-between bg-st-bianco px-6 py-8"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			{/* Top placeholder box with diagonal lines */}
			<div className="mt-16 flex w-full flex-col items-center gap-10">
				<div
					className="h-24 w-52 border border-st-rosso"
					style={{
						backgroundImage:
							"repeating-linear-gradient(45deg, transparent, transparent 6px, #e20303 6px, #e20303 7px)",
					}}
				>
					<div className="flex h-full items-center justify-center bg-st-bianco/80">
						<span className="font-ibm-mono text-[10px] font-medium text-st-rosso">Contact us</span>
					</div>
				</div>

				{/* Red circle with inner ring */}
				<div className="flex h-10 w-10 items-center justify-center rounded-full bg-st-rosso">
					<div className="h-6 w-6 rounded-full border-2 border-st-bianco" />
				</div>

				{/* Smaller placeholder box */}
				<div
					className="h-16 w-36 border border-st-rosso"
					style={{
						backgroundImage:
							"repeating-linear-gradient(45deg, transparent, transparent 6px, #e20303 6px, #e20303 7px)",
					}}
				>
					<div className="h-full w-full bg-st-bianco/80" />
				</div>
			</div>

			{/* Footer */}
			<div className="flex w-full flex-col gap-0.5 font-ibm-mono text-[6px] font-medium text-st-rosso">
				<div className="flex justify-between">
					<span>Developed by</span>
					<span>© STST</span>
				</div>
				<div className="flex justify-between">
					<span>Enea Scaccabarozzi</span>
					<span>All rights res.</span>
				</div>
				<div className="flex justify-end">
					<span>2026</span>
				</div>
			</div>
		</motion.div>
	);
}
