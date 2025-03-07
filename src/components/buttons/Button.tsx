import { FormEvent } from "react";
import clsx from "clsx";
import Icons from "@/components/icons";
type GeneralButtonPropsT = {
	isDisabled?: boolean;
	variant?: "primary" | "secondary";
	type?: "button" | "submit" | "reset";
	iconName?: string;
	onClick?: () => void;
	onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
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
	variant = "primary",
	type = "button",
	className = "",
	id,
	isDisabled = false,
	onClick,
	onSubmit,
}: GeneralButtonPropsT) => {
	className = clsx(
		"button",
		`button-${variant}`,
		{
			"button-icon-only": !label,
			"button-icon-right": iconName && iconPosition === "right",
			"button-icon-left": iconName && iconPosition === "left",
			"button-disabled": isDisabled,
		},
		className
	);

	const handleClick = (e: FormEvent<HTMLButtonElement>) => {
		if (isDisabled) return;
		if (onClick) onClick();
		if (onSubmit) onSubmit(e as unknown as FormEvent<HTMLFormElement>);
	};

	const Icon = iconName ? Icons[iconName as keyof typeof Icons] : null;

	return (
		<button
			id={id}
			type={type}
			className={className}
			onClick={handleClick}
			disabled={isDisabled}
		>
			<div className="layout">
				{Icon && (
					<div className="button-icon">
						<Icon />
					</div>
				)}
				<div className="button-label">{label}</div>
			</div>
		</button>
	);
};

export default Button;
