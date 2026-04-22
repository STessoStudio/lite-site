import { motion } from "framer-motion";

export function RedSkinMobile() {
	return (
		<div className="flex h-dvh w-full items-start justify-center gap-8 bg-st-rosso px-6 text-st-nero">
			{/* Contact info */}
			<div className="flex flex-col items-center font-neue-haas text-[7vw] leading-[7.5vw] mt-[15vh]">
				<a
					href="https://instagram.com/stessostudio"
					target="_blank"
					rel="noopener noreferrer"
					className="transition-colors hover:text-st-bianco mt-30vh"
				>
					@stessostudio
				</a>
				<a href="mailto:stessost@gmail.com" className="transition-colors hover:text-st-bianco">
					stessost@gmail.com
				</a>
				<a href="tel:+393317502777" className="transition-colors hover:text-st-bianco">
					+39 331 75 02 777
				</a>
			</div>

			{/* biome-ignore lint/performance/noImgElement: static export, next/image provides no benefit */}
			<motion.img
				src="/images/horses-red.svg"
				alt="Horses illustration"
				className="fixed top-7/11 left-1/2 z-10 w-9/12 -translate-x-1/2 translate-y-[calc(-75%+9vw)]"
				initial={{ rotate: -5 }}
				animate={{ rotate: -5 }}
				exit={{ rotate: 7 }}
				transition={{ duration: 0.4 }}
			/>
		</div>
	);
}
