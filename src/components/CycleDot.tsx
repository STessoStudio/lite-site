interface CycleDotProps {
	onClick: () => void;
	variant?: "filled" | "outline";
	className?: string;
}

export function CycleDot({ onClick, variant = "filled", className = "" }: CycleDotProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label="Cambia layout"
			className={`cursor-pointer rounded-full ${
				variant === "outline"
					? "h-8 w-8 border-2 border-st-bianco bg-st-bianco"
					: "h-6 w-6 bg-st-bianco"
			} ${className}`}
		/>
	);
}
