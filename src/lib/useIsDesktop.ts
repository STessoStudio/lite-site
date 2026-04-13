import { useEffect, useState } from "react";

export function useIsDesktop(): boolean {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 640px)");
		setIsDesktop(mq.matches);
		const handler = (e: MediaQueryListEvent): void => setIsDesktop(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);

	return isDesktop;
}
