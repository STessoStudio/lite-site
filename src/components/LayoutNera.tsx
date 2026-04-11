import { CycleDot } from "./CycleDot";

interface LayoutNeraProps {
	onCycleLayout: () => void;
}

const ROW_OFFSETS = ["pl-2", "pl-8", "pl-16", "pl-4", "pl-6"] as const;

function ContactLine() {
	return (
		<div className="flex items-center justify-between px-2 font-ibm-mono text-[10px] font-extralight text-st-bianco">
			<div className="flex gap-2">
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
			</div>
			<a href="tel:+393317502777" className="transition-colors hover:text-st-rosso">
				+39 331 75 02 777
			</a>
		</div>
	);
}

export function LayoutNera({ onCycleLayout }: LayoutNeraProps) {
	return (
		<div className="flex h-dvh w-full flex-col justify-between bg-st-nero px-2 py-6 text-st-bianco">
			<div className="flex flex-col gap-1">
				{/* Rows 1-4 with contact lines */}
				{ROW_OFFSETS.slice(0, 4).map((offset) => (
					<div key={offset} className="flex flex-col gap-1">
						<div
							className={`flex items-center justify-between font-slipstream text-[46px] leading-none ${offset}`}
						>
							<span>ST</span>
							<span>ST</span>
						</div>
						<ContactLine />
					</div>
				))}
			</div>

			{/* Cycle dot centered */}
			<div className="flex items-center justify-center py-4">
				<CycleDot onClick={onCycleLayout} variant="outline" />
			</div>

			{/* Row 5 at bottom */}
			<div className="flex flex-col gap-1">
				<div
					className={`flex items-center justify-between font-slipstream text-[46px] leading-none ${ROW_OFFSETS[4]}`}
				>
					<span>ST</span>
					<span>ST</span>
				</div>
				<ContactLine />
			</div>
		</div>
	);
}
