"use client";
import { cn } from "@/lib/utils";
type ServcieCardPropsT = {
	id: string;
	title: string;
	excerpt: string;
	isInteractive?: boolean;
	className?: string;
	variant?: "dark" | "light";
};

const Chip = ({
	id,
	title,
	excerpt,
	isInteractive = false,
	className = "",
	variant = "light",
}: ServcieCardPropsT) => {
	return (
		<div
			id={id}
			className={cn(
				"chip",
				variant,
				{ interactive: isInteractive },
				"relative z-10 flex max-w-max flex-1 items-center justify-center",
				className
			)}
		>
			<h3>{title}</h3>
			<p>{excerpt}</p>
		</div>
	);
};

export default Chip;
