import clsx from "clsx";
import Icons from "@/components/icons";
type ButtonLinkPropsT = {
	type?: "primary" | "secondary" | "link";
	iconName?: string;
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

const ButtonLink = ({
	iconName,
	iconPosition = "right",
	label,
	type = "primary",
	className = "",
	id,
}: ButtonLinkPropsT) => {
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

	const Icon = iconName ? Icons[iconName as keyof typeof Icons] : null;

	return (
		<div
			id={id}
			className={className}
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

export default ButtonLink;
