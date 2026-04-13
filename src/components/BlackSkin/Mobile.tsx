"use client";

import { motion } from "framer-motion";

const ROWS = ["row-1", "row-2", "row-3", "row-4"] as const;

function ContactLine() {
	return (
		<div className="flex items-center justify-between font-ibm-mono text-xs font-extralight text-st-bianco">
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

export function BlackSkinMobile() {
	return (
		<div className="flex h-dvh w-full flex-col justify-between bg-st-nero px-[4vw] py-3 text-st-bianco">
			<div className="flex flex-col gap-2">
				{ROWS.map((id, index) => {
					const isOdd = (index + 1) % 2 !== 0;
					return (
						<div key={id} className="flex flex-col gap-1 px-1">
							<motion.div
								className="flex items-center font-slipstream text-[13.5vw] leading-none"
								animate={{ x: isOdd ? ["0vw", "20vw"] : ["20vw", "0vw"] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									repeatDelay: 0.25,
									repeat: Infinity,
									repeatType: "mirror" as const,
								}}
							>
								<span className="mr-[38vw]">ST</span>
								<span>ST</span>
							</motion.div>
							<ContactLine />
						</div>
					);
				})}
			</div>

			{/* Row 5 at bottom */}
			<div className="flex flex-col gap-1">
				<div className="flex items-center font-slipstream text-[13.5vw] leading-none">
					<span className="mr-[38vw]">ST</span>
					<span>ST</span>
				</div>
				<ContactLine />
			</div>
		</div>
	);
}
