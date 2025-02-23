import clsx from "clsx";
import Icons from "@/components/icons";
type GeneralButtonPropsT = {
	type?: "primary" | "secondary" | "link";
	iconName?: string;
	onClick: () => void;
	className?: string;
	id?: string;
} & (
	| {
			label: string;
			iconPosition?: "left" | "right";
	  }
	| {
			label?: undefined;
			iconPosition?: undefined;
	  }
);

const Button = ({
	iconName,
	iconPosition = "right",
	label,
	type = "primary",
	className = "",
	id,
	onClick,
}: GeneralButtonPropsT) => {
	className = clsx(
		"button",
		`button-${type}`,
		{
			"button-icon-only": !label,
			"button-icon-right": iconName && iconPosition === "right",
			"button-icon-left": iconName && iconPosition === "left",
		},
		className
	);

	const handleClick = () => {
		onClick();
	};

	const Icon = iconName ? Icons[iconName as keyof typeof Icons] : null;

	return (
		<div
			id={id}
			className={className}
			onClick={handleClick}
		>
			<div className="layout">
				{Icon && (
					<div className="button-icon">
						<Icon />
					</div>
				)}
				<div className="button-label">{label}</div>
			</div>
		</div>
	);
};

export default Button;
