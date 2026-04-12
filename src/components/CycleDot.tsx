interface CycleDotProps {
	onClick: () => void;
	variant?: "filled" | "outline" | "red";
	className?: string;
}

export function CycleDot({ onClick, variant = "filled", className = "" }: CycleDotProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label="Cambia layout"
			className={`cursor-pointer rounded-full aspect-square transition-all duration-400 ${
				variant === "outline"
					? " w-[12vw] border-2 border-st-bianco bg-st-bianco"
					: variant === "red"
						? " w-[10.9vw] bg-st-rosso"
						: "w-[10.9vw] bg-st-bianco"
			} ${className}`}
		/>
	);
}
