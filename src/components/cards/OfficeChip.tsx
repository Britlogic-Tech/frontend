import { cn } from "@/lib/utils";
type OfficeChipPropsT = {
	id: string;
	name: string;
	phone: string;
	address: string;
	email: string;
	className?: string;
	variant?: "dark" | "light";
};

const OfficeChip = ({
	id,
	name,
	phone,
	address,
	email,
	className = "",
	variant = "dark",
}: OfficeChipPropsT) => {
	return (
		<div
			id={id}
			className={cn(
				"office-chip",
				variant,
				"relative z-10 flex max-w-max flex-1 items-center justify-center",
				className
			)}
		>
			<div className="flex flex-col gap-0">
				<h3>{name}</h3>
				<p>{address}</p>
				<p>{phone}</p>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
		</div>
	);
};

export default OfficeChip;
